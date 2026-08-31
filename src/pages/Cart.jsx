import { Link } from "react-router-dom";
import { r2 } from "../data/site.js";
import { formatPkr } from "../lib/format.js";
import { useCart } from "../context/CartContext.jsx";
import { Button } from "../components/Button.jsx";
import { QuantityControl } from "../components/QuantityControl.jsx";
import { WatchImage } from "../components/WatchImage.jsx";
import { usePageTitle } from "../hooks/usePageTitle.js";

export function Cart() {
  usePageTitle("WAAQT · Selection");
  const { items, setQty, remove, subtotal, count, maxQty } = useCart();

  if (!items.length) {
    return (
      <main className="page page-pad empty-page">
        <div className="wrap empty-box">
          <h1>Your selection is empty.</h1>
          <p>The tray is clear. Choose a piece from the collection.</p>
          <Button to="/collection" variant="ghost">
            The collection
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="page page-pad cart">
      <header className="wrap cart-head">
        <p className="overline">{count} {count === 1 ? "piece" : "pieces"}</p>
        <h1>Your selection</h1>
      </header>

      <div className="wrap cart-layout">
        <ul className="cart-list">
          {items.map(({ product, quantity }) => (
            <li key={product.id} className="cart-row">
              <Link to={`/product/${product.slug}`} className="cart-thumb">
                <WatchImage
                  src={r2(product.images.hero)}
                  alt={product.name}
                  className="cart-img"
                />
              </Link>
              <div className="cart-meta">
                <h2>{product.name}</h2>
                <p>{product.overline}</p>
                <p className="cart-price">{formatPkr(product.price)}</p>
              </div>
              <div className="cart-controls">
                <QuantityControl
                  value={quantity}
                  onChange={(n) => setQty(product.id, n)}
                  max={maxQty}
                />
                <button type="button" className="cart-remove" onClick={() => remove(product.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>

        <aside className="cart-sum">
          <p className="overline">The tray</p>
          <div className="sum-row">
            <span>Subtotal</span>
            <strong>{formatPkr(subtotal)}</strong>
          </div>
          <p className="sum-note">
            The house confirms availability and delivery on WhatsApp. No payment is taken here.
          </p>
          <Button to="/checkout">Continue to order</Button>
        </aside>
      </div>

      <div className="cart-sticky">
        <span>{formatPkr(subtotal)}</span>
        <Button to="/checkout">Continue to order</Button>
      </div>
    </main>
  );
}
