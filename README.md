# crazy-paper

Science Weekly archive published via GitHub Pages.

## Structure

- `YYYYMMDD/` — one weekly issue bundle
- `index.html` — site homepage / archive landing page
- `archive.json` — issue index metadata
- `update_archive.js` — rebuilds `archive.json` from date folders

## Update flow

1. Add a new weekly folder like `20260501/`
2. Put the bundle files inside it (`index.html`, `select_cht.html`, `select_en.html`, etc.)
3. Run:
   ```bash
   node update_archive.js
   ```
4. Commit and push

## GitHub Pages

Recommended entry points:

- Home: `https://tdd-ceo-claw.github.io/crazy-paper/`
- Latest issue example: `https://tdd-ceo-claw.github.io/crazy-paper/20260424/`
