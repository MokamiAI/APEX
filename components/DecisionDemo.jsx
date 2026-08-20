"use client";

import { useEffect, useState } from "react";
import { fmtR as fmt } from "@/lib/format";
import { SAMPLE_DEAL as DEAL } from "@/lib/sampleLedger";
import { RISK_MATRIX } from "@/lib/data";

// The "signature product moment": an application arriving and routing itself to a
// decision. Cycles: Received -> Scoring -> Decided -> reset.
// Mirrors the real APEX Enterprise product UI (Cloud-Hosted CRM & Loan Management System).
const PHASES = ["received", "scoring", "decided"];

const COMMITTEE_THRESHOLD = 1000000;

// Illustrative per-factor sub-scores that weight out to DEAL.riskScore (82).
const RISK_BREAKDOWN = [
  { factor: "Credit Score", weight: 40, score: 88 },
  { factor: "Financials", weight: 30, score: 80 },
  { factor: "Industry Risk", weight: 20, score: 75 },
  { factor: "Collateral", weight: 10, score: 78 },
];

export default function DecisionDemo() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Respect prefers-reduced-motion: land on the decided state (the most
    // informative frame — the routed decision) instead of auto-cycling forever.
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
  const autoApproved = DEAL.amount < COMMITTEE_THRESHOLD;

  return (
    <div className="ui relative">
      {/* Window chrome — matches APEX Enterprise */}
      <div className="ui-top">
        <div className="flex items-center gap-2.5">
          <svg width="14" height="14" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="30" height="30" rx="7" stroke="#2f7a52" strokeWidth="3" />
            <path d="M10 22V10h5.2c4 0 6.8 2.4 6.8 6s-2.8 6-6.8 6H10Z" fill="#2f7a52" />
          </svg>
          <span className="ui-title">APEX Enterprise — CRM &amp; Loan Management System</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="ui-kicker hidden sm:block">Decision engine</span>
          <span className={`ui-dot ${current === "decided" ? "status-settled" : current === "scoring" ? "status-settling" : "status-active"}`} />
        </div>
      </div>

      {/* Application header */}
      <div className="px-4 pt-4 pb-3 border-b border-navy-600/40">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="num text-[10px] uppercase tracking-[0.16em] text-slate-400">{DEAL.ref}</p>
            <p className="text-[13px] font-semibold text-white mt-0.5">{DEAL.client}</p>
          </div>
          <div className="text-right">
            <p className="ui-kicker">Application value</p>
            <p className="num text-[15px] text-white mt-0.5">{fmt(DEAL.amount)}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-3">
          {[
            ["Term", DEAL.term],
            ["Product", "Day-based flat rate"],
            ["Status", current === "decided" ? (autoApproved ? "Approved" : "Committee") : current === "scoring" ? "Scoring…" : "Received"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg bg-navy-800/60 border border-navy-600/40 px-2.5 py-1.5">
              <p className="ui-kicker">{k}</p>
              <p className={`num text-[11.5px] mt-0.5 ${k === "Status" && current === "decided" ? "text-teal-400" : "text-slate-200"}`}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Body: scoring indicator or decision breakdown */}
      {current !== "decided" ? (
        <div className="px-4 py-6 flex flex-col items-center justify-center min-h-[190px]">
          {current === "scoring" ? (
            <div className="text-center">
              <div className="relative w-14 h-14 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full border-2 border-navy-600" />
                <div className="absolute inset-0 rounded-full border-2 border-teal-500 border-t-transparent animate-spin" style={{ animationDuration: "1.1s" }} />
              </div>
              <p className="text-[13px] font-medium text-white">Scoring application…</p>
              <p className="num text-[11px] text-slate-400 mt-1">Applying risk matrix · 4 factors · NCA pre-screen</p>
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-[13px] font-medium text-slate-300">
                Application <span className="text-teal-400 font-semibold">received</span> — queued for automatic routing
              </p>
              <div className="ui-bar mt-4 max-w-[260px] mx-auto">
                <span className="bg-teal-500" style={{ width: "28%" }} />
              </div>
              <p className="num text-[11px] text-slate-400 mt-2">KYC verified · NCA pre-screen passed · risk assessment next</p>
            </div>
          )}
        </div>
      ) : (
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-2 anim-settle">
            <p className="ui-title">Automatic risk decision — routed itself</p>
            <span className="num text-[10px] text-teal-400 bg-teal-500/10 border border-teal-500/30 rounded px-2 py-0.5">
              Decided 1.8s after submission
            </span>
          </div>
          <table className="ui-table w-full anim-settle">
            <thead>
              <tr>
                <th>Risk factor</th>
                <th className="text-right">Weight</th>
                <th className="text-right">Score</th>
                <th className="text-right">Contribution</th>
              </tr>
            </thead>
            <tbody>
              {RISK_BREAKDOWN.map((r, i) => (
                <tr key={r.factor} style={{ animationDelay: `${i * 120}ms` }} className="anim-settle">
                  <td className="text-slate-200 font-medium">{r.factor}</td>
                  <td className="text-right num">{r.weight}%</td>
                  <td className="text-right num text-teal-400">{r.score}/100</td>
                  <td className="text-right num">{((r.weight * r.score) / 100).toFixed(1)}</td>
                </tr>
              ))}
              <tr className="anim-settle" style={{ animationDelay: "480ms" }}>
                <td className="text-slate-200 font-semibold">Composite risk score</td>
                <td className="text-slate-400">—</td>
                <td className="text-slate-400">—</td>
                <td className="text-right num text-gold-500 font-semibold">{DEAL.riskScore}/100</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-2.5 flex items-center gap-2 anim-settle" style={{ animationDelay: "600ms" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 12.5 9.5 18 20 6.5" stroke="#2f7a52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-[11px] text-slate-300">
              {autoApproved
                ? "Below committee threshold — auto-approved, disbursement queue notified"
                : "Above committee threshold — auto-forwarded to Credit Committee (WF-104)"}
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
