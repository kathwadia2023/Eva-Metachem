# EVA METACHEM — Website

Production website for **EVA METACHEM** — *Reliable Chemical Solutions for
Global Industries*. Built with React, Vite and TypeScript as a static site,
ready for GitHub Pages.

```
src/
  components/   Reusable UI (Header, Footer, ProductCard, InquiryForm, ...)
  pages/        One file per route (Home, Products, ProductDetail, ...)
  data/         products.ts — single source of truth for all product/company data
  layouts/      MainLayout (header + footer + sticky mobile CTA shell)
  styles/       Design tokens + global styles
  assets/       Logo and flyer images
worker/         Optional Cloudflare Worker backend for the inquiry form
```

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Visit the printed local URL (usually `http://localhost:5173`).

## 3. Configure the inquiry form backend

The inquiry form is a **static frontend** — it never talks to an email
provider directly, and no credentials live in this repository. It POSTs to
a URL you control, defined by an environment variable.

1. Copy the example env file:
   ```bash
   cp .env.example .env
   ```
2. Deploy the included Cloudflare Worker backend (see `worker/README.md`
   for full steps), or point `VITE_INQUIRY_API_URL` at any serverless
   endpoint you prefer that accepts the same JSON payload (see
   `src/components/InquiryForm.tsx` for the payload shape).
3. Set `VITE_INQUIRY_API_URL` in `.env` to that endpoint's URL.

Without this configured, the form will show a clear "service isn't
configured yet" message rather than silently failing.

## 4. Build for production

```bash
npm run build
```

Output is written to `dist/`.

## 5. Deploy to GitHub Pages

**Option A — custom domain at the root (e.g. `www.evametachem.com`)**

1. Leave `VITE_BASE_PATH` unset (or `/`) in `.env`.
2. Push this repo to GitHub.
3. In the repo settings → Pages, set the source to the `gh-pages` branch
   (or configure GitHub Actions — either works).
4. Run:
   ```bash
   npm run deploy
   ```
   This builds the site and pushes `dist/` to the `gh-pages` branch using
   the `gh-pages` package (already in `devDependencies`).
5. Add a `CNAME` file if needed:
   ```bash
   echo "www.evametachem.com" > public/CNAME
   ```
   and rebuild/redeploy.

**Option B — project page (e.g. `username.github.io/eva-metachem/`)**

1. Set in `.env`:
   ```
   VITE_BASE_PATH=/eva-metachem/
   ```
2. In `public/404.html`, set `pathSegmentsToKeep = 1` (it's `0` by default,
   which is correct for a custom domain / root deploy).
3. Run `npm run deploy` as above.

### HTTPS

GitHub Pages serves HTTPS automatically, including for custom domains once
DNS is configured (Settings → Pages → check "Enforce HTTPS").

## 6. Updating content

### Products

All product content — names, formulas, grades, applications, highlights,
packaging — lives in **`src/data/products.ts`**. To add a new product,
add one object to the `products` array; it will automatically appear in
the Products grid, navigation dropdown, industries cross-reference, and
get its own detail page at `/products/<slug>`.

### Contact information

Also in `src/data/products.ts`, under the `company` export (phone, email,
WhatsApp link, address).

### Industries

Edit the `industries` array in the same file — each entry lists which
product slugs are relevant to it.

## 7. SEO

Every page sets its own title, meta description, canonical URL and Open
Graph tags via the `<SEO />` component (`src/components/SEO.tsx`). Update
`public/sitemap.xml` if you add new routes, and `public/robots.txt` points
search engines at it.

## 8. Notes on content accuracy

This site intentionally does **not** include certifications, lab
accreditations, CAS numbers, production capacity, export country lists,
customer counts, or testimonials, because none were supplied in the source
material. Sections that would normally host this information (Quality &
Manufacturing, product Technical Documentation) are built to accept it —
add it there once it's confirmed, rather than anywhere else in the copy.
