import { createContext, useContext, useMemo, useState, useCallback, useEffect } from "react";
import { products, getProductById } from "../data/products.js";
import { readCart, writeCart } from "../lib/cartStorage.js";

const MAX_QTY = 5;
const CartContext = createContext(null);

function resolve(rawItems) {
  return rawItems
    .map((line) => {
      const product = getProductById(line.productId);
      if (!product) return null;
      const quantity = Math.min(MAX_QTY, Math.max(1, Number(line.quantity) || 1));
      return { ...line, quantity, product };
    })
    .filter(Boolean);
}

export function CartProvider({ children }) {
  const [raw, setRaw] = useState(() =>
    typeof window === "undefined" ? { items: [] } : readCart()
  );

  useEffect(() => {
    writeCart(raw);
  }, [raw]);

  const add = useCallback((productId, qty = 1) => {
    setRaw((prev) => {
      const items = [...prev.items];
      const i = items.findIndex((x) => x.productId === productId);
      if (i >= 0) {
        items[i] = {
          ...items[i],
          quantity: Math.min(MAX_QTY, items[i].quantity + qty),
        };
      } else {
        items.push({ productId, quantity: Math.min(MAX_QTY, qty) });
      }
      return { items };
    });
  }, []);

  const setQty = useCallback((productId, qty) => {
    setRaw((prev) => ({
      items: prev.items.map((x) =>
        x.productId === productId
          ? { ...x, quantity: Math.min(MAX_QTY, Math.max(1, qty)) }
          : x
      ),
    }));
  }, []);

  const remove = useCallback((productId) => {
    setRaw((prev) => ({
      items: prev.items.filter((x) => x.productId !== productId),
    }));
  }, []);

  const clear = useCallback(() => setRaw({ items: [] }), []);

  const value = useMemo(() => {
    const knownIds = new Set(products.map((p) => p.id));
    const cleaned = raw.items.filter((i) => knownIds.has(i.productId));
    const items = resolve(cleaned);
    const subtotal = items.reduce((s, i) => s + i.product.price * i.quantity, 0);
    const count = items.reduce((s, i) => s + i.quantity, 0);
    return { items, add, setQty, remove, clear, subtotal, count, maxQty: MAX_QTY };
  }, [raw, add, setQty, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
