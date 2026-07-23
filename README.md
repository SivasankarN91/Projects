# Projects

Small, self-contained web apps — each one is a single HTML file with zero dependencies and no build step. Use them live on GitHub Pages, or clone the repo and open any file in a modern browser.

**🌐 Showcase:** https://sivasankarn91.github.io/Projects/ — the homepage presents all nine apps with live demos and an enquiry form. The hosted versions are free demos with light limits (noted on each product card); full unrestricted versions are available on enquiry.

| App | Link |
|---|---|
| 🎉 Festival & Function Planner | https://sivasankarn91.github.io/Projects/festival-planner.html |
| 🛍️ Online Store Builder | https://sivasankarn91.github.io/Projects/store-builder.html |
| 🚦 TN Travel Assistant | https://sivasankarn91.github.io/Projects/travel-assistant.html |
| 💝 Dates & Gifts Reminder | https://sivasankarn91.github.io/Projects/family-dates.html |
| 🧾 Invoice Generator | https://sivasankarn91.github.io/Projects/invoice-generator.html |
| 📊 Data Analyzer | https://sivasankarn91.github.io/Projects/data-analyzer.html |
| 🏗️ Landing Page Builder | https://sivasankarn91.github.io/Projects/pagebuilder.html |
| 🗺️ Whiteboard | https://sivasankarn91.github.io/Projects/whiteboard.html |
| 💰 Finance Tracker | https://sivasankarn91.github.io/Projects/finance-tracker.html |
| 🎪 Emoji Physics Simulator | https://sivasankarn91.github.io/Projects/emoji-simulator.html |

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
