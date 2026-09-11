import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { company, products } from "../data/products";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Link to="/" className="site-footer__logo">
            <img src={logo} alt="EVA METACHEM" width={44} height={42} />
            <span>
              EVA <strong>METACHEM</strong>
            </span>
          </Link>
          <p>{company.tagline}</p>
        </div>

        <div className="site-footer__col">
          <h3>Quick Links</h3>
          <Link to="/products">Products</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/about">About</Link>
          <Link to="/quality">Quality</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="site-footer__col">
          <h3>Products</h3>
          {products.map((p) => (
            <Link key={p.slug} to={`/products/${p.slug}`}>
              {p.shortName}
            </Link>
          ))}
        </div>

        <div className="site-footer__col">
          <h3>Contact</h3>
          <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <span>{company.location}</span>
          <Link to="/contact" className="btn btn-primary site-footer__cta">
            Request an Inquiry
          </Link>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} EVA METACHEM. All rights reserved.
        </p>
        <div className="site-footer__legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
