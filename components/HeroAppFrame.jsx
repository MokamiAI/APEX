"use client";

import { TOUR_MODULES } from "@/lib/data";
import { SAMPLE_DASHBOARD_KPIS, SAMPLE_PORTFOLIO_BARS } from "@/lib/sampleLedger";

// A compact frame of the REAL APEX Enterprise interface (the Cloud-Hosted CRM &
// Loan Management System) for the hero: module sidebar + executive dashboard.
// Mirrors the live product — this is what a user sees after signing in.

const KPIS = SAMPLE_DASHBOARD_KPIS;
const BARS = SAMPLE_PORTFOLIO_BARS;
const SIDEBAR = TOUR_MODULES.slice(0, 12);

export default function HeroAppFrame() {
  return (
    <div className="ui overflow-hidden">
      {/* Chrome */}
      <div className="ui-top">
        <div className="flex items-center gap-2.5">
          <svg width="14" height="14" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="30" height="30" rx="7" stroke="#2f7a52" strokeWidth="3" />
            <path d="M10 22V10h5.2c4 0 6.8 2.4 6.8 6s-2.8 6-6.8 6H10Z" fill="#2f7a52" />
          </svg>
          <span className="ui-title">APEX Enterprise — CRM &amp; Loan Management System</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="ui-kicker hidden sm:block">Sarah Dlamini · admin</span>
          <span className="ui-dot status-active" />
        </div>
      </div>

      <div className="flex">
        {/* Sidebar — the full platform */}
        <aside className="hidden md:block w-44 shrink-0 bg-navy-900/80 border-r border-navy-600/40 py-3">
          <p className="ui-kicker px-3 mb-2">Modules · 22</p>
          <nav className="space-y-0.5 max-h-[360px] overflow-y-auto pr-1" aria-label="APEX modules">
            {SIDEBAR.map((m, i) => (
              <div
                key={m.id}
                className={`w-full text-left px-3 py-1.5 text-[10.5px] flex items-center gap-2 ${
                  i === 0 ? "bg-teal-500/10 text-teal-400 border-l-2 border-teal-500" : "text-slate-400 border-l-2 border-transparent"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${i === 0 ? "bg-teal-500" : "bg-navy-600"}`} />
                {m.label}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main — executive dashboard */}
        <div className="flex-1 min-w-0">
          <div className="px-4 pt-3 pb-2 border-b border-navy-600/40 flex items-center justify-between gap-3">
            <p className="text-[12px] text-white font-semibold">Dashboard</p>
            <span className="num text-[10px] text-slate-500 hidden sm:block">Here is what&apos;s happening today in APEX</span>
          </div>
          <div className="px-4 py-3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {KPIS.map(([label, value, color]) => (
                <div key={label} className="rounded-lg bg-navy-800/60 border border-navy-600/40 px-2.5 py-2">
                  <p className="ui-kicker">{label}</p>
                  <p className={`num text-[14px] mt-1 ${color}`}>{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-lg bg-navy-800/60 border border-navy-600/40 p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="ui-kicker">Performance forecast — last 6 months</p>
                <span className="num text-[8px] text-slate-500">Portfolio (M)</span>
              </div>
              <div className="flex items-end gap-2 h-16">
                {BARS.map(([l, h]) => (
                  <div key={l} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full rounded-t bg-navy-700/60 overflow-hidden flex items-end justify-center" style={{ height: "100%" }}>
                      <div className="w-full anim-bar bg-teal-500" style={{ height: `${h}%` }} />
                    </div>
                    <span className="num text-[7.5px] text-slate-500">{l}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 flex gap-2 flex-wrap">
              <span className="text-[9px] font-semibold rounded bg-gold-500/15 text-gold-500 px-2 py-1">2 committee reviews pending</span>
              <span className="text-[9px] font-semibold rounded bg-teal-500/15 text-teal-400 px-2 py-1">WF-107 · nightly arrears sweep</span>
              <span className="text-[9px] font-semibold rounded bg-navy-600/60 text-slate-400 px-2 py-1">PAR 1-30 · 14 accounts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
