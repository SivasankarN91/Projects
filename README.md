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
