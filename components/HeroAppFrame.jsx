"use client";

import { TOUR_MODULES } from "@/lib/data";
import { SAMPLE_DASHBOARD_KPIS, SAMPLE_PORTFOLIO_BARS } from "@/lib/sampleLedger";

// A compact frame of the REAL APEX Enterprise interface (the Unified Financial
// Operating System) for the hero: module sidebar + executive dashboard.
// Mirrors the live product — this is what a user sees after signing in.

const KPIS = SAMPLE_DASHBOARD_KPIS;
const BARS = SAMPLE_PORTFOLIO_BARS;
const SIDEBAR = TOUR_MODULES.slice(0, 12);

export default function HeroAppFrame() {
  return (
    <div className="ui ui-elevated overflow-hidden">
      <div className="ui-top-accent" />
      {/* Chrome */}
      <div className="ui-top">
        <div className="flex items-center gap-3 min-w-0">
          <div className="hidden sm:flex items-center gap-1.5 shrink-0" aria-hidden="true">
            <span className="w-2 h-2 rounded-full bg-slate-600" />
            <span className="w-2 h-2 rounded-full bg-slate-600" />
            <span className="w-2 h-2 rounded-full bg-slate-600" />
          </div>
          <div className="hidden sm:block w-px h-4 bg-navy-600/60 shrink-0" />
          <svg width="14" height="14" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
            <rect x="1" y="1" width="30" height="30" rx="7" stroke="#2f7a52" strokeWidth="3" />
            <path d="M10 22V10h5.2c4 0 6.8 2.4 6.8 6s-2.8 6-6.8 6H10Z" fill="#2f7a52" />
          </svg>
          <span className="ui-title truncate">APEX Enterprise — Unified Financial Operating System</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="ui-kicker hidden sm:block">Sarah Dlamini · admin</span>
          <span className="ui-dot status-active" />
        </div>
      </div>

      <div className="flex">
        {/* Sidebar — the 23-module platform */}
        <aside className="hidden md:block w-44 shrink-0 bg-navy-900/80 border-r border-navy-600/40 py-3">
          <p className="ui-kicker px-3 mb-2">Modules · 23</p>
          <nav className="ui-scroll space-y-0.5 max-h-[360px] overflow-y-auto pr-1" aria-label="APEX modules">
            {SIDEBAR.map((m, i) => (
              <div
                key={m.id}
                className={`w-full text-left px-3 py-1.5 text-[10.5px] flex items-center gap-2 transition-colors ${
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
              {KPIS.map(([label, value, color]) => {
                const accent = color.includes("teal") ? "bg-teal-400" : color.includes("gold") ? "bg-gold-500" : "bg-navy-600";
                return (
                  <div key={label} className="relative rounded-lg bg-gradient-to-b from-navy-800/70 to-navy-800/40 border border-navy-600/40 px-2.5 pt-2.5 pb-2 overflow-hidden">
                    <span className={`absolute top-0 left-0 right-0 h-[2px] ${accent} opacity-70`} aria-hidden="true" />
                    <p className="text-[9px] uppercase tracking-wide text-slate-400 leading-[1.35]">{label}</p>
                    <p className={`num text-[14px] mt-1.5 ${color}`}>{value}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 rounded-lg bg-gradient-to-b from-navy-800/70 to-navy-800/40 border border-navy-600/40 p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="ui-kicker flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 status-active" />
                  Performance forecast — last 6 months
                </p>
                <span className="num text-[8px] text-slate-500">Portfolio (M)</span>
              </div>
              <div className="relative h-12">
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-between" aria-hidden="true">
                  <div className="border-t border-navy-600/30" />
                  <div className="border-t border-navy-600/30" />
                  <div className="border-t border-navy-600/30" />
                </div>
                <div className="relative h-full flex items-end gap-2">
                  {BARS.map(([l, h]) => (
                    <div key={l} className="flex-1 h-full rounded-t bg-navy-700/60 overflow-hidden flex items-end justify-center">
                      <div className="w-full anim-bar bg-gradient-to-t from-teal-600 to-teal-400" style={{ height: `${h}%` }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 mt-1">
                {BARS.map(([l]) => (
                  <span key={l} className="flex-1 text-center num text-[7.5px] text-slate-500">{l}</span>
                ))}
              </div>
            </div>

            <div className="mt-3 flex gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold rounded bg-gold-500/15 text-gold-500 px-2 py-1">
                <span className="ui-chip bg-gold-500" />2 committee reviews pending
              </span>
              <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold rounded bg-teal-500/15 text-teal-400 px-2 py-1">
                <span className="ui-chip bg-teal-400" />WF-107 · 4 payouts notified
              </span>
              <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold rounded bg-navy-600/60 text-slate-400 px-2 py-1">
                <span className="ui-chip bg-slate-500" />PAR 1-30 · 14 accounts
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
