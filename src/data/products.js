import { r2 } from "./site.js";

const img = {
  goldDress:
    "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=1400&q=80",
  classicFace:
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=80",
  steelGold:
    "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=1400&q=80",
  roundLeather:
    "https://images.unsplash.com/photo-1524592094714-0f2335d0d04b?auto=format&fit=crop&w=1400&q=80",
  braceletClose:
    "https://images.unsplash.com/photo-1639006570490-79c0e4a3b884?auto=format&fit=crop&w=1400&q=80",
  diamondBezel:
    "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1400&q=80",
  nocturne:
    "https://images.unsplash.com/photo-1609587312208-cea54be969e7?auto=format&fit=crop&w=1400&q=80",
  heritage:
    "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=1400&q=80",
  // pair: "/watches/brand/hero-pair.png",
};

export const categories = [
  { id: "all", label: "All" },
  { id: "gold", label: "Gold" },
  { id: "leather", label: "Leather" },
  { id: "statement", label: "Statement" },
  { id: "classic", label: "Classic" },
];

export const products = [
  {
    id: "wqt-001",
    slug: "serpentine",
    name: "Serpentine",
    category: "statement",
    overline: "Yellow gold · Diamond bezel",
    price: 720000,
    currency: "PKR",
    short: "A coiled gold bracelet, jewelry first — time second.",
    description:
      "The signature of the house. A tubogas bracelet coils like a living line of gold, ending in a teardrop head set with a quiet row of diamonds. Roman hours sit on cream. It is worn as much as it is kept.",
    specs: [
      { label: "Case", value: "Teardrop, diamond-set bezel" },
      { label: "Dial", value: "Cream, gold Roman numerals" },
      { label: "Bracelet", value: "Yellow gold tubogas" },
      { label: "Strap", value: "—" },
      { label: "Size", value: "Fits a composed wrist" },
      { label: "Movement note", value: "Quartz, jewelry-grade" },
    ],
    images: {
      hero: img.goldDress,
      gallery: [ img.braceletClose],
    },
    featured: true,
    featuredOrder: 1,
    inStock: true,
  },
  {
    id: "wqt-002",
    slug: "oval-classic",
    name: "Oval Classic",
    category: "classic",
    overline: "Yellow gold · Black leather",
    price: 485000,
    currency: "PKR",
    short: "An oval of diamonds, a white dial, a black leather hour.",
    description:
      "A traditional oval case, densely set, with a white dial and black Roman numerals. The strap is textured leather — a quieter counterpart to the gold. Timeless in the old sense of the word.",
    specs: [
      { label: "Case", value: "Oval, diamond-set bezel" },
      { label: "Dial", value: "White, black Roman numerals" },
      { label: "Bracelet", value: "—" },
      { label: "Strap", value: "Black alligator-grain leather" },
      { label: "Size", value: "Oval dress" },
      { label: "Movement note", value: "Quartz, jewelry-grade" },
    ],
    images: {
      hero: img.classicFace,
      gallery: [ img.roundLeather],
    },
    featured: true,
    featuredOrder: 2,
    inStock: true,
  },
  {
    id: "wqt-003",
    slug: "maison-square",
    name: "Maison Square",
    category: "gold",
    overline: "Yellow gold · Linked bracelet",
    price: 540000,
    currency: "PKR",
    short: "A square of gold, classic links, a salon hour.",
    description:
      "Squared geometry with a linked gold bracelet. The dial is composed, the case is jewelry. For hours that take place indoors, under light.",
    specs: [
      { label: "Case", value: "Square, polished gold" },
      { label: "Dial", value: "Champagne, applied indices" },
      { label: "Bracelet", value: "Gold link" },
      { label: "Strap", value: "—" },
      { label: "Size", value: "Medium square" },
      { label: "Movement note", value: "Quartz, jewelry-grade" },
    ],
    images: {
      hero: img.goldDress,
      gallery: [img.braceletClose, img.heritage],
    },
    featured: true,
    featuredOrder: 3,
    inStock: true,
  },
  {
    id: "wqt-004",
    slug: "petite-ronde",
    name: "Petite Ronde",
    category: "leather",
    overline: "Yellow gold · Slim leather",
    price: 265000,
    currency: "PKR",
    short: "A small round face. Almost a jewel. Almost a secret.",
    description:
      "The quietest piece in the house. A modest gold case on a thin black strap — made for a wrist that already has enough to say.",
    specs: [
      { label: "Case", value: "Small round gold" },
      { label: "Dial", value: "Ivory, minimal markers" },
      { label: "Bracelet", value: "—" },
      { label: "Strap", value: "Slim black leather" },
      { label: "Size", value: "Petite" },
      { label: "Movement note", value: "Quartz, jewelry-grade" },
    ],
    images: {
      hero: img.roundLeather,
      gallery: [img.classicFace, img.heritage],
    },
    featured: false,
    featuredOrder: 4,
    inStock: true,
  },
  {
    id: "wqt-005",
    slug: "dual-tone",
    name: "Dual Tone",
    category: "classic",
    overline: "Silver & gold · Diamond bezel",
    price: 610000,
    currency: "PKR",
    short: "Two metals, one bezel of light.",
    description:
      "Silver and gold held in the same circle, the bezel set so the hour catches. A piece that reads as jewelry in daylight and as a watch only when asked.",
    specs: [
      { label: "Case", value: "Round two-tone, diamond bezel" },
      { label: "Dial", value: "Silvered, mixed indices" },
      { label: "Bracelet", value: "Two-tone link" },
      { label: "Strap", value: "—" },
      { label: "Size", value: "Round dress" },
      { label: "Movement note", value: "Quartz, jewelry-grade" },
    ],
    images: {
      hero: img.diamondBezel,
      gallery: [img.steelGold, img.goldDress],
    },
    featured: false,
    featuredOrder: 5,
    inStock: true,
  },
  {
    id: "wqt-006",
    slug: "nocturne",
    name: "Nocturne",
    category: "statement",
    overline: "Black ceramic · Gold chain",
    price: 455000,
    currency: "PKR",
    short: "An octagon after dark. Gold against black.",
    description:
      "An octagonal black face on a woven gold-and-leather chain. Evening architecture. For rooms that are already lit.",
    specs: [
      { label: "Case", value: "Octagonal, black and gold" },
      { label: "Dial", value: "Black, gold markers" },
      { label: "Bracelet", value: "Woven gold and leather chain" },
      { label: "Strap", value: "—" },
      { label: "Size", value: "Statement octagon" },
      { label: "Movement note", value: "Quartz, jewelry-grade" },
    ],
    images: {
      hero: img.nocturne,
      gallery: [img.steelGold, img.braceletClose],
    },
    featured: false,
    featuredOrder: 6,
    inStock: true,
  },
  {
    id: "wqt-007",
    slug: "empress",
    name: "Empress",
    category: "gold",
    overline: "Yellow gold · Pavé light",
    price: 850000,
    currency: "PKR",
    short: "The most light the house will set in a single case.",
    description:
      "A fully considered gold dress watch. Pavé where it should sparkle, polish where it should rest. Reserved for an occasion that already knows itself.",
    specs: [
      { label: "Case", value: "Round gold, pavé bezel" },
      { label: "Dial", value: "Mother-of-pearl, diamond indices" },
      { label: "Bracelet", value: "Gold dress bracelet" },
      { label: "Strap", value: "—" },
      { label: "Size", value: "Full dress" },
      { label: "Movement note", value: "Quartz, jewelry-grade" },
    ],
    images: {
      hero: img.heritage,
      gallery: [img.diamondBezel, img.goldDress],
    },
    featured: false,
    featuredOrder: 7,
    inStock: true,
  },
  {
    id: "wqt-008",
    slug: "heritage-leather",
    name: "Heritage",
    category: "leather",
    overline: "Gold case · Dark leather",
    price: 325000,
    currency: "PKR",
    short: "A classic round hour. Nothing extra. Everything enough.",
    description:
      "The house’s most traditional round watch. A gold case, a clear dial, a dark leather strap. For those who want time without theatre — and still want WAAQT.",
    specs: [
      { label: "Case", value: "Round gold" },
      { label: "Dial", value: "White, Roman hours" },
      { label: "Bracelet", value: "—" },
      { label: "Strap", value: "Dark calf leather" },
      { label: "Size", value: "Classic round" },
      { label: "Movement note", value: "Quartz, jewelry-grade" },
    ],
    images: {
      hero: img.steelGold,
      gallery: [img.roundLeather, img.classicFace],
    },
    featured: false,
    featuredOrder: 8,
    inStock: true,
  },
  {
    id: "wqt-009",
    slug: "argent",
    name: "Argent",
    category: "classic",
    overline: "Silver · Crystal hours · Double curb chain",
    price: 185000,
    currency: "PKR",
    short: "A black dial, twelve crystals, a silver chain that behaves like jewelry.",
    description:
      "Argent is a dress watch that prefers to be held as a jewel. The round silver case opens onto a matte black dial, each hour marked by a small square crystal rather than a numeral. Slender silver hands keep the time without interrupting the face. The bracelet begins as a double curb chain — two living lines of silver — then settles into a classic link clasp. It is the piece for a white-glove hour: evening, arrival, a navy box opened and closed.",
    specs: [
      { label: "Case", value: "Round, polished silver-tone" },
      { label: "Dial", value: "Matte black, square crystal hour markers" },
      { label: "Hands", value: "Silver hour, minute, and seconds" },
      { label: "Bracelet", value: "Double curb chain into a folding silver link clasp" },
      { label: "Strap", value: "—" },
      { label: "Size", value: "Women’s dress, round" },
      { label: "Movement note", value: "Quartz, jewelry-grade" },
    ],
    images: {
      hero: "product/Argent.jpeg",
      gallery: [],
    },
    inStock: true,
  },
  {
    id: "wqt-010",
    slug: "azur",
    name: "Azur",
    category: "gold",
    overline: "Yellow gold · Sunburst navy · Grain bracelet",
    price: 215000,
    currency: "PKR",
    short: "A small gold case. A navy dial that keeps catching the light.",
    description:
      "Azur is gold against deep blue. The petite round case is highly polished; the dial is a sunburst navy that moves as the wrist turns, with four small crystals at 12, 3, 6, and 9. Gold hands, a quiet crown, no theatre of numbers. The bracelet is the jewelry of the piece: rounded grain links, like polished pebbles in gold, flexible and close to the skin. A salon watch — warm rooms, glass cases, an hour that already knows it is being seen.",
    specs: [
      { label: "Case", value: "Petite round, polished gold-tone" },
      { label: "Dial", value: "Sunburst navy, crystal markers at 12, 3, 6, and 9" },
      { label: "Hands", value: "Gold hour and minute" },
      { label: "Bracelet", value: "Gold grain / pebble-link" },
      { label: "Strap", value: "—" },
      { label: "Size", value: "Petite dress" },
      { label: "Movement note", value: "Quartz, jewelry-grade" },
    ],
    images: {
      hero: "product/Azur.jpeg",
      gallery: [],
    },
    featured: false,
    featuredOrder: 10,
    inStock: true,
  },
  {
    id: "wqt-011",
    slug: "fauve",
    name: "Fauve",
    category: "statement",
    overline: "Yellow gold · Leopard dial · Scale bracelet",
    price: 245000,
    currency: "PKR",
    short: "A teardrop of gold. A leopard hour. Jewelry that happens to keep time.",
    description:
      "Fauve is the house at its most maximal. A polished gold teardrop case — the head of a serpent — holds a leopard dial in tan, brown, and black, with gold Roman hours at the quarters and thin gold hands. The crown sits at the top of the head. The bracelet is scale-work: hexagonal gold links in rows, a honeycomb that reads as skin and as jewel. Photographed in black, it throws its own reflection. For the wrist that wants to be the room.",
    specs: [
      { label: "Case", value: "Teardrop / serpent-head, polished yellow gold-tone" },
      { label: "Dial", value: "Leopard print, gold Roman numerals at 12, 3, 6, and 9" },
      { label: "Hands", value: "Slender gold hour and minute" },
      { label: "Bracelet", value: "Integrated gold scale / honeycomb link" },
      { label: "Strap", value: "—" },
      { label: "Size", value: "Statement, jewelry wrist" },
      { label: "Movement note", value: "Quartz, jewelry-grade" },
    ],
    images: {
      hero: "product/Fauve.jpeg",
      gallery: [],
    },
    featured: false,
    featuredOrder: 4,
    inStock: true,
  },
  {
    id: "wqt-012",
    slug: "jubilee",
    name: "Jubilee",
    category: "classic",
    overline: "Two-tone · Fluted gold bezel · Diamond indices",
    price: 275000,
    currency: "PKR",
    short: "Steel and gold in one circle. A fluted bezel. A dial of quiet diamonds.",
    description:
      "Jubilee is the classic two-tone hour. A silver-tone case is crowned with a fluted yellow-gold bezel; the dial is a soft silver grid, linen-textured, with ten diamond-set indices in square gold mounts and three slender gold hands. The bracelet is five-link: brushed steel at the edges, polished gold in the centre — a jubilee rhythm. It is the piece that looks like it has always belonged on the wrist, even the first time it is worn.",
    specs: [
      { label: "Case", value: "Round steel, yellow-gold fluted bezel" },
      { label: "Dial", value: "Textured silver grid, diamond indices in gold settings" },
      { label: "Hands", value: "Gold hour, minute, and seconds" },
      { label: "Bracelet", value: "Five-link two-tone jubilee" },
      { label: "Strap", value: "—" },
      { label: "Size", value: "Classic round" },
      { label: "Movement note", value: "Quartz, jewelry-grade" },
    ],
    images: {
      hero: "product/jubilee.jpeg",
      gallery: [],
    },
    inStock: true,
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id) ?? null;
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) ?? null;
}

export function getFeaturedProducts() {
  return products
    .filter((p) => p.featured)
    .sort((a, b) => a.featuredOrder - b.featuredOrder);
}

export function getHeroProduct() {
  return getProductById("wqt-001") ?? products[0];
}

export function productImage(product, key = "hero") {
  if (key === "hero") return r2(product.images.hero);
  return (product.images.gallery || []).map((p) => r2(p));
}

export function allProductViews(product) {
  return [r2(product.images.hero), ...(product.images.gallery || []).map((p) => r2(p))].filter(
    Boolean
  );
}
