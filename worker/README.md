# EVA METACHEM — Inquiry API (Cloudflare Worker)

This is the serverless backend for the website's inquiry form. It receives
the form submission, validates it, and emails it to EVA METACHEM — keeping
all credentials off the static GitHub Pages frontend.

## Setup

1. Install Wrangler (Cloudflare's CLI) and log in:
   ```
   npm install
   npx wrangler login
   ```

2. Set the required secrets (you'll be prompted for each value):
   ```
   npx wrangler secret put RESEND_API_KEY
   npx wrangler secret put TO_EMAIL
   npx wrangler secret put FROM_EMAIL
   npx wrangler secret put ALLOWED_ORIGIN
   ```
   - `RESEND_API_KEY`: from https://resend.com (or swap the fetch call in
     `src/index.ts` for any other transactional email provider you prefer).
   - `TO_EMAIL`: evametachem@gmail.com
   - `FROM_EMAIL`: a sender address verified with your email provider.
   - `ALLOWED_ORIGIN`: e.g. `https://www.evametachem.com`

3. (Optional) Enable rate limiting: create a KV namespace, uncomment the
   `[[kv_namespaces]]` block in `wrangler.toml`, and add your namespace id.

4. Deploy:
   ```
   npm run deploy
   ```
   Wrangler will print the Worker URL, e.g.
   `https://eva-metachem-inquiry-api.<your-subdomain>.workers.dev`

5. In the main website project, set that URL as `VITE_INQUIRY_API_URL` in
   `.env` (see the root README) and rebuild.

## Local development

```
npm run dev
```
