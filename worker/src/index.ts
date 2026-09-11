/**
 * EVA METACHEM — Inquiry API (Cloudflare Worker)
 * ------------------------------------------------
 * Receives the inquiry form POST from the static frontend, validates and
 * sanitizes it, rate-limits by IP, and emails it to EVA METACHEM using the
 * Resend API (https://resend.com) — swap RESEND_API_KEY / the fetch call
 * below for any other transactional email provider if preferred.
 *
 * Deploy with: wrangler deploy   (see README in this folder)
 *
 * Required secrets (set with `wrangler secret put <NAME>`):
 *   RESEND_API_KEY   — API key from your email provider
 *   TO_EMAIL          — destination inbox, e.g. evametachem@gmail.com
 *   FROM_EMAIL        — verified sender address on your email provider
 *   ALLOWED_ORIGIN    — e.g. https://www.evametachem.com
 *
 * Optional KV binding "RATE_LIMIT" enables real IP rate limiting. Without
 * it, the worker still runs but skips the rate-limit check.
 */

export interface Env {
  RESEND_API_KEY: string;
  TO_EMAIL: string;
  FROM_EMAIL: string;
  ALLOWED_ORIGIN: string;
  RATE_LIMIT?: KVNamespace;
}

interface InquiryPayload {
  fullName?: string;
  companyName?: string;
  businessEmail?: string;
  phone?: string;
  country?: string;
  product?: string;
  grade?: string;
  quantity?: string;
  unit?: string;
  application?: string;
  message?: string;
  consent?: boolean;
  company_website?: string; // honeypot, should always be empty
}

const RATE_LIMIT_WINDOW_SECONDS = 60 * 10; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;

function corsHeaders(origin: string) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: unknown, maxLen = 500): string {
  if (typeof value !== "string") return "";
  return value.replace(/[<>]/g, "").trim().slice(0, maxLen);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = env.ALLOWED_ORIGIN || "*";

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    // Restrict to the configured origin (basic CORS enforcement).
    const requestOrigin = request.headers.get("Origin") || "";
    if (env.ALLOWED_ORIGIN && requestOrigin && requestOrigin !== env.ALLOWED_ORIGIN) {
      return new Response(JSON.stringify({ error: "Origin not allowed" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Rate limit by IP if a KV namespace is bound.
    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    if (env.RATE_LIMIT) {
      const key = `rl:${ip}`;
      const current = parseInt((await env.RATE_LIMIT.get(key)) || "0", 10);
      if (current >= RATE_LIMIT_MAX_REQUESTS) {
        return new Response(JSON.stringify({ error: "Too many requests, please try again later." }), {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
        });
      }
      await env.RATE_LIMIT.put(key, String(current + 1), { expirationTtl: RATE_LIMIT_WINDOW_SECONDS });
    }

    let body: InquiryPayload;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    // Honeypot — silently accept without emailing so bots see a "success".
    if (body.company_website) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    const fullName = sanitize(body.fullName, 120);
    const companyName = sanitize(body.companyName, 160);
    const businessEmail = sanitize(body.businessEmail, 160);
    const phone = sanitize(body.phone, 40);
    const country = sanitize(body.country, 80);
    const product = sanitize(body.product, 120);
    const grade = sanitize(body.grade, 60);
    const quantity = sanitize(body.quantity, 40);
    const unit = sanitize(body.unit, 40);
    const application = sanitize(body.application, 200);
    const message = sanitize(body.message, 2000);

    if (!fullName || !companyName || !businessEmail || !phone || !country || !product) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }
    if (!isValidEmail(businessEmail)) {
      return new Response(JSON.stringify({ error: "Invalid email address" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    const subject = `New Website Inquiry \u2014 ${product} \u2014 ${country}`;
    const html = `
      <h2>New Website Inquiry</h2>
      <table cellpadding="6" cellspacing="0" border="0">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(fullName)}</td></tr>
        <tr><td><strong>Company</strong></td><td>${escapeHtml(companyName)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(businessEmail)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
        <tr><td><strong>Country</strong></td><td>${escapeHtml(country)}</td></tr>
        <tr><td><strong>Product</strong></td><td>${escapeHtml(product)}</td></tr>
        <tr><td><strong>Grade</strong></td><td>${escapeHtml(grade)}</td></tr>
        <tr><td><strong>Quantity</strong></td><td>${escapeHtml(quantity)} ${escapeHtml(unit)}</td></tr>
        <tr><td><strong>Application</strong></td><td>${escapeHtml(application)}</td></tr>
        <tr><td valign="top"><strong>Message</strong></td><td>${escapeHtml(message).replace(/\n/g, "<br/>")}</td></tr>
      </table>
    `;

    try {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: env.FROM_EMAIL,
          to: env.TO_EMAIL,
          reply_to: businessEmail,
          subject,
          html,
        }),
      });

      if (!emailRes.ok) {
        const errText = await emailRes.text();
        console.error("Email provider error:", errText);
        return new Response(JSON.stringify({ error: "Failed to send inquiry" }), {
          status: 502,
          headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
        });
      }

      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    } catch (err) {
      console.error("Worker error:", err);
      return new Response(JSON.stringify({ error: "Unexpected server error" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }
  },
};
