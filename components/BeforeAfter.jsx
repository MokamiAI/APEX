"use client";

import { useState } from "react";
import { BEFORE_AFTER } from "@/lib/data";

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const [side, setSide] = useState("before");

  const item = BEFORE_AFTER[active];

  return (
    <div>
      {/* Situation selector */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-8">
        <div className="flex flex-wrap gap-2.5">
          {BEFORE_AFTER.map((b, i) => (
            <button
              key={b.situation}
              type="button"
              onClick={() => setActive(i)}
              className={`text-left rounded-xl border px-4 py-3 text-[14px] font-medium transition-colors max-w-sm ${
                active === i
                  ? "border-teal-600 bg-teal-50 text-teal-900"
                  : "border-slate-200 text-slate-600 hover:border-slate-300"
              }`}
            >
              {b.situation}
            </button>
          ))}
        </div>
        <div className="flex rounded-lg border border-slate-200 overflow-hidden w-fit">
          <button
            type="button"
            onClick={() => setSide("before")}
            className={`px-5 py-2.5 text-[14px] font-semibold transition-colors ${
              side === "before" ? "bg-navy-950 text-white" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Today
          </button>
          <button
            type="button"
            onClick={() => setSide("after")}
            className={`px-5 py-2.5 text-[14px] font-semibold transition-colors ${
              side === "after" ? "bg-teal-600 text-white" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            On Apex
          </button>
        </div>
      </div>

      {/* Content */}
      <div key={`${active}-${side}`} className="anim-settle">
        {side === "before" ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-9 max-w-3xl">
            <p className="num text-[12px] uppercase tracking-[0.16em] text-warn mb-3">Today</p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink leading-snug mb-4">
              {item.situation}
            </h3>
            <p className="text-[17px] leading-relaxed text-slate-600">{item.before}</p>
          </div>
        ) : (
          <div className="bg-navy-950 rounded-2xl p-7 sm:p-9 max-w-3xl border border-navy-700">
            <p className="num text-[12px] uppercase tracking-[0.16em] text-teal-400 mb-3">On Apex</p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white leading-snug mb-4">
              The same moment, handled by the system.
            </h3>
            <p className="text-[17px] leading-relaxed text-slate-300">{item.after}</p>
          </div>
        )}
      </div>
    </div>
  );
}
