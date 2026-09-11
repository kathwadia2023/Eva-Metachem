import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { products } from "../data/products";
import "./Header.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Industries", to: "/industries" },
  { label: "Quality", to: "/quality" },
  { label: "Packaging", to: "/packaging" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__bar container">
        <Link to="/" className="site-header__logo" aria-label="EVA METACHEM home">
          <img src={logo} alt="EVA METACHEM" width={40} height={38} />
          <span className="site-header__wordmark">
            EVA <strong>METACHEM</strong>
          </span>
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          <NavLink to="/" end className="site-header__link">
            Home
          </NavLink>
          <div className="site-header__products" ref={productsRef}>
            <button
              type="button"
              className="site-header__link site-header__link--btn"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen((v) => !v)}
            >
              Products
              <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
            </button>
            {productsOpen && (
              <div className="site-header__dropdown" role="menu">
                <Link to="/products" role="menuitem" className="site-header__dropdown-all">
                  All Products
                </Link>
                <hr className="hr" />
                {products.map((p) => (
                  <Link key={p.slug} to={`/products/${p.slug}`} role="menuitem">
                    <span>{p.shortName}</span>
                    <em>{p.formula}</em>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.slice(1).map((l) => (
            <NavLink key={l.to} to={l.to} className="site-header__link">
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <a href="tel:+919427599521" className="site-header__phone">
            +91 94275 99521
          </a>
          <Link to="/contact" className="btn btn-primary site-header__cta">
            Request an Inquiry
          </Link>
          <button
            type="button"
            className="site-header__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`site-header__mobile ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile primary">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <span className="site-header__mobile-label">Products</span>
          <div className="site-header__mobile-products">
            <NavLink to="/products">All Products</NavLink>
            {products.map((p) => (
              <NavLink key={p.slug} to={`/products/${p.slug}`}>
                {p.shortName}
              </NavLink>
            ))}
          </div>
          <NavLink to="/industries">Industries</NavLink>
          <NavLink to="/quality">Quality &amp; Manufacturing</NavLink>
          <NavLink to="/packaging">Packaging &amp; Logistics</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <Link to="/contact" className="btn btn-primary site-header__mobile-cta">
          Request an Inquiry
        </Link>
      </div>
    </header>
  );
}
