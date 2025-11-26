// src/components/Pricing/PlanCard.jsx
import React from "react";

export default function PlanCard({ plan }) {
  if (!plan) {
    // render a fallback so the app doesn't crash
    console.warn("PlanCard: missing `plan` prop");
    return (
      <div className="rounded-2xl shadow-lg p-6 bg-white">
        <div className="text-sm text-slate-500">Missing plan</div>
      </div>
    );
  }

  const { name, price, subtitle, highlights = [], cta = {}, featured } = plan;

  return (
    <div className={`rounded-2xl shadow-lg overflow-hidden ${featured ? "transform scale-105 lg:scale-110 z-10" : ""}`}>
      <div className={`p-6 lg:p-8 bg-white`}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-slate-500">{name}</div>
            <div className="mt-2 text-xl lg:text-2xl font-bold text-slate-900">{price}</div>
            <div className="text-xs text-slate-500 mt-1">{subtitle}</div>
          </div>
        </div>

        <ul className="mt-4 space-y-3">
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
            className={`inline-block w-full text-center px-4 py-2 rounded-full text-white font-medium ${featured ? "bg-[#1C8ECE]" : "bg-[#1C8ECE]/90 hover:bg-[#157fb6]"}`}
          >
            {cta.label || "Choose"}
          </a>
        </div>
      </div>
    </div>
  );
}
