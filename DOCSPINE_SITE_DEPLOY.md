# Deploying Docspine Landing Page to GitHub Pages

## Overview

The landing page is a React JSX artifact. To deploy to GitHub Pages, we need to convert it to a static HTML page with bundled JS. The simplest approach: use Vite to build a static site.

## Steps for Claude Code CLI

### 1. Create the project

```bash
cd ~/projects  # or wherever you keep repos
mkdir docspine-site && cd docspine-site
git init
```

### 2. Scaffold with Vite + React

```bash
npm create vite@latest . -- --template react
npm install
```

### 3. Replace the default app

- Copy `DocspineLanding.jsx` to `src/DocspineLanding.jsx`
- Replace `src/App.jsx` with:

```jsx
import DocspineLanding from "./DocspineLanding";
export default function App() {
  return <DocspineLanding />;
}
```

- Replace `src/main.jsx` with:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- Delete `src/App.css`, `src/index.css`, and the default assets
- Update `index.html` — remove the CSS link, set title to "Docspine — Your AI is only as good as your docs"

### 4. Configure for GitHub Pages

Update `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/docspine-site/",  // match your repo name
});
```

### 5. Test locally

```bash
npm run dev
```

Visit http://localhost:5173 — verify both dark and light themes work, bookshelf spines are interactive, terminal animation plays.

### 6. Build

```bash
npm run build
```

Output goes to `dist/`. Verify with:

```bash
npx serve dist
```

### 7. Deploy to GitHub Pages

Option A — GitHub Actions (recommended):

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Then in GitHub repo settings → Pages → Source: GitHub Actions.

Option B — Manual push to gh-pages branch:

```bash
npm run build
npx gh-pages -d dist
```

### 8. Push to GitHub

```bash
git add .
git commit -m "Initial Docspine landing page"
git remote add origin git@github.com:nondualworks/docspine-site.git
git push -u origin main
```

### 9. Verify

After GitHub Actions runs (or manual deploy), visit:
`https://nondualworks.github.io/docspine-site/`

---

## Claude Code CLI Quick Version

If you want Claude Code to do all of this, prompt it with:

```
Create a Vite + React project for the Docspine landing page.
Use the DocspineLanding.jsx file I have.
Configure for GitHub Pages deployment to nondualworks/docspine-site.
Set up GitHub Actions for automatic deploy on push to main.
```

And provide the `DocspineLanding.jsx` file.

---

## Notes

- The landing page has zero external dependencies beyond React and Google Fonts (loaded via CDN)
- The `base` in vite.config.js must match your repo name for GitHub Pages path resolution
- If deploying to a custom domain (e.g. docspine.usespine.dev), set `base: "/"` instead
- Terminal animations use CSS keyframes — they replay on page load, not on scroll
