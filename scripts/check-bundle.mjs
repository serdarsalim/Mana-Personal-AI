// Validate the public artifact before it can be committed for deployment.
import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve(import.meta.dirname, "../public");
async function walk(dir) {
  const files = [];
  for (const name of await readdir(dir)) {
    const p = path.join(dir, name);
    if ((await stat(p)).isDirectory()) files.push(...await walk(p)); else files.push(p);
  }
  return files;
}
const files = await walk(root);
assert.ok(files.length > 0);
const manifest = JSON.parse(await readFile(path.join(root, "demo-build.json"), "utf8"));
assert.match(manifest.sourceRevision, /^[a-f0-9]{40}$/);
const html = await readFile(path.join(root, "index.html"), "utf8");
for (const match of html.matchAll(/(?:src|href)="(\/[^"?#]+)"/g)) {
  assert.ok(files.includes(path.join(root, match[1])), `Missing HTML asset: ${match[1]}`);
}
for (const file of files) {
  assert.ok(!/\.(map|md|ts|sqlite|db|env)$/.test(file), `Private/source file in public output: ${file}`);
  if (!/\.(js|html|css|json|svg)$/.test(file)) continue;
  const text = await readFile(file, "utf8");
  for (const pattern of [/\/Volumes\/server\/SLMAI/, /\/Users\/slm\/server\/SLMAI/, /macbook-pro\.tail2d353b\.ts\.net/, /sk-(?:proj-|ant-)[A-Za-z0-9_-]{20,}/, /BEGIN (?:RSA |OPENSSH )?PRIVATE KEY/]) {
    assert.ok(!pattern.test(text), `Private infrastructure or credential in ${file}`);
  }
  assert.ok(!/sourceMappingURL=/.test(text), `Source map reference in ${file}`);
}
console.log(`Public bundle passed: ${files.length} files, all HTML assets present, no source maps, vault paths or credential signatures.`);
