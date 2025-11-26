// src/components/PricingSection.jsx
import React from "react";

/**
 * Single-file PricingSection (complete)
 * - Contains data, PlanCard, ComparisonTable, and exported PricingSection component
 * - Tailwind classes used. Drop into src/components and import into your page.
 */

/* ---------------------- Data: Plans & Full Feature Matrix ---------------------- */

const plans = [
  {
    id: "standard",
    name: "Standard Plan",
    price: "₹999 / user / month",
    subtitle: "Core CRM features for small teams",
    highlights: [
      "Lead, contact & deal management",
      "Task & follow-up system",
      "Email & SMS integration (basic)",
      "Pipeline automation",
      "Standard reports & dashboards",
    ],
    cta: { label: "Sign Up Now", href: "/signup?plan=standard" },
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "₹1,999 / user / month",
    subtitle: "Advanced workflows, analytics & integrations",
    highlights: [
      "Everything in Standard",
      "100+ lead integrations",
      "Lead scoring & advanced analytics",
      "Call tracking & call recording",
      "Document generation (proposals & invoices)",
    ],
    cta: { label: "Start Free Trial", href: "/signup?plan=premium" },
    featured: true,
  },
  {
    id: "diamond",
    name: "Diamond Plan",
    price: "₹3,999 / user / month",
    subtitle: "Enterprise-grade: integrations, automation & AI",
    highlights: [
      "Everything in Premium",
      "Role-based access & advanced permissions",
      "3rd-party integrations (full)",
      "Billing system (integrated)",
      "Team Collaboration System",
    ],
    cta: { label: "Contact Sales", href: "/contact-sales" },
  },
];

/**
 * featureRows: full ordered list of features as shown in your reference.
 * Each row uses:
 *  - boolean true/false if presence,
 *  - or string value (like records limits).
 */
const featureRows = [
  { feature: "Lead, contact and deal management", standard: true, premium: true, diamond: true },
  { feature: "Task & follow-up system", standard: true, premium: true, diamond: true },
  { feature: "Email & SMS integration (basic)", standard: true, premium: true, diamond: true },
  { feature: "Pipeline automation", standard: true, premium: true, diamond: true },
  { feature: "Standard reports & dashboards", standard: true, premium: true, diamond: true },
  { feature: "Mobile app access", standard: true, premium: true, diamond: true },
  { feature: "Lead capture (forms, API, landing pages)", standard: true, premium: true, diamond: true },
  { feature: "Records limit", standard: "1,00,000", premium: "5,00,000", diamond: "Unlimited" },

  // Premium-specific / advanced
  { feature: "100+ lead integrations", standard: false, premium: true, diamond: true },
  { feature: "Lead scoring", standard: false, premium: true, diamond: true },
  { feature: "Advanced analytics", standard: false, premium: true, diamond: true },
  { feature: "Call tracking & call recording", standard: false, premium: true, diamond: true },
  { feature: "Document generation (proposals & invoices)", standard: false, premium: true, diamond: true },
  { feature: "Multi-team pipelines", standard: false, premium: true, diamond: true },
  { feature: "Auto-assign rules", standard: false, premium: true, diamond: true },
  { feature: "Task Management System", standard: false, premium: true, diamond: true },
  { feature: "Priority support", standard: false, premium: true, diamond: true },

  // Diamond-specific / enterprise
  { feature: "Role-based access & advanced permissions", standard: false, premium: false, diamond: true },
  { feature: "3rd-party integrations (full)", standard: false, premium: false, diamond: true },
  { feature: "Billing system (integrated)", standard: false, premium: false, diamond: true },
  { feature: "Team Collaboration System", standard: false, premium: false, diamond: true },
  { feature: "WhatsApp API integration", standard: false, premium: false, diamond: true },
  { feature: "AI Powered Voice Bot", standard: false, premium: false, diamond: true },
  { feature: "Campaign Manager", standard: false, premium: false, diamond: true },
];

/* ---------------------- Subcomponents ---------------------- */

function IconCheck({ on }) {
  return on ? (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#1C8ECE] text-white text-xs">✓</span>
  ) : (
    <span className="text-slate-400">—</span>
  );
}

function PlanCard({ plan }) {
  if (!plan) {
    return (
      <div className="rounded-2xl shadow p-6 bg-white">
        <div className="text-sm text-slate-500">No plan data</div>
      </div>
    );
  }

  const { name, price, subtitle, highlights = [], cta = {}, featured } = plan;

  return (
    <div className={`rounded-2xl overflow-hidden ${featured ? "scale-[1.03] lg:scale-105 z-10" : ""}`}>
      <div className={`p-6 lg:p-8 bg-white shadow-lg relative`}>
        {/* optional badge for featured center card */}
        {/* {featured && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="bg-[#1C8ECE] text-white px-4 py-1 rounded-full text-sm font-semibold shadow">Recommended</div>
          </div>
        )} */}

        <div className="pt-4">
          <div className="text-sm font-medium text-slate-500">{name}</div>
          <div className="mt-3 text-2xl font-bold text-slate-900">{price}</div>
          <div className="text-xs text-slate-500 mt-1">{subtitle}</div>
        </div>

        <ul className="mt-5 space-y-3">
          {highlights.map((h, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#1C8ECE] text-white text-xs">✓</span>
              <span className="text-slate-700">{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <a
            href={cta.href || "#"}
            className={`inline-block w-full text-center px-4 py-2 rounded-full text-white font-medium ${featured ? "bg-[#1C8ECE]" : "bg-[#1C8ECE]/95 hover:bg-[#157fb6]"}`}
          >
            {cta.label || "Choose"}
          </a>
        </div>
      </div>
    </div>
  );
}

/* Responsive comparison table */
function ComparisonTable({ rows }) {
  if (!rows || !Array.isArray(rows)) {
    return <div className="p-4 text-sm text-slate-500">Comparison data not available.</div>;
  }

  return (
    <div className="mt-10">
      <div className="w-full overflow-x-auto">
        <table className="min-w-[780px] w-full border-collapse">
          <thead>
            <tr className="text-left">
              <th className="py-3 px-4 w-1/3 text-sm font-medium text-slate-700">Feature</th>
              <th className="py-3 px-4 text-sm font-medium">Standard</th>
              <th className="py-3 px-4 text-sm font-medium">Premium</th>
              <th className="py-3 px-4 text-sm font-medium">Diamond</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="py-3 px-4 align-top text-sm text-slate-700">{r.feature}</td>
                <td className="py-3 px-4 align-top text-sm">
                  {typeof r.standard === "boolean" ? <IconCheck on={r.standard} onProp={r.standard} /> : <span className="text-slate-700">{r.standard}</span>}
                </td>
                <td className="py-3 px-4 align-top text-sm">
                  {typeof r.premium === "boolean" ? <IconCheck on={r.premium} /> : <span className="text-slate-700">{r.premium}</span>}
                </td>
                <td className="py-3 px-4 align-top text-sm">
                  {typeof r.diamond === "boolean" ? <IconCheck on={r.diamond} /> : <span className="text-slate-700">{r.diamond}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-slate-500">* Limits and features may vary. Contact sales for enterprise customizations.</p>
    </div>
  );
}

/* ---------------------- Main: PricingSection ---------------------- */

export default function PricingSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Get Your Perfect Growth Plan</h2>
          <p className="mt-3 text-slate-600">Choose a plan that fits your team — upgrade anytime.</p>
        </div>

        {/* Plan cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end">
          {plans.map((p) => (
            <div key={p.id} className="flex">
              <PlanCard plan={p} />
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <ComparisonTable rows={featureRows} />
      </div>
    </section>
  );
}
