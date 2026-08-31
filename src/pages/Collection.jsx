import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, products } from "../data/products.js";
import { ProductCard } from "../components/ProductCard.jsx";
import { usePageTitle } from "../hooks/usePageTitle.js";

export function Collection() {
  usePageTitle("WAAQT · Collection");
  const [params, setParams] = useSearchParams();
  const category = params.get("category") || "all";

  const list = useMemo(() => {
    if (category === "all") return products;
    return products.filter((p) => p.category === category);
  }, [category]);

  return (
    <main className="page page-pad collection">
      <header className="wrap collection-head">
        <p className="overline">Every piece chosen</p>
        <h1>Collection</h1>
        <p className="collection-lede">Not stocked in bulk. Held as jewelry.</p>
      </header>

      <div className="wrap collection-filters" role="tablist" aria-label="Categories">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={category === c.id}
            className={`filter ${category === c.id ? "is-active" : ""}`}
            onClick={() => {
              if (c.id === "all") setParams({});
              else setParams({ category: c.id });
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="wrap empty-line">Nothing in this chapter yet.</p>
      ) : (
        <div className="wrap collection-grid">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </main>
  );
}
