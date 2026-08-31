const KEY = "waaqt.cart";

const empty = () => ({ items: [], updatedAt: new Date().toISOString() });

export function readCart() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.items)) return empty();
    return {
      items: parsed.items.filter(
        (i) => i && typeof i.productId === "string" && Number(i.quantity) > 0
      ),
      updatedAt: parsed.updatedAt || new Date().toISOString(),
    };
  } catch {
    return empty();
  }
}

export function writeCart(cart) {
  const next = {
    items: cart.items,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function clearCartStorage() {
  localStorage.setItem(KEY, JSON.stringify(empty()));
  return empty();
}
