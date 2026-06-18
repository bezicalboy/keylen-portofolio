# Drawing Portfolio

A quiet, gallery-style portfolio site for showing off drawings. Built with
[Vite](https://vitejs.dev) — fast dev server with hot reload, optimized build.

## Setup

```bash
npm install      # once
npm run dev      # start the dev server (opens the browser, hot-reloads on save)
```

Other scripts:

```bash
npm run build    # production build → dist/
npm run preview  # serve the production build locally to check it
```

## Add your artwork — the only thing you edit

Open **`config.js`**. Everything on the site comes from there.

1. Drop your image files into the **`public/images/`** folder.
2. In `config.js`, copy one of the `{ ... }` blocks inside `works:` and edit it:

```js
{
  image: "images/my-drawing.jpg",   // path under public/ (no leading slash)
  title: "Evening Study",
  medium: "Graphite on paper",
  year:  "2026",
  size:  "tall",   // "tall", "wide", or remove this line for normal
},
```

With `npm run dev` running, just **save** — the page updates instantly.

You can also change your **name, role, tagline, email, and social links** at the
top of `config.js`.

## Files

| File             | What it is                                          |
|------------------|-----------------------------------------------------|
| `config.js`      | **Edit this.** Your info + list of artworks.        |
| `index.html`     | Page structure / entry point.                       |
| `styles.css`     | Look & feel. Change colors in `:root` at the top.   |
| `app.js`         | Builds the gallery + lightbox. Leave it alone.      |
| `public/images/` | Your artwork. Sample SVGs are placeholders.         |
| `vite.config.js` | Vite settings (base path, dev server).              |

> Files in `public/` are served as-is, so a config path of `images/foo.jpg`
> maps to `public/images/foo.jpg`.

## Deploy

Run `npm run build` and upload the **`dist/`** folder to any static host
(Netlify, Vercel, GitHub Pages, S3, …). `base: "./"` in `vite.config.js` means
it works at a domain root or in a subfolder without changes.

## Make it yours

- **Colors:** edit the `:root` variables in `styles.css` (`--bg`, `--ink`, `--accent`).
- **Replace the samples:** delete the `public/images/sample-*.svg` files once
  you've added your own.
