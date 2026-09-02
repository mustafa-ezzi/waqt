import { r2 } from "./site.js";

export const categories = [
  { id: "all", label: "All" },
  { id: "gold", label: "Gold" },
  { id: "statement", label: "Statement" },
  { id: "classic", label: "Classic" },
];

export const products = [
  {
    id: "wqt-001",
    slug: "serpent-leopard",
    name: "The Serpent Leopard",
    category: "statement",
    overline: "Gold-tone · Leopard dial · Geometric bracelet",
    price: 1500,
    currency: "PKR",
    short: "A serpentine gold-tone watch with an exotic leopard-print teardrop dial.",
    description:
      "A striking serpentine gold-tone watch featuring an exotic leopard-print teardrop dial and an articulated geometric link bracelet.",
    specs: [
      { label: "Case", value: "Teardrop / serpentine, polished gold-tone" },
      { label: "Dial", value: "Leopard print, gold Roman hours" },
      { label: "Bracelet", value: "Articulated geometric gold-tone links" },
      { label: "Strap", value: "—" },
      { label: "Size", value: "Statement, jewelry wrist" },
      { label: "Movement note", value: "Quartz" },
    ],
    images: {
      hero: "product/serpentleopard.jpeg",
      gallery: [],
    },
    featured: true,
    featuredOrder: 1,
    inStock: true,
  },
  {
    id: "wqt-002",
    slug: "two-tone-classic",
    name: "The Two-Tone Classic",
    category: "classic",
    overline: "Two-tone · Fluted gold bezel · Jubilee bracelet",
    price: 1500,
    currency: "PKR",
    short: "Steel and gold, a fluted bezel, and a jubilee bracelet.",
    description:
      "A sophisticated two-tone timepiece featuring a fluted gold bezel, textured silver dial with stone hour markers, and a matching jubilee-style link bracelet.",
    specs: [
      { label: "Case", value: "Round steel with yellow-gold fluted bezel" },
      { label: "Dial", value: "Textured silver, stone hour markers" },
      { label: "Bracelet", value: "Five-link two-tone jubilee" },
      { label: "Strap", value: "—" },
      { label: "Size", value: "Classic round" },
      { label: "Movement note", value: "Quartz" },
    ],
    images: {
      hero: "product/The%20Two-Tone%20Classic.jpeg",
      gallery: [],
    },
    featured: true,
    featuredOrder: 2,
    inStock: true,
  },
  {
    id: "wqt-003",
    slug: "regal-gold-dial",
    name: "The Regal Gold Dial",
    category: "gold",
    overline: "Gold-tone · Fluted bezel · Stone markers",
    price: 1500,
    currency: "PKR",
    short: "A gold-tone hour with a fluted bezel and a textured dial.",
    description:
      "A stunning gold-tone timepiece featuring a fluted bezel, textured dial, sparkling stone markers, and a polished link bracelet for effortless elegance.",
    specs: [
      { label: "Case", value: "Round gold-tone, fluted bezel" },
      { label: "Dial", value: "Textured silver, square stone markers" },
      { label: "Bracelet", value: "Polished gold-tone jubilee links" },
      { label: "Strap", value: "—" },
      { label: "Size", value: "Classic round" },
      { label: "Movement note", value: "Quartz" },
    ],
    images: {
      hero: "product/regalgolddial.jpeg",
      gallery: [],
    },
    featured: true,
    featuredOrder: 3,
    inStock: true,
  },
  {
    id: "wqt-004",
    slug: "wild-leopard-gold",
    name: "The Wild Leopard Gold",
    category: "statement",
    overline: "Gold-tone · Leopard dial · Crystal bezel",
    price: 1500,
    currency: "PKR",
    short: "Leopard print, a crystal bezel, and a sleek gold bracelet.",
    description:
      "A bold gold-tone watch featuring a chic leopard-print dial, a crystal-embellished bezel, and a sleek link bracelet.",
    specs: [
      { label: "Case", value: "Round gold-tone, crystal-set bezel" },
      { label: "Dial", value: "Leopard print, crystal hour markers" },
      { label: "Bracelet", value: "Sleek gold-tone link" },
      { label: "Strap", value: "—" },
      { label: "Size", value: "Statement round" },
      { label: "Movement note", value: "Quartz" },
    ],
    images: {
      hero: "product/wildleopardgold.jpeg",
      gallery: [],
    },
    featured: false,
    featuredOrder: 4,
    inStock: true,
  },
  {
    id: "wqt-005",
    slug: "midnight-luxe",
    name: "The Midnight Luxe",
    category: "gold",
    overline: "Gold-tone · Midnight-blue dial · Pill-link bracelet",
    price: 1500,
    currency: "PKR",
    short: "A navy sunburst dial in a gold case, on a pill-link bracelet.",
    description:
      "A refined gold-tone watch featuring a deep midnight-blue sunburst dial, delicate stone markers, and a distinctive pill-link bracelet.",
    specs: [
      { label: "Case", value: "Round polished gold-tone" },
      { label: "Dial", value: "Midnight-blue sunburst, stone markers at 12, 3, 6, and 9" },
      { label: "Bracelet", value: "Gold-tone pill / grain link" },
      { label: "Strap", value: "—" },
      { label: "Size", value: "Petite dress" },
      { label: "Movement note", value: "Quartz" },
    ],
    images: {
      hero: "product/midnightluxe.jpeg",
      gallery: [],
    },
    featured: false,
    featuredOrder: 5,
    inStock: true,
  },
  {
    id: "wqt-006",
    slug: "obsidian-chain",
    name: "The Obsidian Chain",
    category: "classic",
    overline: "Silver-tone · Black dial · Double-chain strap",
    price: 1500,
    currency: "PKR",
    short: "A black dial, crystal hours, and a silver double-chain strap.",
    description:
      "A sleek silver-tone watch featuring a deep black dial, sparkling crystal markers, and a distinctive double-chain strap.",
    specs: [
      { label: "Case", value: "Round polished silver-tone" },
      { label: "Dial", value: "Matte black, crystal hour markers" },
      { label: "Bracelet", value: "Double curb chain into a silver link clasp" },
      { label: "Strap", value: "—" },
      { label: "Size", value: "Women’s dress, round" },
      { label: "Movement note", value: "Quartz" },
    ],
    images: {
      hero: "product/obsidianchain.jpeg",
      gallery: [],
    },
    featured: false,
    featuredOrder: 6,
    inStock: true,
  },
  {
    id: "wqt-007",
    slug: "prism-gold",
    name: "The Prism Gold",
    category: "statement",
    overline: "Gold-tone · White triangular dial · Crystal bracelet",
    price: 1500,
    currency: "PKR",
    short: "A triangular gold watch with a white dial and a crystal bracelet.",
    description:
      "A unique triangular gold-tone watch featuring a clean white dial and a statement bracelet crafted with dazzling, multi-faceted crystal gems.",
    specs: [
      { label: "Case", value: "Triangular gold-tone" },
      { label: "Dial", value: "White, gold markers" },
      { label: "Bracelet", value: "Multi-faceted crystal gems in gold settings" },
      { label: "Strap", value: "—" },
      { label: "Size", value: "Statement jewelry wrist" },
      { label: "Movement note", value: "Quartz" },
    ],
    images: {
      hero: "product/prismgold.jpeg",
      gallery: [],
    },
    featured: false,
    featuredOrder: 7,
    inStock: true,
  },
  {
    id: "wqt-008",
    slug: "emerald-luxe",
    name: "The Emerald Luxe",
    category: "gold",
    overline: "Gold-tone · Emerald sunburst · Textured bracelet",
    price: 1500,
    currency: "PKR",
    short: "An emerald-green dial, Roman hours, and a textured gold bracelet.",
    description:
      "A stunning gold-tone watch featuring a vibrant emerald-green sunburst dial with Roman numeral markers and a textured link bracelet.",
    specs: [
      { label: "Case", value: "Round polished gold-tone" },
      { label: "Dial", value: "Emerald-green sunburst, gold Roman numerals" },
      { label: "Bracelet", value: "Textured geometric gold-tone links" },
      { label: "Strap", value: "—" },
      { label: "Size", value: "Dress round" },
      { label: "Movement note", value: "Quartz" },
    ],
    images: {
      hero: "product/emeraldluxe.jpeg",
      gallery: [],
    },
    featured: false,
    featuredOrder: 8,
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
