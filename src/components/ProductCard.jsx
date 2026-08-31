import { Link } from "react-router-dom";
import { r2 } from "../data/site.js";
import { formatPkr } from "../lib/format.js";
import { WatchImage } from "./WatchImage.jsx";

export function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.slug}`} className="pcard">
      <div className="pcard-stage">
        <WatchImage
          src={r2(product.images.hero)}
          alt={`${product.name} — ${product.overline}`}
          className="pcard-img"
        />
      </div>
      <div className="pcard-meta">
        <h3 className="pcard-name">{product.name}</h3>
        <p className="pcard-line">{product.overline}</p>
        <p className="pcard-price">{formatPkr(product.price)}</p>
      </div>
    </Link>
  );
}
