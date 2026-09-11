// import SEO from "../components/SEO";
// import { company } from "../data/products";
// import "./LegalPage.css";

// export default function PrivacyPolicy() {
//   return (
//     <>
//       <SEO
//         title="Privacy Policy"
//         description="How EVA METACHEM collects, uses and protects information submitted through this website."
//         path="/privacy-policy"
//       />
//       <div className="container legal-page">
//         <h1>Privacy Policy</h1>
//         <p className="legal-page__updated">Placeholder — to be reviewed by EVA METACHEM before publishing.</p>
//         <div className="legal-page__body">
//           <p>
//             This page outlines, in general terms, how EVA METACHEM handles information submitted
//             through this website. It is a placeholder structure and should be reviewed and
//             finalized by EVA METACHEM (with legal counsel where appropriate) before the site goes
//             live.
//           </p>
//           <h2>Information We Collect</h2>
//           <p>
//             When you submit the inquiry form, we collect the details you provide &mdash; such as
//             your name, company, email, phone number, country and product requirement &mdash; in
//             order to respond to your inquiry.
//           </p>
//           <h2>How We Use Information</h2>
//           <ul>
//             <li>To respond to product and quotation inquiries.</li>
//             <li>To maintain records of business communication.</li>
//             <li>To improve our products and services.</li>
//           </ul>
//           <h2>Contact</h2>
//           <p>
//             Questions about this policy can be sent to{" "}
//             <a href={`mailto:${company.email}`}>{company.email}</a>.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

import SEO from "../components/SEO";
import { company } from "../data/products";
import "./LegalPage.css";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how EVA METACHEM collects, uses and protects information submitted through its website and inquiry forms."
        path="/privacy-policy"
      />

      <div className="container legal-page">
        <h1>Privacy Policy</h1>

        <p className="legal-page__updated">
          Last Updated: September 11, 2026
        </p>

        <div className="legal-page__body">
          <p>
            EVA METACHEM ("EVA METACHEM", "we", "us", or "our") respects your
            privacy and is committed to protecting the information you provide
            when using our website.
          </p>

          <p>
            This Privacy Policy explains how we collect, use, store, and
            protect information submitted through our website, including
            information provided through contact and product inquiry forms.
          </p>

          <p>
            By using this website or submitting information through our inquiry
            forms, you acknowledge the practices described in this Privacy
            Policy.
          </p>

          <h2>1. About EVA METACHEM</h2>

          <p>
            EVA METACHEM is a chemical manufacturer and supplier based in
            Ahmedabad, Gujarat, India, providing high-purity metal salts and
            related chemical products for industrial applications.
          </p>

          <p>
            <strong>Contact Information</strong>
            <br />
            EVA METACHEM
            <br />
            Ahmedabad, Gujarat, India
            <br />
            Email:{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <br />
            Phone / WhatsApp: +91 94275 99521
          </p>

          <h2>2. Information We Collect</h2>

          <p>
            When you use our website or submit an inquiry, we may collect
            information such as:
          </p>

          <ul>
            <li>Full name</li>
            <li>Company or organization name</li>
            <li>Business email address</li>
            <li>Phone number or WhatsApp number</li>
            <li>Country or location</li>
            <li>Product of interest</li>
            <li>Required product grade</li>
            <li>Required quantity and unit</li>
            <li>Intended application or purpose</li>
            <li>Message or business requirements</li>
            <li>
              Other information you voluntarily provide through our forms
            </li>
          </ul>

          <p>
            We may also automatically receive limited technical information
            when you visit our website, such as browser type, device type,
            operating system, pages visited, referring website, IP address,
            and general website usage information.
          </p>

          <h2>3. How We Use Your Information</h2>

          <p>We may use information you provide to:</p>

          <ul>
            <li>Respond to product and quotation inquiries.</li>
            <li>Provide product or technical information.</li>
            <li>Understand your business and product requirements.</li>
            <li>
              Respond to requests relating to grades, quantities, packaging,
              applications, or availability.
            </li>
            <li>Communicate regarding products and services.</li>
            <li>Develop and maintain potential business relationships.</li>
            <li>Improve our website and user experience.</li>
            <li>Prevent spam, fraud, abuse, or unauthorized activity.</li>
            <li>Maintain website and system security.</li>
            <li>Comply with applicable legal or regulatory requirements.</li>
          </ul>

          <h2>4. Inquiry and Contact Forms</h2>

          <p>
            When you submit an inquiry through our website, the information
            may be transmitted through secure third-party infrastructure,
            serverless services, or email delivery services before being
            delivered to EVA METACHEM.
          </p>

          <p>
            The information submitted through the form may be accessed by
            authorized representatives of EVA METACHEM for the purpose of
            responding to your inquiry and evaluating potential business
            requirements.
          </p>

          <p>
            Please do not submit confidential, highly sensitive, proprietary,
            or legally privileged information through a general website
            inquiry form unless specifically requested by EVA METACHEM.
          </p>

          <h2>5. Email Communications</h2>

          <p>
            If you submit an inquiry, EVA METACHEM may contact you using the
            contact information you provide.
          </p>

          <p>Such communications may include:</p>

          <ul>
            <li>Product information</li>
            <li>Quotation-related communication</li>
            <li>Product availability</li>
            <li>Packaging information</li>
            <li>Delivery or logistics discussions</li>
            <li>Clarification of technical or commercial requirements</li>
            <li>Follow-up regarding your inquiry</li>
          </ul>

          <h2>6. Cookies and Similar Technologies</h2>

          <p>
            Our website may use cookies or similar technologies where
            necessary to enable website functionality, improve performance,
            understand website usage, maintain security, and improve the user
            experience.
          </p>

          <p>
            If analytics, advertising, or other third-party technologies are
            introduced in the future, this Privacy Policy may be updated
            accordingly.
          </p>

          <p>
            You may control cookies through your browser settings. Disabling
            certain cookies may affect some website functionality.
          </p>

          <h2>7. Third-Party Services</h2>

          <p>
            Our website may use third-party technology providers for services
            such as:
          </p>

          <ul>
            <li>Website hosting</li>
            <li>DNS and website security</li>
            <li>Form processing</li>
            <li>Email delivery</li>
            <li>Website analytics</li>
            <li>Performance monitoring</li>
          </ul>

          <p>
            These providers may process information as necessary to provide
            their services. We take reasonable steps to use reputable service
            providers and protect information processed through these
            services.
          </p>

          <h2>8. Data Security</h2>

          <p>
            EVA METACHEM takes reasonable technical and organizational
            measures to protect information submitted through the website
            against unauthorized access, misuse, alteration, disclosure, or
            loss.
          </p>

          <p>
            However, no internet-based transmission or storage system can be
            guaranteed to be completely secure. Information transmitted over
            the internet therefore carries inherent security risks.
          </p>

          <h2>9. Data Retention</h2>

          <p>
            We retain personal information only for as long as reasonably
            necessary for the purposes for which it was collected, including:
          </p>

          <ul>
            <li>Responding to inquiries</li>
            <li>Maintaining business communication records</li>
            <li>Managing prospective business relationships</li>
            <li>
              Complying with applicable legal, regulatory, accounting, or
              contractual obligations
            </li>
            <li>Resolving disputes</li>
            <li>Preventing fraud or misuse</li>
          </ul>

          <p>
            The appropriate retention period may vary depending on the nature
            of the information and the relevant business relationship.
          </p>

          <h2>10. Sharing of Information</h2>

          <p>
            EVA METACHEM does not sell or rent your personal information.
          </p>

          <p>Information may be shared with:</p>

          <ul>
            <li>Authorized employees or representatives of EVA METACHEM</li>
            <li>
              Service providers supporting website, hosting, security, email,
              or technical operations
            </li>
            <li>Professional advisors where reasonably necessary</li>
            <li>
              Government authorities or regulatory bodies where required by
              applicable law
            </li>
            <li>
              Other parties where disclosure is necessary to protect our
              legal rights or prevent fraud, misuse, or security threats
            </li>
          </ul>

          <p>
            We aim to limit disclosure to information reasonably necessary for
            the relevant purpose.
          </p>

          <h2>11. International Data Transfers</h2>

          <p>
            Some technology or service providers used by the website may
            process information from locations outside India.
          </p>

          <p>
            Where applicable, EVA METACHEM will take reasonable steps to
            ensure that such processing is carried out in accordance with
            applicable data protection requirements.
          </p>

          <h2>12. Your Rights and Requests</h2>

          <p>
            Depending on applicable law, you may have rights relating to your
            personal information, including the ability to:
          </p>

          <ul>
            <li>
              Request information about personal data we hold about you
            </li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion where applicable</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Raise concerns regarding the handling of your information</li>
          </ul>

          <p>
            To make a privacy-related request, contact us at{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>

          <p>
            We may need to verify your request before taking action where
            permitted or required by applicable law.
          </p>

          <h2>13. Children's Privacy</h2>

          <p>
            This website is primarily intended for businesses, professionals,
            and industrial users. We do not knowingly seek to collect personal
            information from children.
          </p>

          <p>
            If you believe that a child has submitted personal information
            through our website, please contact us so that we can take
            appropriate action.
          </p>

          <h2>14. External Links</h2>

          <p>
            Our website may contain links to third-party websites. EVA
            METACHEM is not responsible for the privacy practices, content,
            security, or policies of third-party websites.
          </p>

          <p>
            We recommend reviewing the privacy policy of any external website
            you visit.
          </p>

          <h2>15. Changes to This Privacy Policy</h2>

          <p>
            EVA METACHEM may update this Privacy Policy from time to time to
            reflect changes in our website, services, technology, business
            practices, or applicable laws and regulations.
          </p>

          <p>
            Any updated version will be published on this page with a revised
            "Last Updated" date.
          </p>

          <h2>16. Contact Us</h2>

          <p>
            For questions, concerns, or requests relating to this Privacy
            Policy, contact:
          </p>

          <p>
            <strong>EVA METACHEM</strong>
            <br />
            Ahmedabad, Gujarat, India
            <br />
            Email:{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <br />
            Phone / WhatsApp: +91 94275 99521
          </p>
        </div>
      </div>
    </>
  );
}