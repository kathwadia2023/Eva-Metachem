import { Link, useLocation } from "react-router-dom";
import { company } from "../data/products";
import "./StickyMobileCta.css";

export default function StickyMobileCta() {
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;

  return (
    <div className="sticky-cta" role="complementary" aria-label="Quick contact">
      <a href={`tel:${company.phoneHref}`} className="sticky-cta__call" aria-label="Call EVA METACHEM">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1v3.6c0 .6-.4 1-1 1C10.6 21.2 2.8 13.4 2.8 4c0-.6.4-1 1-1H7.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.2 2.2z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
        Call
      </a>
      <Link to="/contact" className="btn btn-primary sticky-cta__inquiry">
        Request an Inquiry
      </Link>
    </div>
  );
}
