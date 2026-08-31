export const site = {
  name: "WAAQT",
  origin: "Pakistan",
  currency: "PKR",
  /** Digits only, country code, no + or spaces. Replace before launch. */
  whatsappNumber: "92XXXXXXXXXX",
  whatsappDefaultMessage: "Hello WAAQT, I would like to inquire about a timepiece.",
  /**
   * Public R2 base (no trailing slash). Unused while product images are
   * absolute URLs or local /public paths. Swap product paths to R2 keys later.
   */
  r2BaseUrl: "https://pub-b595938c261548e68ebec2b2c60f92b2.r2.dev",
  heroProductId: "wqt-001",
  stillLifeImage: "/watches/brand/hero-pair.png",
  logo: "/logo.jpg",
};

export function r2(path) {
  if (!path) return "";
  if (/^https?:\/\//.test(path) || path.startsWith("/")) return path;
  return `${site.r2BaseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
