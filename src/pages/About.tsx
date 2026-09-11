import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import WhyGrid from "../components/WhyGrid";
import { company } from "../data/products";
import "./About.css";

const strengths = [
  "High purity",
  "Consistent quality",
  "Reliable supply",
  "Direct manufacturer relationship",
  "Multi-stage quality control",
  "Customized requirements & packaging",
  "Export logistics readiness",
  "Long-term partnerships",
];

export default function About() {
  return (
    <>
      <SEO
        title="About EVA METACHEM"
        description="EVA METACHEM is a manufacturer and supplier of high-purity metal salts based in Ahmedabad, Gujarat, India, focused on reliable chemical solutions for global industries."
        path="/about"
      />

      <section className="about-hero">
        <div className="container">
          <span className="kicker-line">About EVA METACHEM</span>
          <h1>Reliable chemical solutions for global industries.</h1>
          <p>
            EVA METACHEM is a manufacturer and supplier of high-purity metal salts for industrial
            applications, based in {company.location}. Founded in {company.founded}, the company
            is built around a simple idea: industrial buyers need a partner whose product quality
            and supply they can plan around.
          </p>
        </div>
      </section>

      <section className="section container about-positioning">
        <div>
          <span className="kicker-line">Positioning</span>
          <h2>Manufacturer and supplier of high-purity metal salts.</h2>
          <p>
            Our product range &mdash; Copper Sulphate Pentahydrate, Cobalt Sulphate Heptahydrate and
            Zinc Oxide &mdash; is manufactured to defined purity grades and supplied with the
            documentation, packaging and communication that industrial buyers need to plan
            production around.
          </p>
        </div>
        <div className="about-strengths">
          <span className="eyebrow">Company Strengths</span>
          <ul>
            {strengths.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <span className="kicker-line">Why EVA METACHEM</span>
          <h2 className="about-why-title">What working with us looks like.</h2>
          <WhyGrid />
        </div>
      </section>

      <section className="section container about-contact">
        <div>
          <span className="kicker-line">Get in Touch</span>
          <h2>Based in Ahmedabad, working with industries worldwide.</h2>
          <p>
            Reach out with your product, grade and quantity requirement and our team will respond
            directly.
          </p>
        </div>
        <div className="about-contact__card">
          <div>
            <span>Location</span>
            <strong>{company.location}</strong>
          </div>
          <div>
            <span>Phone / WhatsApp</span>
            <strong>{company.phone}</strong>
          </div>
          <div>
            <span>Email</span>
            <strong>{company.email}</strong>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Request an Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
