import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { allProductViews, getProductBySlug } from "../data/products.js";
import { formatPkr } from "../lib/format.js";
import { useCart } from "../context/CartContext.jsx";
import { useToast } from "../context/ToastContext.jsx";
import { Button } from "../components/Button.jsx";
import { QuantityControl } from "../components/QuantityControl.jsx";
import { WatchImage } from "../components/WatchImage.jsx";
import { usePageTitle } from "../hooks/usePageTitle.js";

export function Product() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const navigate = useNavigate();
  const { add, maxQty } = useCart();
  const { show } = useToast();
  const views = useMemo(() => (product ? allProductViews(product) : []), [product]);
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);

  usePageTitle(product ? `WAAQT · ${product.name}` : "WAAQT");

  if (!product) {
    return (
      <main className="page page-pad empty-page">
        <div className="wrap empty-box">
          <h1>This piece is no longer shown.</h1>
          <p>The house has withdrawn it from the current viewing.</p>
          <Button to="/collection" variant="ghost">
            Return to the collection
          </Button>
        </div>
      </main>
    );
  }

  const src = views[active] || views[0];

  const addToSelection = () => {
    add(product.id, qty);
    show(`${product.name} placed on your tray.`);
  };

  const orderThis = () => {
    add(product.id, qty);
    navigate("/checkout");
  };

  return (
    <main className="page page-pad product">
      <div className="wrap product-grid">
        <div className="product-stage">
          <div className="product-frame">
            <WatchImage
              key={src}
              src={src}
              alt={`${product.name} — ${product.overline}`}
              className="product-img"
              eager
            />
          </div>
          {views.length > 1 && (
            <div className="thumbs">
              {views.map((v, i) => (
                <button
                  key={v}
                  type="button"
                  className={`thumb ${i === active ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`View ${i + 1}`}
                >
                  <img src={v} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product-info">
          <p className="overline">WAAQT</p>
          <h1>{product.name}</h1>
          <p className="product-desc">{product.description}</p>
          <p className="product-price">{formatPkr(product.price)}</p>
          <QuantityControl value={qty} onChange={setQty} max={maxQty} />
          <div className="product-actions">
            <Button onClick={addToSelection}>Add to selection</Button>
            <Button variant="ghost" onClick={orderThis}>
              Order this piece on WhatsApp
            </Button>
          </div>
        </div>
      </div>

      <section className="wrap product-specs">
        <h2>The piece</h2>
        <dl>
          {product.specs.map((row) => (
            <div key={row.label} className="spec-row">
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
        <p className="product-back">
          <Link to="/collection">← The collection</Link>
        </p>
      </section>
    </main>
  );
}
