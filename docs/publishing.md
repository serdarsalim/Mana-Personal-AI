# Publishing the demo

Vercel serves the prebuilt `public/` directory as static files. It does **not** build Mana. Run `./publish.sh` to fast-forward the local Mana source, check types and API contracts, rebuild `public/`, and scan the artifact. It never commits or pushes, and it never hard-resets source changes.

Use `./publish.sh --local` to build a committed local source revision for review. `MANA_SRC` can select another local clone. Mounted vault paths are refused. `public/demo-build.json` records the source revision and build time so a deployment can be verified against the reviewed bundle.

Commit the reviewed artifact, then push only after Serdar authorizes publication. Source fixes belong in the private Mana repo; the public repo holds only the compiled client, fictional fixtures and deployment scripts.

