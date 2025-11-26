// src/components/ComparisonTable.jsx
import React from "react";

function Check({ on }) {
  return on ? <span className="text-[#1C8ECE] font-bold">✔</span> : <span className="text-slate-400">—</span>;
}

export default function ComparisonTable({ rows }) {
  return (
    <div className="mt-8">
      <div className="w-full overflow-x-auto">
        <table className="min-w-[720px] w-full border-collapse">
          <thead>
            <tr className="text-left">
              <th className="py-3 pr-6"></th>
              <th className="py-3 pr-6">Standard</th>
              <th className="py-3 pr-6">Premium</th>
              <th className="py-3 pr-6">Diamond</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx} className={`${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                <td className="py-3 pr-6 w-1/2 text-sm text-slate-700">{r.feature}</td>

                {/* simple booleans or strings handled */}
                <td className="py-3 pr-6 text-sm">
                  {typeof r.standard === "boolean" ? <Check on={r.standard} /> : <span className="text-slate-700">{r.standard}</span>}
                </td>

                <td className="py-3 pr-6 text-sm">
                  {typeof r.premium === "boolean" ? <Check on={r.premium} /> : <span className="text-slate-700">{r.premium}</span>}
                </td>

                <td className="py-3 pr-6 text-sm">
                  {typeof r.diamond === "boolean" ? <Check on={r.diamond} /> : <span className="text-slate-700">{r.diamond}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-slate-500">* Some features and limits vary by plan. Contact sales for custom enterprise pricing.</p>
    </div>
  );
}
