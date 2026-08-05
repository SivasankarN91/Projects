# Projects

Small, self-contained web apps — each one is a single HTML file with zero dependencies and no build step. Use them live on GitHub Pages, or clone the repo and open any file in a modern browser.

**🌐 Showcase:** https://sivasankarn91.github.io/ — the homepage presents fourteen of the apps with live demos and an enquiry form. The hosted versions are free demos with light limits (noted on each product card); full unrestricted versions are available on enquiry.

| App | Link |
|---|---|
| 🎨 Generative Art Studio | https://sivasankarn91.github.io/art-studio.html |
| 📅 Appointment Scheduler | https://sivasankarn91.github.io/appointment-scheduler.html |
| 🌅 Daily Companion | https://sivasankarn91.github.io/daily-companion.html |
| 🎉 Festival & Function Planner | https://sivasankarn91.github.io/festival-planner.html |
| 🛍️ Online Store Builder | https://sivasankarn91.github.io/store-builder.html |
| 🚦 TN Travel Assistant | https://sivasankarn91.github.io/travel-assistant.html |
| 💝 Dates & Gifts Reminder | https://sivasankarn91.github.io/family-dates.html |
| 🧾 Invoice Generator | https://sivasankarn91.github.io/invoice-generator.html |
| 📊 Data Analyzer | https://sivasankarn91.github.io/data-analyzer.html |
| 🏗️ Landing Page Builder | https://sivasankarn91.github.io/pagebuilder.html |
| 🗺️ Whiteboard | https://sivasankarn91.github.io/whiteboard.html |
| 💰 Finance Tracker | https://sivasankarn91.github.io/finance-tracker.html |
| 🎪 Emoji Physics Simulator | https://sivasankarn91.github.io/emoji-simulator.html |
| 🩺 Should I See a Doctor? | https://sivasankarn91.github.io/see-a-doctor.html |
| 🧾 Billing &amp; Stock (GST POS) | https://sivasankarn91.github.io/billing-pos.html |

## 🎨 Generative Art Studio — [`art-studio.html`](art-studio.html)

Make one-of-a-kind generative art right in the browser — a visual, interactive canvas toy that turns simple controls into striking, exportable pieces. Every artwork is generated from a seed, so no two are ever the same.

**Features**

- **Four animated styles** — flow fields, orbiting particles, circle packing, and layered waves, each rendered live on `<canvas>`
- **Curated palettes** — eight hand-picked colour schemes (Sunset, Ocean, Forest, Neon, Ember, Candy, Aurora, Mono)
- **Seeded & reproducible** — each piece has a numeric seed; type the same seed, style and palette to recreate it exactly (a seeded PRNG + value-noise engine drives everything)
- **Live controls** — density, detail and motion sliders, a background choice (palette / black / white), and play/pause for the animation
- **Export** — save your artwork as a PNG for wallpapers, prints or social posts
- **Extras** — first-run guide, light/dark UI theme, settings autosaved in `localStorage`, fully offline

Freemium demo exports are 1280px with a small credit line; the full version exports 4K, watermark-free.

## 📅 Appointment Scheduler — [`appointment-scheduler.html`](appointment-scheduler.html)

A simple appointment book for service businesses — clinics, salons, tutors, consultants. Manage bookings by day or week and send WhatsApp confirmations, all from one private, offline file. The first of a professional series.

**Features**

- **Day & week views** — see the day's appointments as a timeline or the whole week at a glance; jump between dates and back to today in one tap
- **Services** — define what you offer with a duration and price; appointments auto-fill their length and fee from the chosen service
- **Bookings** — client name, phone, service, date, time, notes and status (booked → confirmed → done / no-show / cancelled); end time is computed automatically
- **WhatsApp confirmations & reminders** — one tap sends the client a ready-made confirmation with your business name, service, date, time and address; sending a booked appointment marks it confirmed
- **At-a-glance totals** — appointment count, confirmed count, expected takings and collected (done) revenue for the day or week
- **Business setup** — name, WhatsApp number, address, currency (₹/$/€/£) and working hours
- **Backup** — export/import everything as a JSON file
- **Extras** — first-run guide, sample data, light/dark theme, mobile-friendly, autosaved in `localStorage`

Freemium demo caps at 3 services and 20 appointments; the full version is unlimited and branded for your business on enquiry.

## 🌅 Daily Companion — [`daily-companion.html`](daily-companion.html)

A simple, big-text daily home screen for elders — everything for the day on one calm, accessible page. Designed for large touch targets, high contrast, and adjustable text size.

**Features**

- **At a glance** — a large live clock, day and date, a time-of-day greeting by name, and current weather for your city (free Open-Meteo, no API key; degrades gracefully offline)
- **Today's medicines** — each with dose and time and a big checkbox to tick when taken; the ticks reset automatically every morning
- **Things to do & prayer times** — a simple daily task checklist and a list of prayer/pooja times
- **Call family in one tap** — big photo-style buttons that open a phone call (`tel:`) or a WhatsApp message to each family member
- **SOS** — a large red **I need help** button that calls the emergency contact and can send them a prefilled "I need help" WhatsApp message
- **Accessibility** — three text sizes (Normal / Large / Largest), light/dark theme, and a clean two-screen layout (Today / Setup)
- **Setup once** — add the elder's name, city, medicines, tasks, prayers, family contacts and emergency contact; back up and restore everything as a JSON file
- **Private & offline** — everything is stored in the browser (`localStorage`); no accounts, no servers

Freemium demo caps at 4 medicines and 3 family contacts; the full version is unlimited and can be set up for your parents on enquiry.

## 🎉 Festival & Function Planner — [`festival-planner.html`](festival-planner.html)

Plan any wedding, pooja, birthday or housewarming from start to finish — guests, gifts, budget, tasks and shopping — all in one private, offline app. Built for the way Indian families run a function.

**Features**

- **Multiple functions** — create and switch between events, each with its type, date (with a live countdown), venue, and budget; currency selector (₹/$/€/£)
- **Overview** — an at-a-glance dashboard: confirmed headcount, invitations sent, cash gifts received, spend vs budget, and tasks done, with quick-add shortcuts
- **Guest list** — add guests with how many people are coming, their group (bride's/groom's side, friends…), veg/non-veg, and status (to invite → invited → confirmed → declined); filter by status, and send a **ready-made WhatsApp invite** to any guest in one tap
- **Gifts (moi) ledger** — record every cash gift or present with the giver's name, tick off **thank-you sent**, see your running cash total, and filter to "thank-you pending" so no one is missed — the register Indian households keep for every function
- **Budget** — expenses by category (venue, catering, decoration, clothes, jewellery, invitations…) with planned vs spent, progress bars, and clear over-budget flags
- **Tasks & shopping** — a to-do checklist with due dates, plus a shopping list you can **share to WhatsApp** in one tap
- **Backups** — export/import a JSON backup, export the guest list as CSV, and add the function date to your phone calendar as an `.ics` reminder (alarm one week before)
- **Extras** — first-run guide, sample function, light/dark theme, mobile-first, autosaved in `localStorage`

No accounts, no servers, no tracking — everything stays in your browser.

## 🛍️ Online Store Builder — [`store-builder.html`](store-builder.html)

Build your own online shop and take orders on WhatsApp — no Shopify, no monthly fees, no code. Add products, preview the real storefront live, and export a single self-contained HTML file you can host anywhere.

**Features**

- **Products** — add items with a **photo gallery** (auto-downscaled & embedded), price, optional MRP with automatic discount %, category, description, and in-stock toggle; mark **bestseller/new badges**, **feature** items, set a **stock count** ("Only 2 left!"), and add **variants** (e.g. Size: S/M/L, Colour) that customers choose before ordering; duplicate, edit and delete anytime
- **Store setup** — shop name, tagline, logo, WhatsApp number, currency (₹/$/€/£), brand colour (8 presets), optional UPI ID, announcement bar, and a checkout delivery note
- **Delivery & discounts** — set a **delivery fee** with a **free-delivery threshold**, and create **discount codes** (percentage or flat, with an optional minimum order) that customers apply at checkout
- **Live preview** — an embedded, fully interactive copy of the real storefront that updates as you type; what you preview is exactly what exports (WYSIWYG by construction)
- **The storefront your customers get** — search, **sorting** (price / newest / featured), category filters, a **featured row**, a **wishlist**, product detail sheets with a swipeable gallery, variant pickers and quantity steppers, and a cart drawer that itemises subtotal, discount and delivery; checkout builds a complete order message (with each item's chosen variant) and opens **WhatsApp** to your number, plus an optional **Pay via UPI** deep link; carts persist in the visitor's browser
- **Export & host** — one click downloads the whole shop as a single dependency-free HTML file (products, images and runtime inlined) with SEO/Open-Graph tags and an emoji favicon; upload it to GitHub Pages, Netlify, or any static host
- **Extras** — first-run guide, sample store, light/dark theme, autosave to `localStorage`

No backend, no payment gateway account, no per-sale fees — orders come straight to your WhatsApp.

## 💰 Finance Tracker — [`finance-tracker.html`](finance-tracker.html)

A personal finance tracker useful to anyone: record income and expenses, set monthly budgets, and track savings goals.

**Features**

- **Dashboard** — all-time balance, monthly income/expenses, savings rate, with a month picker
- **Charts** — spending-by-category donut and a 6-month income vs. expenses bar chart, both hand-rolled on `<canvas>` with hover tooltips
- **Transactions** — add, edit, delete; filter by month, type, and category; full-text search over notes
- **Budgets** — monthly limit per expense category with progress bars that flag when you approach or exceed the limit
- **Savings goals** — named goals with targets and progress
- **Data ownership** — everything is stored locally in your browser (`localStorage`); export/import JSON backups and export transactions as CSV
- **Polish** — light/dark theme (follows your OS by default), currency selector (₹/$/€/£), responsive layout for mobile

No accounts, no servers, no tracking — your financial data never leaves your browser.

## 🗺️ Whiteboard — [`whiteboard.html`](whiteboard.html)

An infinite-canvas whiteboard and mind-mapping tool — a mini Miro/Excalidraw in a single file.

**Features**

- **Infinite canvas** — pan (Space+drag / middle-mouse / touch), zoom to cursor (scroll or pinch, 10%–400%), fit-to-content, dot grid
- **Tools** — sticky notes, rectangles, ellipses, standalone text, freehand pen, and connector arrows that stay attached to nodes as they move
- **Editing** — double-click to edit text in place, drag to move, corner handles to resize, marquee multi-select, arrow-key nudge, 8-color palette
- **Undo/redo** — full history (Ctrl+Z / Ctrl+Shift+Z)
- **Multiple boards** — create, rename, and switch between boards, each with its own saved viewport
- **Export** — the board as a PNG image, or all boards as a JSON backup (with import)
- **Extras** — light/dark theme, keyboard shortcuts for every tool (press ? in-app), autosave to `localStorage`

## 🚦 TN Travel Assistant — [`travel-assistant.html`](travel-assistant.html)

An AI-style chat assistant for Tamil Nadu & Pondicherry travel — ask in plain English, get live answers.

**Ask it things like**

- *"Traffic from Chennai to Pondicherry"* — live drive time with congestion, how much slower than usual, expected arrival time, an alternate-route hint, destination weather, and a mini route map with a traffic overlay; save frequent trips to a one-tap ⭐ bar
- *"Reach Pondicherry by 8 pm"* — the latest safe departure time, computed from TomTom's predictive traffic for your arrival window
- *"Traffic in Coimbatore"* — current congestion level from live road-speed data
- *"Weather in Madurai"* — current conditions plus rain probability for the next few hours
- *"Petrol bunk near Tindivanam"* — nearest fuel, restaurants, hotels, hospitals, ATMs, toilets, mechanics with distances
- *"I'm stuck in traffic"* — practical help: alternate routes, nearby stops, WhatsApp share to family

**How it's powered**

- **Live traffic, routing, geocoding, places**: TomTom APIs — bring your own free API key (2-minute signup at developer.tomtom.com, 2,500 requests/day, no credit card); guided in-app setup, key stored only in your browser
- **Weather**: Open-Meteo — completely free, no key, works immediately
- **The "AI"**: a built-in rule-based assistant — no LLM key, no per-message cost, works offline-first with graceful errors
- Hand-rolled mini map (web-mercator tiles + route polyline + traffic overlay), chat history persistence, first-run guide, light/dark themes

## 💝 Dates & Gifts Reminder — [`family-dates.html`](family-dates.html)

Never forget a birthday or anniversary again — track the family's special dates, plan gifts ahead, and get reminders on your phone.

**Features**

- **Upcoming view** — every date sorted by countdown ("TODAY", "tomorrow", "in N days"), with "turns 34" / "9th anniversary" computed from the original year
- **Gift planner per occasion** — save ideas with prices the moment inspiration strikes, set a budget, cycle idea → bought → given; dates within two weeks with no gift ready are flagged
- **Phone reminders** — one tap exports all dates as a calendar (.ics) file with yearly recurrence and alarms 7 days + 1 day before; import into Google Calendar or iPhone
- **Year planner** — all twelve months at a glance to spot expensive months early
- **Extras** — sample data, first-run guide, light/dark theme, mobile-first layout, autosaved in `localStorage`

## 🧾 Invoice Generator — [`invoice-generator.html`](invoice-generator.html)

Create professional invoices right in the browser — fill the invoice like a document, print or save as PDF, and track what's been paid.

**Features**

- **Edit the invoice directly** — the white sheet is the editor; business details and logo are remembered for every future invoice
- **Live math** — line amounts, subtotal, percentage discount, configurable tax (GST/VAT/…), grand total, and the amount in words (Indian crore/lakh wording for ₹, western for $/€/£)
- **Invoice management** — automatic numbering (INV-0001…), duplicate for repeat clients, and a sidebar list with Draft/Sent/Paid status badges
- **Clean print output** — 🖨 Print / PDF produces a professional A4 document with all app controls, placeholders, and icons stripped
- **Extras** — currency selector, logo upload (auto-downscaled), first-run guide, light/dark theme, everything autosaved in `localStorage`

## 📊 Data Analyzer — [`data-analyzer.html`](data-analyzer.html)

Drop in any CSV and explore it instantly — a mini Excel + BI dashboard. Nothing is uploaded; all analysis happens in your browser.

**Features**

- **Robust CSV import** — drag-and-drop, file picker, or paste from a spreadsheet; auto-detects the delimiter and handles quoted fields, embedded commas/newlines, and BOMs; built-in sample dataset
- **Automatic type detection** — numbers (including ₹/$/€ and thousand separators), dates in common formats, booleans; per-column stat cards (sum/avg/median/min/max, unique counts, top values, missing cells)
- **Explore** — sortable columns, global search, and per-column filters: text search, numeric ranges, date ranges, and value pickers for categorical columns; paginated for large files
- **Analyze** — group by any column (dates bucketed by day/month/year) with count/sum/avg/min/max aggregation; results as a summary table plus an auto-chosen chart (bars, line, or donut) with hover tooltips, all respecting active filters
- **Export** — filtered rows or the summary as CSV, and the chart as a PNG
- **Extras** — light/dark theme, built-in guide (? button), autosave of dataset and filters for smaller files

## 🏗️ Landing Page Builder — [`pagebuilder.html`](pagebuilder.html)

A drag-and-drop **multi-page** landing site builder for marketers — assemble pages visually, wire nav tabs and buttons to other pages or external URLs, then export the whole site as clean, standalone HTML ready to host anywhere.

**Features**

- **Section library** — navbar, hero, logo strip, image, features grid, stats band, testimonials, pricing tiers, FAQ, contact form, CTA banner, and footer; click to add or drag into place with a drop indicator
- **Images & logos** — upload photos, screenshots, or client logos; they're auto-downscaled and embedded as data-URIs so exported sites stay fully self-contained
- **Contact form** — a no-backend form whose Send button opens a prefilled WhatsApp chat to your number (or an email draft) with the visitor's name and message
- **SEO** — site description, Open Graph / Twitter-card tags, and an emoji favicon baked into every exported page
- **True WYSIWYG editing** — click any text on the page and type; the live canvas and the exported files share the same markup and CSS, so what you see is exactly what ships
- **Multiple pages** — add pages from templates (Blank, Product, Pricing, Event/launch), switch, rename, and delete them from the top bar
- **Real links** — click any nav tab or button and choose what it opens: another page in the site, a section on the current page (smooth-scroll anchor), or an external URL such as a payment link; "Edit page →" (or Ctrl+click) jumps straight into the linked page to edit it
- **Per-section controls** — background style (plain/tinted/accent/dark), add/remove features, stats, quotes, FAQ entries, pricing tiers, links; featured-tier picker; hero centering
- **Site theme** — brand color (8 presets), sans or serif headings, corner-radius control, shared across all pages
- **Responsive preview** — desktop / tablet / phone viewport toggle; exported pages are mobile-responsive with zero JavaScript
- **Export** — "Export site" downloads a ZIP of all pages as linked HTML files (`index.html`, `pricing.html`, …) with a dependency-free ZIP writer; "Export page" grabs just the current page; JSON backup import/export; undo/redo; autosave to `localStorage`

## 🎪 Emoji Physics Simulator — [`emoji-simulator.html`](emoji-simulator.html)

An interactive emoji physics playground. Click to spawn emojis and watch them bounce around.

## 🩺 Should I See a Doctor? — [`see-a-doctor.html`](see-a-doctor.html)

Answers one question and one only: **how soon** to get help — now, today, or in a day or two. It never tells you what the illness is, and never suggests a medicine. Built for a family unsure whether something can wait until morning.

**Features**

- **Emergency signs come first** — a large red door on the home screen leads straight to the warning signs. Ticking even one shows the result immediately, with 108 and 112 as one-tap calls; nobody should hunt for a submit button while someone is collapsing
- **Answers by person** — adult, child, baby under one, pregnant, or elderly; the same symptom is treated more urgently in a baby or in pregnancy
- **Six symptom areas** — fever, cough and breathing, stomach and loose motion, injury, headache and dizziness, urine problems
- **Every result carries worsening signs** — what to watch for and when to stop waiting, which is the part that actually keeps people safe
- **First aid with a "never do this" list on every entry** — choking, bleeding, burns, fits, snake bite, poisoning, heat illness, fainting. The harmful folk remedies are named directly: no oil or toothpaste on burns, nothing in the mouth during a fit, no tourniquet or cutting for snake bite, no induced vomiting for poisoning
- **A summary to hand the doctor** — what was answered and when, shareable on WhatsApp or saved on the device
- **English and Tamil**, big-text mode, one-tap emergency contacts, entirely offline

**How the answer is decided**

- A warning sign forces "go now" and **nothing can lower it**
- Otherwise the urgency is the **highest** of the answers, never a sum — three mild answers must not outweigh one serious one
- Babies and pregnancy raise the floor, because the same symptom carries more risk

**Limits, stated plainly**

- **It is not a doctor and does not diagnose.** If you are worried, see a doctor whatever it says
- **The demo cap never touches safety.** It limits saved checks only; the assessment, the warning signs and the first aid are never gated
- Built-in self-test at [`?selftest=1`](see-a-doctor.html?selftest=1) covering the triage rules — including an assertion that no medicine and no illness is ever named in any text a user can read

## 🧾 Billing &amp; Stock — [`billing-pos.html`](billing-pos.html)

A counter-side GST billing and stock app for small Indian shops — scan, bill, print, and the stock takes care of itself. Built for a kirana, pharmacy, hardware shop or bakery that wants proper GST bills without a subscription, an account, or an internet connection.

**Features**

- **Billing built for a counter** — a barcode scanner works with no setup (they type like a keyboard); or search by name, Tamil name or barcode with ranked results. Type `3*sugar` to sell three at once. <kbd>F2</kbd> jumps to the scan box, <kbd>F4</kbd> opens payment, arrow keys pick from the list
- **GST that adds up** — CGST + SGST within the state, IGST across it, decided automatically from the customer's place of supply; per-item HSN and rate; MRP-inclusive *or* exclusive pricing; totals rounded to the nearest rupee with the round-off shown; a per-HSN summary on the invoice for your accountant
- **Bills that are compliant** — a consecutive serial per financial year (April–March), a **Tax Invoice** for regular dealers or a **Bill of Supply** with the required declaration for composition dealers, GSTIN validated including its check digit, and the amount in words in lakh/crore wording
- **Three print formats** — 58 mm and 80 mm thermal receipts and a full A4 tax invoice, chosen in Settings. Tamil product names print alongside the English ones
- **Stock as a ledger, not a counter** — every opening balance, sale, adjustment and cancellation is a movement, so the on-hand figure can always be explained. Low-stock and out-of-stock flags, and stock value at cost
- **Products** — name, Tamil name, barcode, HSN, unit (pcs/kg/litre/box…), purchase price, selling price, MRP, GST rate and reorder level; **bulk import** by pasting straight from Excel or dropping a CSV, matching on barcode so re-importing updates instead of duplicating
- **Payments** — cash with change calculation, UPI, card, credit (khata), and split payments across modes
- **Sales** — filter by date, see totals by payment mode and GST collected, reprint any bill, and cancel one (stock goes back, the bill stays in the book marked cancelled). Export the period as CSV
- **Backup you will actually do** — one-tap download of the whole shop, a nag on the billing screen once bills pile up since your last one, and a full restore
- **Extras** — light/dark theme, works entirely offline, and a built-in calculation self-test at [`?selftest=1`](billing-pos.html?selftest=1)

**Why it is built this way**

- Money is held in **integer paise** and quantities in thousandths of a unit. A bill total that is off by a paisa loses a shopkeeper's trust for good, so no amount ever touches a floating-point number
- Data lives in **IndexedDB**, not `localStorage`. A shop writing 100 bills a day would blow past the 5 MB `localStorage` cap in weeks, and being synchronous it would freeze the counter mid-sale
- A bill, its lines and its stock movements are written in **one transaction** — they commit together or not at all

**Limits, stated plainly**

- **The hosted version is a demo** — it stops at 25 products and 30 bills, and printed bills carry a small "Demo version" line. The full version removes all three
- **One device, one counter.** The data lives in this browser and cannot be shared between two machines
- **e-Invoice and e-Way bills are not included.** Both apply above the turnover threshold and need a live connection to the government portal; this is built for shops below it
- **GST rates are editable on purpose** and are not treated as fixed — slabs change, so check the current ones against CBIC guidance
- Best served from a folder or a web address rather than opened as a downloaded file, since browsers treat `file://` pages inconsistently for storage

## Running

Everything runs live on GitHub Pages (links above) — nothing to install. To run locally instead:

```bash
git clone https://github.com/SivasankarN91/Projects.git
cd Projects
# then just open any app in a browser, e.g.
open pagebuilder.html   # macOS
xdg-open pagebuilder.html  # Linux
```

Or serve the folder with any static server (`python3 -m http.server`).

## Checks

Two checks run on every push, free, with nothing to install:

```bash
node tools/check.mjs        # catalogue, docs and demo caps agree
```

`tools/check.mjs` is plain Node with zero dependencies — the apps promise
nothing to install, and the tooling keeps that promise too. It verifies the
homepage catalogue matches the files on disk, that the README documents
every app, that no two apps share a cover, that every app enforces its demo
cap and that the cap in the code matches the one advertised on the card.
Every assertion exists because that mistake actually happened.

The billing app carries its own 77 assertions over the GST arithmetic, which
you can run in a browser at
[`billing-pos.html?selftest=1`](billing-pos.html?selftest=1). CI runs the
same file headless.

Repo conventions and the traps worth knowing are in [`CLAUDE.md`](CLAUDE.md).
