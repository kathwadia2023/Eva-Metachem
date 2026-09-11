import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { qualitySteps } from "../data/products";
import "./Quality.css";

export default function Quality() {
  return (
    <>
      <SEO
        title="Quality & Manufacturing"
        description="How EVA METACHEM approaches raw material selection, process control, quality checks and dispatch readiness for its metal salt products."
        path="/quality"
      />

      <section className="quality-hero">
        <div className="container">
          <span className="kicker-line">Quality &amp; Manufacturing</span>
          <h1>Consistency is a process, not a promise.</h1>
          <p>
            Every batch moves through the same structured stages, from raw material selection to
            dispatch, so the product that leaves EVA METACHEM matches the grade you ordered.
          </p>
        </div>
      </section>

      <section className="section container">
        <ol className="quality-timeline">
          {qualitySteps.map((s) => (
            <li key={s.step} className="quality-timeline__item">
              <span className="quality-timeline__step">{s.step}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section--tint">
        <div className="container quality-note">
          <span className="kicker-line">A Note on Certifications</span>
          <h2>We only state what we can stand behind.</h2>
          <p>
            This page describes our internal process approach. Where formal certifications or
            laboratory accreditations apply, they will be listed here with supporting
            documentation once available &mdash; we don&rsquo;t list claims we can&rsquo;t back up.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__row">
          <div>
            <h2>Have technical questions before ordering?</h2>
            <p>Ask us about grade selection, packaging or documentation for your requirement.</p>
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
