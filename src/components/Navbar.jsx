import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const links = [
  { to: "/collection", label: "Collection" },
  { to: "/about", label: "About" },
];

export function Navbar() {
  const { count } = useCart();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = pathname !== "/" || scrolled || open;

  return (
    <div className={`nav-root ${open ? "is-open" : ""}`}>
      <header className={`nav ${solid ? "nav-solid" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-mark">
            WAAQT
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className="nav-link">
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-end">
            <Link to="/cart" className="nav-cart" aria-label={`Selection, ${count} pieces`}>
              <CartIcon />
              {count > 0 && <span className="nav-count">{count}</span>}
            </Link>
            <button
              type="button"
              className={`nav-burger ${open ? "is-open" : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`nav-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav className="nav-panel-links" aria-label="Mobile">
          <NavLink to="/" end className="nav-panel-link">
            Home
          </NavLink>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav-panel-link">
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/cart" className="nav-panel-link">
            Selection
          </NavLink>
        </nav>
        <p className="nav-panel-origin">Pakistan</p>
      </div>
    </div>
  );
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 7.5h12l-.7 11.2a1.5 1.5 0 0 1-1.5 1.4H8.2a1.5 1.5 0 0 1-1.5-1.4L6 7.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M9 7.5V6.2A3 3 0 0 1 12 3.2 3 3 0 0 1 15 6.2v1.3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}
