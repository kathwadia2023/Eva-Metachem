import { FormEvent, useMemo, useState } from "react";
import { products } from "../data/products";
import "./InquiryForm.css";

type Status = "idle" | "submitting" | "success" | "error";

interface InquiryFormProps {
  defaultProductSlug?: string;
}

const units = ["Kilograms (kg)", "Metric Tons (MT)", "Bags", "FIBC Jumbo Bags"];

const countries = [
  "India", "United Arab Emirates", "Saudi Arabia", "United States", "United Kingdom",
  "Germany", "Bangladesh", "Vietnam", "Indonesia", "Nigeria", "Egypt", "Brazil",
  "South Africa", "Turkey", "Kenya", "Sri Lanka", "Nepal",
];

export default function InquiryForm({ defaultProductSlug }: InquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [productSlug, setProductSlug] = useState(defaultProductSlug ?? "");

  const selectedProduct = useMemo(
    () => products.find((p) => p.slug === productSlug),
    [productSlug]
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field; bots often do.
    if (String(data.get("company_website") || "").length > 0) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      fullName: data.get("fullName"),
      companyName: data.get("companyName"),
      businessEmail: data.get("businessEmail"),
      phone: data.get("phone"),
      country: data.get("country"),
      product: data.get("product"),
      grade: data.get("grade"),
      quantity: data.get("quantity"),
      unit: data.get("unit"),
      application: data.get("application"),
      message: data.get("message"),
      consent: data.get("consent") === "on",
      submittedAt: new Date().toISOString(),
      source: window.location.href,
    };

    const endpoint = import.meta.env.VITE_INQUIRY_API_URL as string | undefined;

    if (!endpoint) {
      // No backend configured yet — fail clearly instead of pretending to succeed.
      console.warn("VITE_INQUIRY_API_URL is not set. See .env.example.");
      setStatus("error");
      setErrorMsg(
        "The inquiry service isn't configured yet. Please email us directly at evametachem@gmail.com."
      );
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

      setStatus("success");
      form.reset();
      setProductSlug("");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Unable to submit — please try again, or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="inquiry-result" role="status">
        <span className="inquiry-result__mark" aria-hidden="true">
          ✓
        </span>
        <h3>Inquiry Sent Successfully</h3>
        <p>
          Thank you for reaching out. Our team will review your requirement and respond to the
          email or phone number you provided.
        </p>
        <button type="button" className="btn btn-outline-dark" onClick={() => setStatus("idle")}>
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot field — hidden from sighted users and screen readers, left open for bots. */}
      <div className="inquiry-form__honeypot" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="inquiry-form__grid">
        <div className="field">
          <label htmlFor="fullName">Full Name *</label>
          <input id="fullName" name="fullName" type="text" required autoComplete="name" />
        </div>

        <div className="field">
          <label htmlFor="companyName">Company Name *</label>
          <input id="companyName" name="companyName" type="text" required autoComplete="organization" />
        </div>

        <div className="field">
          <label htmlFor="businessEmail">Business Email *</label>
          <input id="businessEmail" name="businessEmail" type="email" required autoComplete="email" />
        </div>

        <div className="field">
          <label htmlFor="phone">Phone / WhatsApp *</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>

        <div className="field">
          <label htmlFor="country">Country *</label>
          <input id="country" name="country" type="text" list="country-list" required autoComplete="country-name" />
          <datalist id="country-list">
            {countries.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>

        <div className="field">
          <label htmlFor="product">Product Interested In *</label>
          <select
            id="product"
            name="product"
            required
            value={productSlug}
            onChange={(e) => setProductSlug(e.target.value)}
          >
            <option value="" disabled>
              Select a product
            </option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
            <option value="other">Other / Not Listed</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="grade">Grade Required</label>
          <select id="grade" name="grade" disabled={!selectedProduct}>
            <option value="">
              {selectedProduct ? "Select a grade" : "Select a product first"}
            </option>
            {selectedProduct?.grades.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
            <option value="not-sure">Not sure / Recommend a grade</option>
          </select>
        </div>

        <div className="field field--split">
          <div>
            <label htmlFor="quantity">Quantity Required</label>
            <input id="quantity" name="quantity" type="text" inputMode="decimal" placeholder="e.g. 5" />
          </div>
          <div>
            <label htmlFor="unit">Unit</label>
            <select id="unit" name="unit" defaultValue="">
              <option value="" disabled>
                Select unit
              </option>
              {units.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="field field--full">
          <label htmlFor="application">Application / Intended Use</label>
          <input
            id="application"
            name="application"
            type="text"
            placeholder="e.g. Electroplating, Agriculture, Ceramics"
          />
        </div>

        <div className="field field--full">
          <label htmlFor="message">Message / Requirement</label>
          <textarea id="message" name="message" rows={4} placeholder="Tell us more about your requirement" />
        </div>

        <div className="field field--full field--checkbox">
          <input id="consent" name="consent" type="checkbox" required />
          <label htmlFor="consent">I agree to be contacted regarding this inquiry.</label>
        </div>
      </div>

      {status === "error" && (
        <p className="inquiry-form__error" role="alert">
          {errorMsg || "Unable to Submit — Please Try Again"}
        </p>
      )}

      <button type="submit" className="btn btn-primary inquiry-form__submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
