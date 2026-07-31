# LSUM PYPT — Standalone Sub-Brand

Landing page untuk produk **LSUM PYPT** (penjagaan intim wanita herba tradisional).

Repo ini standalone — decouple dari main `salespage-kopi-anjal` supaya boleh update tanpa affect main site.

## Deployment

- **Cloudflare Pages** — connect repo ini, output root `.`
- **Custom domain:** `lsumpypt.teratakniaga.com`

## Env vars (Cloudflare Pages)

Sama macam parent repo `salespage-kopi-anjal`:

```
TOYYIBPAY_SECRET_KEY   = <ToyyibPay secret>
TOYYIBPAY_CATEGORY_CODE = <ToyyibPay category>
GOOGLE_SHEET_WEBHOOK   = <Apps Script /exec URL>
```

## Struktur

```
index.html              → Landing page LSUM PYPT
style.css / catalog.css → Shared styling (inherit dari main brand)
script.js               → Checkout/voucher logic
success.html            → Payment status page
functions/api/          → Cloudflare Pages Functions
  _products.js          → Product registry (LSUM sahaja)
  create-bill.js        → ToyyibPay bill creation
  manual-order.js       → QR/Bank order
  callback.js           → Payment webhook
google-apps-script.js   → Reference (deploy secara manual ke Apps Script)
```
