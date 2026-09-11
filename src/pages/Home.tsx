import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import TrustStrip from "../components/TrustStrip";
import ProductCard from "../components/ProductCard";
import WhyGrid from "../components/WhyGrid";
import IndustryExplorer from "../components/IndustryExplorer";
import CrystalGlyph from "../components/CrystalGlyph";
import { products, company } from "../data/products";
import "./Home.css";

export default function Home() {
  return (
    <>
      <SEO
        title="EVA METACHEM | Reliable Chemical Solutions for Global Industries"
        description="High-purity Copper Sulphate Pentahydrate, Cobalt Sulphate Heptahydrate and Zinc Oxide manufactured and supplied by EVA METACHEM, Ahmedabad. Request a quotation."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: company.name,
          url: "https://www.evametachem.com",
          description: company.tagline,
          email: company.email,
          telephone: company.phone,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            addressCountry: "IN",
          },
        }}
      />

      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="kicker-line">{company.slogan}</span>
            <h1>
              Reliable chemistry, built for industrial performance.
            </h1>
            <p className="hero__lead">
              EVA METACHEM manufactures and supplies high-purity metal salts, engineered for
              consistency, performance and dependable supply across global industries.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn-primary">
                Request an Inquiry
              </Link>
              <Link to="/products" className="btn btn-outline-dark">
                Explore Products
              </Link>
            </div>
            <dl className="hero__facts">
              <div>
                <dt>Based in</dt>
                <dd>{company.location}</dd>
              </div>
              <div>
                <dt>Core Products</dt>
                <dd>3 High-Purity Metal Salts</dd>
              </div>
              <div>
                <dt>Packaging</dt>
                <dd>25kg &middot; 50kg &middot; 1000kg FIBC</dd>
              </div>
            </dl>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__visual-grid" />
            {products.map((p, i) => (
              <div className={`hero__crystal hero__crystal--${i}`} key={p.slug}>
                <CrystalGlyph color={p.color} />
              </div>
            ))}
            <div className="hero__formula hero__formula--1">CuSO&#8324;&middot;5H&#8322;O</div>
            <div className="hero__formula hero__formula--2">CoSO&#8324;&middot;7H&#8322;O</div>
            <div className="hero__formula hero__formula--3">ZnO</div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* PRODUCTS */}
      <section className="section container">
        <div className="section-head">
          <div>
            <span className="kicker-line">Core Products</span>
            <h2>High-purity metal salts for demanding industries.</h2>
          </div>
          <Link to="/products" className="btn-ghost section-head__link">
            View All Products
          </Link>
        </div>

        <div className="home-products-grid">
          {products.map((p) => (
            <ProductCard product={p} key={p.slug} />
          ))}
        </div>
      </section>

      {/* WHY EVA METACHEM */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker-line">Why EVA METACHEM</span>
              <h2>Quality your production line can plan around.</h2>
            </div>
          </div>
          <WhyGrid />
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section container">
        <div className="section-head">
          <div>
            <span className="kicker-line">Industries We Serve</span>
            <h2>One supplier, applications across your entire value chain.</h2>
          </div>
          <Link to="/industries" className="btn-ghost section-head__link">
            View All Industries
          </Link>
        </div>
        <IndustryExplorer compact />
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="container cta-band__row">
          <div>
            <h2>Have a requirement? Let&rsquo;s talk chemistry.</h2>
            <p>Tell us your product, grade and quantity — we&rsquo;ll respond directly.</p>
          </div>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn-primary">
              Request an Inquiry
            </Link>
            <a href={`mailto:${company.email}`} className="btn btn-outline-light">
              {company.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
