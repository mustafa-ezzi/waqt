# WAAQT — Visual & Experience Brief

This file describes only how the website should **look, feel, and move**.  
It is the design source of truth. Build the interface to match this experience. Do not treat this as a technical document.

The brand is **WAAQT**.  
The website must feel like a digital luxury boutique — cinematic, quiet, expensive, and uncluttered — in the spirit of Rolex.com, but with WAAQT’s own identity: deep navy, living gold, diamond sparkle, and Didot elegance.

---

## The feeling

Opening WAAQT should feel like walking into a private salon at night. The room is dark. One timepiece is lit. Nothing shouts. Everything is slow.

The site is not a catalogue first. It is a **stage**. Watches float. Gold catches light. Type is large enough to feel like a magazine cover. Space is generous. The product is always the hero.

If a screen ever feels busy, crowded, cheap, or “e-commerce default,” it is wrong. Strip it back until only the watch, the word, and one action remain.

---

## Brand character

- **Name:** WAAQT — always written in all caps in the wordmark
- **Origin note:** Pakistan — small, quiet, never competing with the name
- **Personality:** regal, fashion-forward, jewelry-like, timeless
- **Voice on screen:** few words, high confidence. Headlines are short. Body copy is refined, never salesy.
- **Reference mood:** the brand’s navy Instagram banners — watches arranged like jewelry on midnight velvet, the word WAAQT standing vertical in white Didot

---

## Color world

Use a tight royal palette. Do not add extra accent colors.

| Role | Color | How it is used |
| --- | --- | --- |
| Midnight navy | `#0A1628` | The soul of the site. Hero backgrounds, catalogue ground, footer, dark chapters |
| Royal navy | `#12243F` | Slightly lifted navy for cards, overlays, nested panels |
| Living gold | `#C9A227` | Buttons, thin rules, hover lines, prices, small ornaments |
| Soft gold | `#E8D5A3` | Secondary gold text, captions, overlines |
| Ivory | `#F6F1E8` | Light chapters, about paper, form surfaces |
| Pure white | `#FFFFFF` | Headlines on navy, dial-like clarity |
| Ink | `#0B0B0B` | Text on ivory |
| Strap black | `#1A1A1A` | Rare contrast blocks, leather-like bands |

**Rules**

- Navy is the default atmosphere, not white.
- Gold is jewelry, not highlighter. Use it thinly: a 1px line, a letter, a button edge, a price.
- Never use bright blue links, grey Bootstrap cards, or rainbow badges.
- Photographs of watches sit on navy so gold metal and diamonds can glow.
- Light ivory chapters exist so the site can breathe — they should feel like cream paper between dark velvet rooms.

---

## Typography

**Display / brand / page titles:** Didot (or the closest high-contrast Didot cut available).  
Thin, sharp, fashion-house. This is the voice of the brand.

**Body / navigation / buttons / forms:** a refined geometric sans (think something in the family of Neue Haas Grotesk, Montserrat, or similar — clean, not rounded, not playful).

**Scale — be brave with size**

- Hero brand word **WAAQT**: enormous. On desktop it should occupy a large part of the viewport height or width. It should feel like a magazine masthead, not a website logo.
- Section titles: very large Didot, often one or two words only (“Collection”, “Time”, “WAAQT”).
- Product names on detail pages: large Didot, almost editorial.
- Supporting lines: small, widely tracked sans-serif in soft gold or white. Example: `PAKISTAN`, `THE COLLECTION`, `ESTABLISHED FOR TIME`.
- Body text: comfortable, never dense. Short paragraphs. Plenty of line height.
- Prices: gold, confident, not tiny.

**Letter habits**

- Wordmark and overlines: all caps, extra letter-spacing.
- Didot headlines can be title case or all caps depending on the moment — all caps for brand moments, title case for product names.
- Never use comic, script, or techy mono fonts.
- Never crowd Didot. Give it air.

**A signature device**

On large screens, a vertical **WAAQT** wordmark (letters stacked or rotated) may appear beside a gallery of watches — the same idea as the Instagram banner. On small screens this becomes a normal horizontal masthead. It should feel intentional, not gimmicky.

---

## Imagery style

- Watches are photographed as jewelry: sharp metal, soft studio light, gentle shadow, floating on navy.
- No cluttered lifestyle collages on the product itself.
- One watch per hero moment. Do not wallpaper the hero with many small watches.
- Shadows are soft. The watch should feel lifted off the navy, never pasted.
- Crop generously. Let a bracelet coil, a bezel, or a dial fill the frame.
- Alternate gold, cream dials, black leather, and diamond bezels so the collection feels rich, not repetitive.

---

## Motion — how the site moves

Motion is slow, expensive, and almost silent. Think Rolex, not a startup landing page.

**Global**

- Pages arrive with a soft fade and a very slight rise. No bounce. No spin.
- Scroll is smooth. Content reveals as it enters — fade up, not slide-from-everywhere.
- Nothing loops in a flashy way. No blinking. No confetti. No auto-sliding carousels that feel like ads.
- Hover states are small: gold underline growing from the center, image breathing 3–4%, a shadow deepening.
- Buttons fill with gold slowly, or invert from outline to solid gold.
- If a person prefers reduced motion, keep only simple fades. Never make the site depend on animation to be understood.

**Hero**

- The navy room appears first.
- Then the watch fades in, slightly scaling from 97% to 100%, as if a light was switched on.
- Then the giant Didot word arrives, a little later than the watch.
- Then a single quiet line and one gold call to action.
- Total arrival should feel like 1.5–2.5 seconds of calm, not a delayed website.

**Collection cards**

- On hover, the watch image slowly enlarges inside a masked frame. The name stays still. A thin gold line appears under the name.
- No jumping. No color flash.

**Product detail**

- The main watch can slowly rotate through still images when the visitor selects thumbnails — crossfade, not swipe-flick.
- Specs reveal in a quiet list, one row at a time if scrolling.

**Cart and checkout**

- Adding a watch feels like placing it on a velvet tray: a brief, elegant confirmation, not a bouncing cart badge circus.
- The WhatsApp order moment should feel like the closing of a private appointment — composed, not like a chat widget.

---

## Shared chrome (every page)

### Navigation

A slim, confident bar.

- Left: **WAAQT** in Didot.
- Center or right: Collection · About
- Far right: a refined bag / cart mark with a small gold count when something is inside.

On the dark hero, the nav is transparent with white type. After the visitor scrolls, it becomes a thin navy glass bar. It never becomes a thick colorful header.

On small screens: the WAAQT mark stays visible. Links move into an elegant full-screen navy menu that opens slowly. Large Didot links. Easy to tap. A gold close mark.

### Footer

A dark navy ending, not a sitemap dump.

- Large Didot **WAAQT**
- A single quiet line: time, origin, or craft
- Small links: Collection, About, WhatsApp
- Very small legal line
- Plenty of empty navy above and below

No colorful social icon rows. No newsletter boxes unless they are extremely restrained.

---

## Page by page

### 1. Landing page — first impression

This is a Rolex-like home: full-viewport chapters, one idea at a time, photography first.

**Chapter A — Hero**

- Full screen of midnight navy.
- One flagship watch, large, centered or slightly off-center, floating with a soft shadow.
- Enormous Didot **WAAQT**.
- A tiny tracked line underneath: `PAKISTAN` or `TIME, MADE VISIBLE`.
- One gold-outlined button: **Explore the collection**.
- Optional: a thin vertical wordmark on the far left on very wide screens.

The hero must work on a phone: the watch remains large, the word remains proud, the button sits in the thumb zone. Never shrink the watch into a thumbnail on mobile.

**Chapter B — A single sentence**

- A pause. Ivory or deep navy.
- One large Didot sentence, almost centered.
  Example: *Some hours are jewelry.*
- A short sans line under it. Nothing else.

**Chapter C — Featured timepieces**

- Two or three cinematic blocks, stacked, each nearly a full scene.
- Each block: a large watch, a Didot name, a short line of poetry-like description, and **Discover**.
- Alternate layout: watch left / words right, then reverse. On mobile, watch above words.
- These are not small product cards. They are posters.

**Chapter D — The collection invitation**

- A wider gallery of watches on navy, spaced like the Instagram banner — a few pieces in a composed still life, not a tight grid yet.
- Headline: **The Collection**
- Button: **View all timepieces**

**Chapter E — House**

- A quieter chapter that leads to About.
- Words about craft, gold, patience.
- A still image of metal, a bracelet, or a dial detail.
- Link: **The house of WAAQT**

The landing page should feel long and cinematic, but every chapter must earn its height. No filler strips.

---

### 2. Product catalogue — the collection

A gallery of desire. Closer to a maison collection wall than a shop grid.

- Title at the top in large Didot: **Collection**
- A short line: every piece chosen, not stocked in bulk.

**Filtering (visual, not technical)**

- A slim row of quiet categories: All · Gold · Leather · Statement · Classic
- The active category is marked by a gold underline. No pills, no chips that look like apps.

**The grid**

- Large cards. On a wide screen, two or three across — never six tiny tiles.
- Each card:
  - Navy field
  - Watch image, generous
  - Didot name
  - Soft material line (e.g. Yellow gold · Diamond bezel)
  - Gold price
- Equal rhythm. Same image height. The collection should look curated.

**Hover / tap**

- Image breathes.
- The whole card is the target — tapping anywhere opens the piece.

**Empty / few pieces**

- If a filter shows nothing, a calm sentence on navy: *Nothing in this chapter yet.* Not an error.

On mobile: one large card per row. Still luxurious. Still tall images. Still easy to tap.

---

### 3. Product detail — the piece

This page is a private viewing.

**Left (or top on mobile):** a large stage for the watch. Navy. The piece fills the frame. Below it, small gold-rimmed thumbnails if there are more views. Selecting a view crossfades the main image.

**Right (or below on mobile):**

- Tiny overline: `WAAQT`
- Large Didot product name
- One or two sentences of atmosphere, not a spec dump
- Price in gold, clearly
- Quantity as an elegant minus / number / plus — not a bulky form control
- Primary action: **Add to selection** (gold)
- Secondary action: **Order this piece on WhatsApp** (outline)

Then a composed details section:

- Rows such as Case · Dial · Strap · Movement note · Size
- Thin dividing lines
- No comparison tables, no “people also bought”, no countdown timers

The page must feel like there is only this one watch in the world for a moment.

On mobile, the order is: image, name, price, actions, then details. Buttons stay large and tappable. Quantity controls have generous hit areas.

---

### 4. About — the house

Ivory paper mixed with navy rooms.

- A vast Didot **WAAQT**
- The story in short paragraphs: a Pakistani house of timepieces, jewelry-like watches, gold and light, pieces chosen with care
- One line of origin, proudly quiet: Pakistan
- A chapter of values: craft, presence, occasion
- A closing navy room with a single watch and a path into the collection

No team photos grid unless they are truly editorial. No long corporate timeline. This is a maison page, not an About-us template.

---

### 5. Cart — the selection

A calm tray, not a shopping cart from a marketplace.

- Title: **Your selection**
- Each line: watch image, Didot name, material line, gold price, quantity, a discreet remove
- A composed summary: subtotal, a quiet note that the house confirms availability on WhatsApp
- Gold button: **Continue to order**

If the tray is empty: a beautiful empty navy room. *Your selection is empty.* A single link back to the collection. Never a sad grey box.

On mobile, each piece stacks clearly. Quantity and remove never collide. The continue button is sticky at the bottom in a refined navy/gold bar so it is always reachable.

---

### 6. Checkout — the appointment

This is not a payment gateway. It is the last salon desk before WhatsApp.

The mood stays luxurious. The visitor is leaving a name so the house can continue the conversation.

**Left / main**

- Title: **Your details**
- Short line: the house will receive this inquiry on WhatsApp, with an order number.

Fields, beautifully spaced, ivory or navy-glass inputs with gold focus:

- Full name
- Phone
- City
- Delivery address
- Optional note

Under the form, a recap of the watches chosen — small, elegant, not a second cart page.

**The order number**

- Before or as they complete, they see a composed order number, for example displayed as a gold-lined plaque: **WQT–1842**
- It should feel like a salon ticket, not a database ID.

**The WhatsApp action**

- One large gold button: **Send order on WhatsApp**
- Helper text: *You will open WhatsApp with your order ready. The WAAQT team will continue from there.*
- After tapping, the visitor is taken to WhatsApp. The site may show a still, gracious confirmation screen: thank you, here is your order number, the house will reply.

No extra payment fields. No “pay now”. No fake shipping calculators. The luxury is in the calm handoff.

On mobile, the form is one column, labels clear, inputs tall enough for thumbs, WhatsApp button full width and impossible to miss.

---

## Buttons and small objects

- Primary: gold fill, ink or navy text, generous padding, almost no corner roundness (slightly sharp, jewelry-box).
- Secondary: gold outline on navy, white or gold text.
- Never large rounded “app” pills.
- Never drop shadows that look like Material Design.
- Form focus: a thin gold line.
- Dividers: hairline gold at low opacity, or hairline white on navy.

---

## Responsive character

The site is fully responsive. Luxury must survive the phone.

**Wide screens**

- Cinematic chapters, huge type, watches at portrait scale, possible vertical wordmark, two-column detail pages, two or three collection cards across.

**Tablet**

- Still editorial. Two cards across. Hero watch remains large. Type scales down with dignity, not with fear.

**Phone**

- One idea per screen.
- Hero still feels like a poster, not a compressed desktop.
- Navigation becomes a full-screen navy menu with large type.
- Collection is a single luxurious column.
- Product image first, then words.
- Cart summary and WhatsApp button stay reachable.
- Vertical WAAQT wordmark becomes horizontal.
- Tap targets are large. Gold buttons have breathing room.
- No horizontal spill. No tiny prices. No nav that covers the watch.

The same soul on every screen: navy, gold, Didot, one watch, air.

---

## What this website must never look like

- A typical Shopify template
- A startup SaaS landing
- A crowded marketplace
- Neon sale stickers, red discounts, “limited time” bars
- Stock illustrations, generic unbox icons, chat bubbles all over the page
- Rainbow gradients, glassmorphism soup, or harsh white with blue links
- Tiny product grids that look like accessories on Amazon

If Rolex feels like a film, WAAQT should feel like a night jewel box — same discipline of space and photography, different color of light.

---

## Experience principles (use these when deciding)

1. **The watch is the light source.** UI stays darker and quieter than the product.
2. **Fewer words, larger type.**
3. **Gold is rare.**
4. **Motion is slow.**
5. **Every page has a still moment** — a place the eye can rest.
6. **Mobile is not a shrunk desktop.** It is a new crop of the same poster.
7. **Ordering is a conversation**, not a checkout tunnel of fear. WhatsApp is the closing handshake, presented with the same dignity as the watches.

---

## Copy tone (examples, not mandatory slogans)

Use language like this:

- WAAQT
- The collection
- A piece for the hour that matters
- Gold, light, and a quiet wrist
- Send this order to the house

Avoid:

- Super sale
- Shop now!!!
- Best deals
- Add to bag (too casual) — prefer **Add to selection**
- Buy (too blunt on the WhatsApp step) — prefer **Send order on WhatsApp**

---

## Success

The site is right when someone opens it on a phone at night, sees navy and a gold watch, reads **WAAQT** in Didot, and believes the house is real — then can reach a timepiece, place it in their selection, leave their name, and continue the order on WhatsApp without the spell breaking.
