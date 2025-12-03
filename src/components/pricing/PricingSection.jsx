// src/components/PricingSection.jsx
import React from "react";

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
    cta: { label: "Sign Up Now", href: "/login" },
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
    cta: { label: "Sign Up Now", href: "/login" },
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
    cta: { label: "Sign Up Now", href: "/login" },
  },
];

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
      <div className="rounded-2xl shadow p-6 bg-white h-full">
        <div className="text-sm text-slate-500">No plan data</div>
      </div>
    );
  }

  const { name, price, subtitle, highlights = [], cta = {}, featured } = plan;

  // Background + text color based on featured flag:
  const wrapperBgClass = featured ? "bg-[#0b79d8]" : "bg-white";
  const textPrimary = featured ? "text-white" : "text-slate-900";
  const textMuted = featured ? "text-blue-100" : "text-slate-500";
  const highlightText = featured ? "text-blue-50" : "text-slate-700";
  const btnClass = featured
    ? "bg-white text-[#1C8ECE] hover:opacity-95"
    : "bg-[#1C8ECE]/95 text-white hover:bg-[#157fb6]";

  return (
    <div className="relative rounded-3xl h-full flex-1">

      <div
        className={`pt-8 pb-8 px-6 lg:px-8 rounded-3xl shadow-lg border border-transparent ${wrapperBgClass} h-full flex flex-col justify-between`}
        role="article"
      >
        <div>
          {/* title block */}
          <div className="flex items-start gap-4">
            <div>
              <div className={`text-sm font-medium ${textMuted}`}>{name}</div>
              <div className={`mt-2 text-2xl font-bold ${textPrimary}`}>{price}</div>
              {subtitle && <div className={`text-xs ${textMuted} mt-1`}>{subtitle}</div>}
            </div>
          </div>

          {/* highlights */}
          <ul className="mt-6 space-y-3">
            {highlights.map((h, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm">
                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${featured ? "bg-white text-[#1C8ECE]" : "bg-[#1C8ECE] text-white"} text-xs`}>
                  ✓
                </span>
                <span className={`${highlightText}`}>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <a
            href={cta.href || "#"}
            className={`inline-block w-full text-center px-4 py-2 rounded-full font-medium transition ${btnClass}`}
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
                  {typeof r.standard === "boolean" ? <IconCheck on={r.standard} /> : <span className="text-slate-700">{r.standard}</span>}
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
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div key={p.id} className={`flex h-full ${p.featured ? "" : ""}`}>
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
