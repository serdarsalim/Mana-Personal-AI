# Mana — public demo

An interactive, fully usable demo of **Mana**, a self-hosted personal cockpit for your goals, money, groceries, people, and projects, all in one place and driven by chat or voice.

Live at **[mana.serdarsalim.com](https://mana.serdarsalim.com)**.

## What this is

This is the **real Mana client**, compiled with a demo flag. A [Mock Service Worker](https://mswjs.io) intercepts every `/api/*` call and serves it from your browser's `localStorage`, so the exact same app runs with **no server, no LLM, and no database**.

That means:

- **Use the tools by hand.** Add goals, tick off weekly tasks, log expenses, move groceries into the pantry, leave notes on people in your circles, study a sample learning path, or write a post. Edits save in your browser.
- **It's yours alone.** Each visitor gets their own sandbox in their own browser. No accounts, no shared state, nothing sent anywhere.
- **Chat is scripted and voice is off.** AI claims checks, image generation, external publishing and background agents need your own connected Mana. Scheduling in this demo saves a local plan.

No private vault data ships here, only fictional sample content for a made-up user. Uploaded images also stay in browser storage and survive reloads. Settings → Reset demo clears your sandbox.

## How it works

| Layer | In the real cockpit | In this demo |
| --- | --- | --- |
| UI | Lit + Vite client | identical, same source |
| Backend | Node server + SQLite | Mock Service Worker over `localStorage` |
| Brain | an LLM you connect | a canned, scripted teaser |

Because the demo is the real client with only the network boundary faked, it stays 1:1 with the actual product.

## Running it locally

It's a static site, but it needs to be served over http (a service worker won't run from `file://`):

```bash
cd public
python3 -m http.server 8080
# open http://127.0.0.1:8080
```

## Deploying

Vercel serves the prebuilt `public/` directory as static files. It does **not** build Mana. Run `./publish.sh` to fast-forward the local Mana source, check types and API contracts, rebuild `public/`, and scan the artifact. It never commits or pushes, and it never hard-resets source changes.

Use `./publish.sh --local` to build a committed local source revision for review. `MANA_SRC` can select another local clone. Mounted vault paths are refused. `public/demo-build.json` records the source revision and build time so a deployment can be verified against the reviewed bundle.

Commit the reviewed artifact, then push only after Serdar authorizes publication. Source fixes belong in the private Mana repo; the public repo holds only the compiled client, fictional fixtures and deployment scripts.

## License

Copyright (C) 2026 Serdar Salim.

Licensed under the [GNU Affero General Public License v3.0](LICENSE). If you run a modified version of this as a network service, you must make your source available to its users.
