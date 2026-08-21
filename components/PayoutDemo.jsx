"use client";

import { useEffect, useState } from "react";
import { fmtR as fmt } from "@/lib/format";
import { SAMPLE_DEAL as DEAL, SAMPLE_INVESTORS, investorModelLabel } from "@/lib/sampleLedger";

// The "signature product moment": a deal settling and the payout schedule
// generating automatically. Cycles: Active -> Settling -> Payout schedule -> reset.
// Mirrors the real APEX Enterprise product UI (Unified Financial Operating System).
const PHASES = ["active", "settling", "settled"];

const INVESTORS = SAMPLE_INVESTORS.map((inv) => ({
  name: inv.name,
  model: investorModelLabel(inv),
  contribution: inv.contribution,
  payout: inv.payout,
}));

export default function PayoutDemo() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Respect prefers-reduced-motion: land on the settled state (the most
    // informative frame — the payout schedule) instead of auto-cycling forever.
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setPhase(2);
      return;
    }
    const t = setInterval(() => {
      setPhase((p) => (p + 1) % PHASES.length);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  const current = PHASES[phase];

  return (
    <div className="ui relative">
      {/* Window chrome — matches APEX Enterprise */}
      <div className="ui-top">
        <div className="flex items-center gap-2.5">
          <svg width="14" height="14" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="30" height="30" rx="7" stroke="#2f7a52" strokeWidth="3" />
            <path d="M10 22V10h5.2c4 0 6.8 2.4 6.8 6s-2.8 6-6.8 6H10Z" fill="#2f7a52" />
          </svg>
          <span className="ui-title">APEX Enterprise — Unified Financial Operating System</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="ui-kicker hidden sm:block">Settlement engine</span>
          <span className={`ui-dot ${current === "settled" ? "status-settled" : current === "settling" ? "status-settling" : "status-active"}`} />
        </div>
      </div>

      {/* Deal header */}
      <div className="px-4 pt-4 pb-3 border-b border-navy-600/40">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="num text-[10px] uppercase tracking-[0.16em] text-slate-400">{DEAL.ref}</p>
            <p className="text-[13px] font-semibold text-white mt-0.5">{DEAL.client}</p>
          </div>
          <div className="text-right">
            <p className="ui-kicker">Deal value</p>
            <p className="num text-[15px] text-white mt-0.5">{fmt(DEAL.amount)}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-3">
          {[
            ["Term", DEAL.term],
            ["Product", "Day-based flat rate"],
            ["Status", current === "settled" ? "Settled" : current === "settling" ? "Settling…" : "Active"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg bg-navy-800/60 border border-navy-600/40 px-2.5 py-1.5">
              <p className="ui-kicker">{k}</p>
              <p className={`num text-[11.5px] mt-0.5 ${k === "Status" && current === "settled" ? "text-teal-400" : "text-slate-200"}`}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Body: settling indicator or payout schedule */}
      {current !== "settled" ? (
        <div className="px-4 py-6 flex flex-col items-center justify-center min-h-[190px]">
          {current === "settling" ? (
            <div className="text-center">
              <div className="relative w-14 h-14 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full border-2 border-navy-600" />
                <div className="absolute inset-0 rounded-full border-2 border-teal-500 border-t-transparent animate-spin" style={{ animationDuration: "1.1s" }} />
              </div>
              <p className="text-[13px] font-medium text-white">Calculating investor splits…</p>
              <p className="num text-[11px] text-slate-400 mt-1">Applying 3 profit models · 14 funds · penalty/reward rates</p>
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-[13px] font-medium text-slate-300">
                Deal is <span className="text-teal-400 font-semibold">Active</span> — repayment schedule running
              </p>
              <div className="ui-bar mt-4 max-w-[260px] mx-auto">
                <span className="bg-teal-500" style={{ width: "68%" }} />
              </div>
              <p className="num text-[11px] text-slate-400 mt-2">68% of term elapsed · next review in 14 days</p>
            </div>
          )}
        </div>
      ) : (
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-2 anim-settle">
            <p className="ui-title">Automatic payout schedule — investor ledger</p>
            <span className="num text-[10px] text-teal-400 bg-teal-500/10 border border-teal-500/30 rounded px-2 py-0.5">
              Generated 2.4s after settlement
            </span>
          </div>
          <table className="ui-table w-full anim-settle">
            <thead>
              <tr>
                <th>Investor</th>
                <th>Model</th>
                <th className="text-right">Contribution</th>
                <th className="text-right">Payout</th>
              </tr>
            </thead>
            <tbody>
              {INVESTORS.map((inv, i) => (
                <tr key={inv.name} style={{ animationDelay: `${i * 120}ms` }} className="anim-settle">
                  <td className="text-slate-200 font-medium">{inv.name}</td>
                  <td className="text-slate-400">{inv.model}</td>
                  <td className="text-right num">{fmt(inv.contribution)}</td>
                  <td className="text-right num text-teal-400">{fmt(inv.payout)}</td>
                </tr>
              ))}
              <tr className="anim-settle" style={{ animationDelay: "480ms" }}>
                <td className="text-slate-200 font-semibold">Operator retained</td>
                <td className="text-slate-400">Your margin</td>
                <td className="text-right num">—</td>
                <td className="text-right num text-gold-500 font-semibold">{fmt(DEAL.retained)}</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-2.5 flex items-center gap-2 anim-settle" style={{ animationDelay: "600ms" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 12.5 9.5 18 20 6.5" stroke="#2f7a52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-[11px] text-slate-300">
              WF-107: payout notifications sent to 4 fund partners via WhatsApp
            </p>
          </div>
        </div>
      )}

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 h-8 bg-navy-800/60 border-t border-navy-600/40">
        <p className="ui-kicker">Production data · masked</p>
        <p className="num text-[10px] text-slate-500">{DEAL.ref} · APEX Enterprise v1.4</p>
      </div>
    </div>
  );
}
