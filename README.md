# Projects

Small, self-contained web apps — each one is a single HTML file with zero dependencies and no build step. Use them live on GitHub Pages, or clone the repo and open any file in a modern browser.

**🌐 Showcase:** https://sivasankarn91.github.io/Projects/ — the homepage presents all six apps with live demos and an enquiry form. The hosted versions are free demos with light limits (noted on each product card); full unrestricted versions are available on enquiry.

| App | Link |
|---|---|
| 🧾 Invoice Generator | https://sivasankarn91.github.io/Projects/invoice-generator.html |
| 📊 Data Analyzer | https://sivasankarn91.github.io/Projects/data-analyzer.html |
| 🏗️ Landing Page Builder | https://sivasankarn91.github.io/Projects/pagebuilder.html |
| 🗺️ Whiteboard | https://sivasankarn91.github.io/Projects/whiteboard.html |
| 💰 Finance Tracker | https://sivasankarn91.github.io/Projects/finance-tracker.html |
| 🎪 Emoji Physics Simulator | https://sivasankarn91.github.io/Projects/emoji-simulator.html |

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
