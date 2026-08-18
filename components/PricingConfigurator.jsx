"use client";

import { useState } from "react";
import Link from "next/link";
import { DEAL_BANDS, SEAT_BANDS, FUND_BANDS, recommendTier } from "@/lib/pricing";
import { TIERS } from "@/lib/data";

const FIELDS = [
  { key: "deals", label: "Your deals per month", options: DEAL_BANDS },
  { key: "seats", label: "Your seats", options: SEAT_BANDS },
  { key: "funds", label: "Your fund partners", options: FUND_BANDS },
];

export default function PricingConfigurator() {
  const [selection, setSelection] = useState({ deals: null, seats: null, funds: null });
  const allSelected = Object.values(selection).every(Boolean);
  const tierName = allSelected ? recommendTier(selection) : null;
  const tier = tierName ? TIERS.find((t) => t.name === tierName) : null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 lg:p-10">
      <p className="eyebrow mb-6">The 3-click guide</p>
      <div className="grid md:grid-cols-3 gap-5">
        {FIELDS.map((field) => (
          <div key={field.key}>
            <p className="field-label">{field.label}</p>
            <div className="flex flex-col gap-2">
              {field.options.map((o) => (
                <label
                  key={o}
                  className={`flex items-center gap-3 bg-white border rounded-lg px-3.5 py-2.5 cursor-pointer transition-colors ${
                    selection[field.key] === o ? "border-teal-500 ring-1 ring-teal-500/30" : "border-slate-200 hover:border-teal-500"
                  }`}
                >
                  <input
                    type="radio"
                    name={field.key}
                    className="accent-teal-600"
                    checked={selection[field.key] === o}
                    onChange={() => setSelection((s) => ({ ...s, [field.key]: o }))}
                  />
                  <span className="text-[14px] font-medium text-slate-700 num">{o}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-7 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-[13px] text-slate-500">
            {allSelected ? "Your book lands in" : "Answer all three to see your range"}
          </p>
          <p className="font-display text-2xl font-semibold text-ink">
            {tier ? `${tier.name} — ${tier.tag}` : "—"}
          </p>
        </div>
        <Link href="/calculator" className="btn btn-primary">See your splits to get a quote</Link>
      </div>
    </div>
  );
}
