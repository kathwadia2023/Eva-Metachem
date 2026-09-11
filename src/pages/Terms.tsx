import SEO from "../components/SEO";
import { company } from "../data/products";
import "./LegalPage.css";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Use"
        description="Terms governing the use of the EVA METACHEM website."
        path="/terms"
      />
      <div className="container legal-page">
        <h1>Terms of Use</h1>
        <p className="legal-page__updated">Placeholder — to be reviewed by EVA METACHEM before publishing.</p>
        <div className="legal-page__body">
          <p>
            This page is a placeholder for the website&rsquo;s terms of use. It should be reviewed
            and finalized by EVA METACHEM before publishing.
          </p>
          <h2>Use of This Website</h2>
          <p>
            Content on this website, including product information, is provided for general
            informational purposes. Product specifications and availability are confirmed
            directly with our team at the time of inquiry.
          </p>
          <h2>Product Information</h2>
          <p>
            Grades, applications and packaging described on this website reflect information
            available at the time of publishing. Please confirm current specifications with our
            team before placing an order.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        </div>
      </div>
    </>
  );
}
