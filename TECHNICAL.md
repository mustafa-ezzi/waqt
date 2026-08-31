# WAAQT — Technical Execution

This file describes **how the website is built and how it works**.  
It is the engineering source of truth. Visual tone lives in `DESIGN.md`. This file covers stack, data, routing, images, cart, order numbers, and the WhatsApp handoff.

There is **no backend**. The site is a static React frontend. All product data lives in the codebase. Images are loaded from Cloudflare R2 by URL.

---

## Goal

A fully static, fully responsive React website for the WAAQT watch brand:

1. Visitors browse landing, collection, product, about.
2. They add pieces to a cart stored in the browser.
3. At checkout they enter contact details.
4. The app generates an **order number**, builds a WhatsApp message, and opens the WAAQT WhatsApp chat with that inquiry.
5. The WAAQT team handles the rest off-site.

---

## Stack

| Piece | Choice | Why |
| --- | --- | --- |
| UI | React 18 | Requested. Component-based pages |
| Build | Vite | Fast static SPA build |
| Routing | React Router | Client-side pages, no server |
| Styling | CSS modules or a single well-structured CSS architecture + CSS variables | Full control of luxury layout; no default Bootstrap look |
| Fonts | Didot for display; a geometric sans for UI | Loaded via Google Fonts or self-hosted font files |
| State | React context + `localStorage` | Cart and draft checkout persist without a backend |
| Images | Cloudflare R2 public URLs | Heavy assets stay off the repo |
| Deploy | Any static host (Replit static, Netlify, Cloudflare Pages, etc.) | `vite build` emits a folder of HTML/JS/CSS |

**Do not add**

- Node API, Express, Firebase, Supabase, Stripe, or databases
- User accounts or login
- Real payment capture
- Image uploads from the browser
- CMS unless later requested

---

## Repository layout

```text
/
  DESIGN.md
  TECHNICAL.md
  index.html
  package.json
  vite.config.js
  public/
    favicon.svg
  src/
    main.jsx
    App.jsx
    styles/
      tokens.css          # colors, type, spacing
      global.css
    data/
      products.js         # all watches, collections, copy
      site.js             # brand name, WhatsApp number, origin
    lib/
      cartStorage.js      # read/write localStorage
      orderNumber.js      # generate WQT order numbers
      whatsapp.js         # build wa.me URL + message
      format.js           # PKR, etc.
    context/
      CartContext.jsx
    components/
      Layout.jsx
      Navbar.jsx
      Footer.jsx
      Button.jsx
      ProductCard.jsx
      QuantityControl.jsx
      PageTransition.jsx
    pages/
      Home.jsx
      Collection.jsx
      Product.jsx
      About.jsx
      Cart.jsx
      Checkout.jsx
      NotFound.jsx
    assets/               # only tiny UI icons/svg if needed
```

Keep product **photos out of git**. Put R2 URLs in `src/data/products.js`.

---

## Routes

| Path | Page | Role |
| --- | --- | --- |
| `/` | Home | Cinematic landing |
| `/collection` | Collection | Product catalogue, optional `?category=` |
| `/product/:slug` | Product | Detail + add to cart + direct WhatsApp |
| `/about` | About | House story |
| `/cart` | Cart | Selection, quantities, remove |
| `/checkout` | Checkout | Customer fields + WhatsApp send |
| `*` | Not found | Quiet navy 404 with link home |

All routes render inside `Layout` (nav + footer).  
Unknown slugs on `/product/:slug` show a composed empty state, not a crash.

---

## Configuration (`src/data/site.js`)

Single place for house constants:

```js
export const site = {
  name: "WAAQT",
  origin: "Pakistan",
  currency: "PKR",
  whatsappNumber: "92XXXXXXXXXX", // country code, no + or spaces
  whatsappDefaultMessage: "Hello WAAQT, I would like to inquire about a timepiece.",
  r2BaseUrl: "https://pub-xxxxxxxx.r2.dev", // public R2 or custom domain
}
```

**WhatsApp number**

- Store digits only with country code, e.g. `923001234567`.
- The app must never hardcode the number in multiple files.
- Until the real number is provided, use a clearly marked placeholder and keep the URL builder working.

---

## Cloudflare R2 images

### Hosting

1. Create an R2 bucket (private by default).
2. Enable a **public** development URL or attach a custom domain.
3. Upload watch images in a stable folder scheme:

```text
watches/
  serpentine-gold/hero.webp
  serpentine-gold/dial.webp
  serpentine-gold/bracelet.webp
  oval-diamond-leather/hero.webp
  ...
```

4. Prefer WebP (or AVIF) plus a JPEG fallback if needed. Large, sharp product shots; compress enough for mobile.
5. Copy the public base URL into `site.r2BaseUrl`.

### Usage in code

Every product stores **paths**, not full duplicated domains:

```js
{
  slug: "serpentine-gold",
  images: {
    hero: "watches/serpentine-gold/hero.webp",
    gallery: [
      "watches/serpentine-gold/dial.webp",
      "watches/serpentine-gold/bracelet.webp",
    ],
  },
}
```

Helper:

```js
export const r2 = (path) => `${site.r2BaseUrl}/${path}`
```

In JSX: `<img src={r2(product.images.hero)} alt={product.name} />`

**Rules**

- `alt` text is real: product name + material.
- Use `loading="lazy"` on collection grids; **not** on the home hero or the main product image.
- Give images explicit width/height or aspect-ratio boxes so navy stages do not jump.
- If an image 404s, show a navy placeholder, never a broken-icon layout.

### Local / Replit workflow

Until R2 is filled, `r2BaseUrl` may point at R2 or a temporary public folder. The data shape stays the same so swapping the base URL is one change.

---

## Product data (`src/data/products.js`)

Static array. This is the catalogue.

```js
{
  id: "wqt-001",
  slug: "serpentine-gold",
  name: "Serpentine",
  category: "statement",     // all | gold | leather | statement | classic
  overline: "Yellow gold · Diamond bezel",
  price: 0,                  // integer PKR
  currency: "PKR",
  short: "A coiled gold bracelet watch, jewelry first.",
  description: "Longer editorial paragraph...",
  specs: [
    { label: "Case", value: "Teardrop, diamond-set bezel" },
    { label: "Dial", value: "Cream, Roman numerals" },
    { label: "Bracelet", value: "Yellow gold tubogas" },
    { label: "Strap", value: "—" },
  ],
  images: { hero: "...", gallery: ["..."] },
  featured: true,            // landing cinematic chapters
  featuredOrder: 1,
  inStock: true,             // if false, hide Add to selection or mark as inquiry only
}
```

**Categories used by the collection page**

- `all` (virtual, not stored)
- `gold`
- `leather`
- `statement`
- `classic`

Add products only by editing this file. No admin UI.

**Price display**

- Format with `en-PK` / PKR, e.g. `Rs 450,000`.
- Prices are static. No tax engine.

---

## Cart

### Storage

- Key: `waaqt.cart`
- Shape:

```js
{
  items: [
    { productId: "wqt-001", quantity: 1 }
  ],
  updatedAt: "ISO-8601"
}
```

- Persist on every change.
- Hydrate on load. If JSON is corrupt, reset to `{ items: [] }`.

### Behavior

- Add from product page (default qty 1, or chosen qty).
- Same `productId` increments quantity.
- Cart page can increment, decrement (min 1), or remove.
- Max quantity: reasonable cap (e.g. 5) so WhatsApp messages stay sane.
- Cart counts unique lines and/or total pieces for the nav badge.
- Unknown product IDs (removed from catalogue) are dropped when the cart is read.

### Context API

`CartContext` exposes:

- `items` (resolved against `products.js` so pages receive name, image, price)
- `add(productId, qty)`
- `setQty(productId, qty)`
- `remove(productId)`
- `clear()`
- `subtotal`
- `count`

Checkout reads this context. After a successful WhatsApp handoff, **optionally** clear the cart (preferred) and keep the last order number in `sessionStorage` for the confirmation screen.

---

## Order numbers

Orders are not stored on a server. The number is generated in the browser so the visitor and the WhatsApp chat share the same reference.

### Format

```text
WQT-YYYYMMDD-XXXX
```

Example: `WQT-20260831-7K2M`

- `WQT` — house prefix
- Date — local date of the click
- `XXXX` — four alphanumeric chars (uppercase), random

### Implementation notes

- Generate **once per checkout send**, not on every keystroke.
- Show the number on the checkout page before send and in the WhatsApp body.
- Persist last number in `sessionStorage` as `waaqt.lastOrderNumber` so a confirmation view can display it if the user returns.
- Collision risk is acceptable for a manual WhatsApp workflow. Uniqueness is “good enough for a human inbox,” not a distributed lock.

Do not use timestamps alone (hard to read). Do not use `Math.random()` stringification without padding.

---

## Checkout fields

All client-side. Validate before opening WhatsApp.

| Field | Required | Rules |
| --- | --- | --- |
| Full name | yes | 2–80 chars |
| Phone | yes | Pakistani-friendly: allow `03xx`, `+92`, spaces/dashes; normalize to digits for the message |
| City | yes | 2–60 chars |
| Address | yes | 8–200 chars |
| Note | no | max 300 chars |

If the cart is empty, `/checkout` redirects to `/cart`.

Do not invent shipping rates. A static line of copy is enough: availability and delivery are confirmed by the house on WhatsApp.

---

## WhatsApp order flow

This is the only “order system.”

### URL

```text
https://wa.me/{whatsappNumber}?text={urlencodedMessage}
```

Open in a **new tab** (`target="_blank"`, `rel="noopener noreferrer"`) so the site remains available.

### Message template

Plain text, easy for the team to read:

```text
WAAQT order inquiry
Order number: WQT-20260831-7K2M

Name: Ayesha Khan
Phone: 03xx-xxxxxxx
City: Lahore
Address: ...

Items:
1. Serpentine × 1 — Rs 450,000
2. Oval Classic × 1 — Rs 320,000

Subtotal: Rs 770,000

Note: Please confirm gold size.

—
Sent from waaqt.pk
```

### Builder (`src/lib/whatsapp.js`)

Inputs: `orderNumber`, customer object, line items (name, qty, price), subtotal, optional note.  
Output: full `wa.me` URL.

### Extra entry points

- Product page secondary button: same builder with **one item** and a lighter customer-less message **or** route the user to checkout if details are required.

**Decision (use this):**  
The product-page WhatsApp button still goes through **checkout if the house wants name/address**, OR it can send a short “I am interested in {name}” message without an order number.

Recommended split:

- **Add to selection** → cart
- **Order this piece on WhatsApp** → if cart-style details are needed, send user to checkout with that item ensured in cart; if they want a fast inquiry, generate an order number and a single-item message. Prefer **always collecting details on checkout** so the team gets a complete inquiry. Product-page WhatsApp = “continue with this piece” → add to cart (qty 1) and navigate to `/checkout`.

### After click

1. Validate form.
2. Generate order number.
3. Build URL.
4. `window.open` WhatsApp.
5. Show in-page confirmation: order number + “the house will reply on WhatsApp.”
6. Clear cart.

If WhatsApp cannot open (desktop without app), `wa.me` still loads WhatsApp Web. No extra code path required.

---

## Page responsibilities

### `Home.jsx`

- Hero from the first `featured` product (or a dedicated `heroProductId` in `site.js`).
- Statement chapter (copy from `site.js` or a `home.js` content module).
- Featured products mapped from `featured: true`, ordered by `featuredOrder`.
- Collection teaser: 4–6 products.
- About teaser.
- No hard-coded watch names in JSX; always read `products.js`.

### `Collection.jsx`

- Read `products`.
- Filter by category (state or query string).
- Render `ProductCard` grid.
- Card links to `/product/${slug}`.

### `Product.jsx`

- `useParams().slug` → find product.
- Gallery state for active image.
- Quantity local state.
- `add()` then optional navigate, plus toast/confirmation in the luxury style.
- Direct path to checkout as defined above.

### `About.jsx`

- Static copy in a content module. No CMS.

### `Cart.jsx`

- List resolved items.
- Empty state.
- Link to `/checkout`.

### `Checkout.jsx`

- Form + recap + order plaque + WhatsApp button.

---

## Styling execution

Implement `DESIGN.md` with:

- CSS variables in `tokens.css` for navy, gold, ivory, Didot stack, spacing scale.
- Fluid type (`clamp`) so Didot stays large on desktop and proud on mobile without overflow.
- Layout: CSS grid / flex. Full-viewport sections on home (`min-height: 100svh`).
- Nav: transparent over dark heroes; solid after scroll (`scroll` listener or `IntersectionObserver` on hero).
- Breakpoints (guidance):  
  - phone: default  
  - 768px tablet  
  - 1100px desktop  
  - 1440px wide cinematic  
- Touch targets ≥ 44px for quantity, menu, WhatsApp.
- `prefers-reduced-motion: reduce` disables scale/parallax; keep opacity fades.

Do not use an off-the-shelf theme that fights the navy/gold look.

---

## Animation execution

Keep motion CSS-first where possible.

- Page change: short opacity + translateY on the page wrapper.
- Hero: CSS animation or a small library only if it stays light. If a library is used, **GSAP** is acceptable for hero/scroll reveals — otherwise CSS is enough.
- Collection hover: `transform: scale(1.04)` on the image inside `overflow: hidden`.
- Gallery: opacity crossfade.
- No autoplay carousels on the first version.

---

## SEO and document

Even though the app is an SPA:

- `index.html` title: `WAAQT`.
- Meta description: one line about the house and Pakistan.
- Per-route `document.title` updates (`WAAQT · Collection`, `WAAQT · Serpentine`, etc.).
- Semantic headings. One `h1` per page.
- Favicon: simple gold/navy mark.

---

## Responsive behavior (engineering)

| Surface | Phone | Desktop |
| --- | --- | --- |
| Nav | Hamburger → full-screen navy panel | Inline links |
| Vertical wordmark | Hidden or becomes horizontal title | Optional left-side vertical WAAQT |
| Home chapters | Stack: image then type | Alternate left/right |
| Collection | 1 column | 2–3 columns |
| Product | Image, then info | Two columns |
| Cart | Stacked rows; sticky checkout bar | Table-like rows + side summary |
| Checkout | Single column; full-width WhatsApp button | Form + recap side by side if space |

Test 320px width: Didot must wrap or scale, never overflow the viewport.

---

## Error and empty states

| Case | Behavior |
| --- | --- |
| Empty cart | Designed empty page, CTA to collection |
| Empty checkout | Redirect `/cart` |
| Unknown product slug | “This piece is no longer shown” + collection link |
| Invalid form | Inline field errors; gold/ivory, not red browser alerts only |
| Missing R2 image | Navy placeholder |
| WhatsApp number still placeholder | Button still builds a URL; document the placeholder in `site.js` |

No `alert()`.

---

## Execution order (build sequence)

Build in this order so the site is always runnable:

1. Vite + React shell, tokens, fonts, `Layout`, dummy nav.
2. `site.js` + `products.js` with 4–8 watches and R2 URL helper (placeholder images acceptable).
3. Home, Collection, Product, About — static browsing complete.
4. Cart context + `localStorage` + Cart page.
5. Checkout validation + order number + WhatsApp URL + confirmation.
6. Motion, hover, nav scroll state, empty/404 polish.
7. Replace placeholder images with real R2 URLs; set real WhatsApp number.
8. Responsive pass at 320 / 375 / 768 / 1440.

---

## Environment and secrets

- No private API keys are required for R2 **public** reads.
- Do not put R2 **write** credentials in the frontend. Uploads are done in the Cloudflare dashboard or a separate private script, never in this app.
- WhatsApp number is public by nature (it will appear in `wa.me` links). Still keep it in `site.js` only.

---

## What “done” means technically

- `npm run dev` and `npm run build` succeed.
- All six pages route without a server.
- Products render from `products.js` with R2 `src` URLs.
- Cart survives refresh.
- Checkout refuses send until required fields and a non-empty cart are valid.
- WhatsApp opens with order number, customer info, and line items.
- Layout holds together from a small phone to a wide desktop, matching `DESIGN.md`.

---

## Out of scope (v1)

- Payments, invoices, inventory sync
- Admin to edit products
- Accounts, wishlists, email
- Live chat widgets other than the WhatsApp handoff
- Analytics beyond a later optional add

The WAAQT team’s system of record for orders is **WhatsApp itself**, keyed by **order number**.
