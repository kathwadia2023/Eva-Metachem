import { useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import InquiryForm from "../components/InquiryForm";
import { company, getProductBySlug } from "../data/products";
import "./Contact.css";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get("product") ?? undefined;
  const preselected = productParam ? getProductBySlug(productParam) : undefined;

  return (
    <>
      <SEO
        title="Contact / Request an Inquiry"
        description="Request a quotation from EVA METACHEM for Copper Sulphate Pentahydrate, Cobalt Sulphate Heptahydrate or Zinc Oxide. Reach us by phone, WhatsApp or email."
        path="/contact"
      />

      <section className="contact-hero">
        <div className="container">
          <span className="kicker-line">Contact / Request an Inquiry</span>
          <h1>
            {preselected ? `Request a quotation for ${preselected.shortName}` : "Tell us what you need."}
          </h1>
          <p>
            Share your product, grade and quantity requirement below, and our team will respond
            directly to the email or phone number you provide.
          </p>
        </div>
      </section>

      <section className="section container contact-layout">
        <div className="contact-layout__form">
          <InquiryForm defaultProductSlug={preselected?.slug} />
        </div>

        <aside className="contact-layout__aside">
          <div className="contact-card">
            <span className="eyebrow">Direct Contact</span>
            <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            <a href={company.whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <p>{company.location}</p>
          </div>

          <div className="contact-card">
            <span className="eyebrow">What Happens Next</span>
            <ol>
              <li>We review your requirement.</li>
              <li>We confirm grade, quantity and packaging.</li>
              <li>We respond with next steps directly to you.</li>
            </ol>
          </div>
        </aside>
      </section>
    </>
  );
}
