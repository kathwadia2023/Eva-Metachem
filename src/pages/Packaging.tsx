import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { packagingOptions } from "../data/products";
import "./Packaging.css";

const logistics = [
  {
    title: "Customized Packaging",
    detail: "Bag size and labeling can be adjusted to match your operational or regulatory requirement.",
  },
  {
    title: "Secure Palletization",
    detail: "Bags are palletized and secured to withstand handling through transit.",
  },
  {
    title: "Export Logistics",
    detail: "We coordinate documentation and dispatch to support cross-border orders.",
  },
  {
    title: "Port-to-Port Coordination",
    detail: "Working with freight partners to align dispatch with your shipping schedule.",
  },
];

export default function Packaging() {
  return (
    <>
      <SEO
        title="Packaging & Logistics"
        description="EVA METACHEM ships Copper Sulphate, Cobalt Sulphate and Zinc Oxide in 25kg and 50kg HDPE bags and 1000kg FIBC jumbo bags, with customized packaging and export logistics coordination."
        path="/packaging"
      />

      <section className="packaging-hero">
        <div className="container">
          <span className="kicker-line">Packaging &amp; Logistics</span>
          <h1>Packed to travel. Ready to receive.</h1>
          <p>
            Every order is packed with the handling and transit conditions of industrial and
            export shipping in mind.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="packaging-grid">
          {packagingOptions.map((opt) => (
            <div className="packaging-grid__item" key={opt.name}>
              <div className="packaging-grid__icon" aria-hidden="true">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 8l8-4 8 4-8 4-8-4zm0 0v8l8 4 8-4V8M12 12v8"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>{opt.name}</h3>
              <p>{opt.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <span className="kicker-line">Export Readiness</span>
          <h2 className="packaging-section-title">Built for orders that need to travel.</h2>
          <div className="packaging-logistics">
            {logistics.map((item) => (
              <div className="packaging-logistics__item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__row">
          <div>
            <h2>Need a specific pack size or export quote?</h2>
            <p>Tell us the destination, quantity and packaging you need.</p>
          </div>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn-primary">
              Request an Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
