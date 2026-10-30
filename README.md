# Zerodha Clone (Unofficial Educational Demo)

Frontend-only React + Vite project. Not affiliated with Zerodha. No real trading or account creation.

## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build into dist/
    npm run preview    # serve the production build

## Deploy on Vercel (recommended)
1. Push this folder to a GitHub repository.
2. In Vercel choose "Add New Project", import the repo. Framework preset: Vite.
3. Deploy. `vercel.json` rewrites all paths to index.html so refreshing /pricing works.

## Deploy on GitHub Pages (optional)
GitHub Pages cannot rewrite routes, so page refresh on /pricing would show 404. To use it:
1. In `src/main.jsx` change `BrowserRouter` to `HashRouter`.
2. In `vite.config.js` add `base: '/YOUR-REPO-NAME/'`.
3. Run `npm run build` and publish the `dist` folder (for example with the `gh-pages` package).
