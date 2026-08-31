import { Link } from "react-router-dom";
import { site } from "../data/site.js";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <Link to="/" className="footer-mark" aria-label={site.name}>
          <img src={site.logo} alt={site.name} className="footer-logo" />
        </Link>
        <p className="footer-line">Time, origin, and craft — {site.origin}.</p>
        <nav className="footer-links">
          <Link to="/collection">Collection</Link>
          <Link to="/about">About</Link>
          <a
            href={`https://wa.me/${site.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </nav>
        <p className="footer-legal">© {new Date().getFullYear()} WAAQT. All hours reserved.</p>
        <p className="footer-credit">
          Managed and designed by{" "}
          <a
            href="http://trisitesolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TrisiteSolution
          </a>
        </p>
      </div>
    </footer>
  );
}
