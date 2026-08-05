# Working in this repo

A portfolio of self-contained web apps, sold as customised copies to small
Indian businesses. Each app is one HTML file with no dependencies and no
build step. `index.html` is the shop window; every other `.html` is a product.

Run `node tools/check.mjs` before committing. It is fast, needs nothing
installed, and every assertion in it exists because that mistake actually
happened here.

## Hard constraints

These are the product, not preferences. Breaking one turns a sellable app
into an ordinary web page.

- **One file per app.** No imports, no `<script src>`, no CSS files, no
  build step. If something needs a library, it does not belong here.
- **Works offline.** Nothing may be fetched at page load. Runtime calls to
  a declared API (weather, traffic) are fine when the user brings their own
  key and the app degrades gracefully without it.
- **No image files.** Cover art, icons and previews are CSS gradients,
  shapes and emoji. User uploads are embedded as `data:` URIs.
- **No accounts, no server.** Data lives in `localStorage`, or IndexedDB
  when volume demands it. Nothing leaves the device.
- **Every app has a demo cap.** A `DEMO_MAX_*` constant, enforced, with a
  toast reading `Demo limit: N x. The full version is unlimited — enquire
  on the homepage.` The emoji simulator is the deliberate exception.

## Traps that have already caught someone

- **Counts go stale.** The homepage said "twelve" while rendering 13 cards.
  Derive from `PRODUCTS.length`; never write the number twice.
- **The grid renders grouped by category, not in `PRODUCTS` order.** Two
  covers that look adjacent in the array are not adjacent on screen, and
  vice versa.
- **Adding a card is three edits**, not one: `PRODUCTS` in `index.html`, the
  README link table, and a README section. The checker enforces all three.
- **`padding: 13px 0` silently resets `.wrap`'s horizontal padding.** Use
  `padding-block`. This shipped and ran the nav off the edge of every phone.
- **Auto margins turn off a grid item's stretch.** A grid child holding only
  absolutely-positioned children then collapses to 0 wide. Set an explicit
  `width`.
- **`min-height` only sets a floor.** For a row of previews that must line
  up, set `height` with `overflow: hidden`.
- **Content must never start at `opacity: 0`.** Scroll reveals are gated
  behind a class JavaScript adds, so the page is readable without it.
- **store-builder's runtime is serialised with `toString()`** and re-run
  inside an iframe and the exported file. Nothing from the builder's scope
  is visible to it — pass values in as arguments.
- **An OpenAI-compatible API is not a browser-callable one.** NVIDIA's
  free-credit endpoint was built into `see-a-doctor.html` and removed: it
  refuses cross-origin browser requests, and with no server there is no fix.
  Test CORS from a real browser before adding any provider.
- **Money is integer paise, quantities are thousandths.** No float ever
  touches a bill total.

## Verifying

- `node tools/check.mjs` — catalogue, docs and demo caps agree. Zero deps.
- `billing-pos.html?selftest=1` — 77 assertions over the GST maths.
- Both run in CI on every push via `.github/workflows/checks.yml`.
- For anything visual, drive a real browser and **measure** — a screenshot
  hid a 0px-wide hero for a whole round, and `scrollWidth` said the nav was
  fine while it ran off the screen. Assert on geometry, not appearance.
- A check you have never seen fail is decorative. Break the thing on a copy
  and confirm the check catches it.

## Conventions

- Links between apps are **relative** so the site survives moving domain.
- Palette and shell follow `appointment-scheduler.html`; CSS variables with
  a `[data-theme="dark"]` block.
- Reuse rather than rewrite: `parseCSV`/`detectDelimiter` in
  `data-analyzer.html`, amount-in-words in `invoice-generator.html`.
- Commits: sentence-case imperative with an em-dash detail. Explain *why*,
  and name any bug found while testing.
- Work on a `claude/<topic>` branch; the default branch is
  `claude/projects-011CUas4DUaQpQizrh4dGE1i`, which is also what Pages
  serves.
- **Never link to the source repository from `index.html`** — the demo caps
  are plain constants, and the footer used to hand visitors the source.
