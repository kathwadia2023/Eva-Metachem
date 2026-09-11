import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import IndustryExplorer from "../components/IndustryExplorer";
import "./Industries.css";

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries & Applications"
        description="EVA METACHEM's metal salts serve agriculture, battery technology, electroplating, water treatment, rubber, ceramics, paints, cosmetics and more."
        path="/industries"
      />

      <section className="industries-hero">
        <div className="container">
          <span className="kicker-line">Industries &amp; Applications</span>
          <h1>Twelve industries. One reliable supplier.</h1>
          <p>
            Select an industry to see which EVA METACHEM products are relevant to it.
          </p>
        </div>
      </section>

      <section className="section container">
        <IndustryExplorer />
      </section>

      <section className="cta-band">
        <div className="container cta-band__row">
          <div>
            <h2>Don&rsquo;t see your industry listed?</h2>
            <p>Tell us about your application &mdash; we&rsquo;ll help identify the right product and grade.</p>
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
