# Test Projects

Small, self-contained web apps — each one is a single HTML file with zero dependencies and no build step. Clone the repo (or download a file) and open it in any modern browser.

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

## 🎪 Emoji Physics Simulator — [`index.html`](index.html)

An interactive emoji physics playground. Click to spawn emojis and watch them bounce around.

## Running

No install needed:

```bash
git clone https://github.com/sivasankarn91/test.git
cd test
# then just open either file in a browser, e.g.
open finance-tracker.html   # macOS
xdg-open finance-tracker.html  # Linux
```

Or serve the folder with any static server (`python3 -m http.server`) — both apps also work when hosted on GitHub Pages.
