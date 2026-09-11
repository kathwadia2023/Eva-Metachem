import { Link, Navigate, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import CrystalGlyph from "../components/CrystalGlyph";
import { getProductBySlug, products, packagingOptions } from "../data/products";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug ?? "");

  if (!product) return <Navigate to="/products" replace />;

  const otherProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <SEO
        title={`${product.name} (${product.formula}) Manufacturer & Supplier`}
        description={`${product.description} Available grades: ${product.grades.join(", ")}. Request a quotation from EVA METACHEM.`}
        path={`/products/${product.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.description,
          brand: { "@type": "Brand", name: "EVA METACHEM" },
        }}
      />

      {/* PRODUCT HERO */}
      <section className="pd-hero" style={{ ["--accent" as string]: product.color }}>
        <div className="container pd-hero__grid">
          <div className="pd-hero__visual">
            <CrystalGlyph color={product.color} large />
          </div>
          <div className="pd-hero__copy">
            <span className="tag">{product.formula}</span>
            <h1>{product.name}</h1>
            <p>{product.tagline}</p>
            <div className="pd-hero__actions">
              <Link to={`/contact?product=${product.slug}`} className="btn btn-primary">
                Request Inquiry
              </Link>
              <a href="#specifications" className="btn btn-outline-dark">
                View Specifications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section container pd-overview">
        <div className="pd-overview__text">
          <span className="kicker-line">Overview</span>
          <h2>Product Overview</h2>
          <p>{product.description}</p>
        </div>
        <dl className="pd-overview__facts">
          <div>
            <dt>Chemical Formula</dt>
            <dd>{product.formula}</dd>
          </div>
          {product.appearance && (
            <div>
              <dt>Appearance</dt>
              <dd>{product.appearance}</dd>
            </div>
          )}
          <div>
            <dt>{product.gradeLabel}</dt>
            <dd>{product.grades.join(" \u00b7 ")}</dd>
          </div>
        </dl>
      </section>

      {/* GRADES */}
      <section className="section section--tint">
        <div className="container">
          <span className="kicker-line">{product.gradeLabel}</span>
          <h2 className="pd-section-title">Choose the grade that fits your process.</h2>
          <div className="pd-grades">
            {product.grades.map((g) => (
              <div className="pd-grades__item" key={g}>
                <span>{g}</span>
                <em>{product.shortName}</em>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section container">
        <span className="kicker-line">Product Highlights</span>
        <h2 className="pd-section-title">Built for repeatable industrial performance.</h2>
        <ul className="pd-highlights">
          {product.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      {/* APPLICATIONS */}
      <section className="section section--tint">
        <div className="container">
          <span className="kicker-line">Applications</span>
          <h2 className="pd-section-title">Where {product.shortName} is used.</h2>
          <div className="pd-applications">
            {product.applications.map((a) => (
              <div className="pd-applications__item" key={a.name}>
                <h3>{a.name}</h3>
                <p>{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGING */}
      <section className="section container">
        <span className="kicker-line">Packaging</span>
        <h2 className="pd-section-title">Packed for safe handling and transit.</h2>
        <div className="pd-packaging">
          {packagingOptions.map((opt) => (
            <div className="pd-packaging__item" key={opt.name}>
              <h3>{opt.name}</h3>
              <p>{opt.detail}</p>
            </div>
          ))}
        </div>
        <p className="pd-packaging__note">
          Customized packaging is available where applicable — let us know your requirement when
          you submit an inquiry.
        </p>
      </section>

      {/* SPECIFICATIONS / DOCUMENTS */}
      <section id="specifications" className="section section--tint">
        <div className="container pd-docs">
          <div>
            <span className="kicker-line">Quality &amp; Consistency</span>
            <h2 className="pd-section-title">Technical documentation, on request.</h2>
            <p className="pd-docs__note">
              Technical Data Sheets (TDS) and Certificates of Analysis (COA) are issued per batch
              and shared directly with confirmed inquiries. This section is built to host them
              here once available.
            </p>
          </div>
          <div className="pd-docs__list">
            <div className="pd-docs__item">
              <strong>TDS</strong>
              <span>Available on request</span>
            </div>
            <div className="pd-docs__item">
              <strong>COA</strong>
              <span>Issued per batch</span>
            </div>
            <div className="pd-docs__item">
              <strong>Product Information</strong>
              <span>Available on request</span>
            </div>
          </div>
        </div>
      </section>

      {/* INQUIRY CTA */}
      <section className="cta-band">
        <div className="container cta-band__row">
          <div>
            <h2>Ready to request {product.shortName}?</h2>
            <p>Share your grade, quantity and application — we&rsquo;ll get back to you directly.</p>
          </div>
          <div className="cta-band__actions">
            <Link to={`/contact?product=${product.slug}`} className="btn btn-primary">
              Request Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* OTHER PRODUCTS */}
      <section className="section container">
        <span className="kicker-line">Also Explore</span>
        <h2 className="pd-section-title">Other products from EVA METACHEM.</h2>
        <div className="pd-others">
          {otherProducts.map((p) => (
            <Link to={`/products/${p.slug}`} key={p.slug} className="pd-others__item">
              <span className="tag">{p.formula}</span>
              <strong>{p.shortName}</strong>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
