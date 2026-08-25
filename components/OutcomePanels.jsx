// High-fidelity interface panels for the "What changes for you" section.
// Mirrors the real APEX Enterprise product UI (module names, labels, statuses).
// Replace with real APEX screenshots when available (per the brief's Section 9 rule).

import { fmtR as fmt } from "@/lib/format";
import { SAMPLE_INVESTORS, investorModelLabel } from "@/lib/sampleLedger";

function Panel({ title, sub, children, footer }) {
  return (
    <div className="ui">
      <div className="ui-top">
        <span className="ui-title">{title}</span>
        <span className="ui-dot status-active" />
      </div>
      <div className="px-4 py-3">
        {sub && <p className="ui-kicker mb-2">{sub}</p>}
        <div className="overflow-x-auto -mx-4 px-4">{children}</div>
        {footer && <p className="text-[10.5px] text-slate-500 mt-2.5">{footer}</p>}
      </div>
    </div>
  );
}

function LedgerPanel() {
  const rows = SAMPLE_INVESTORS.map((inv) => [
    inv.name, investorModelLabel(inv, { short: true }), inv.contribution, inv.payout, inv.status,
  ]);
  return (
    <Panel
      title="Investor Ledger — fund partner view"
      sub="Last settlement · PO-1029"
      footer={'Every fund partner sees their own live view. No calls asking "where is my money?"'}
    >
      <table className="ui-table w-full">
        <thead><tr><th>Fund</th><th>Model</th><th className="text-right">Contrib.</th><th className="text-right">Payout</th><th>Status</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              <td className="text-slate-200 font-medium">{r[0]}</td>
              <td className="text-slate-400">{r[1]}</td>
              <td className="text-right num">{fmt(r[2])}</td>
              <td className="text-right num text-teal-400">{fmt(r[3])}</td>
              <td><span className={`text-[10px] ${r[4] === "Paid" ? "text-teal-400" : "text-slate-400"}`}>{r[4]}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}

function CollectionsPanel() {
  const buckets = [
    ["PAR 1-30", 14, "bg-teal-500"],
    ["PAR 31-60", 5, "bg-gold-500"],
    ["PAR 61-90", 2, "bg-gold-600"],
    ["Legal / NPL", 1, "bg-warn"],
  ];
  const rows = [
    ["DL-2210", "Naledi Trading", 4, "High", "Promise: 12 Aug"],
    ["DL-2214", "Bronkhorst & Co", 35, "High", "SMS sent"],
    ["DL-2217", "Karoo Fresh", 78, "Critical", "Legal / NPL"],
  ];
  return (
    <Panel
      title="Recoveries & Collections"
      sub="Delinquency management and payment promises"
      footer="Promises tracked, SMS campaigns sent automatically. Nobody works from a printed list."
    >
      <div className="grid grid-cols-4 gap-2 mb-3">
        {buckets.map(([label, count, color]) => (
          <div key={label} className="rounded-lg bg-navy-800/60 border border-navy-600/40 px-2 py-1.5 text-center">
            <p className="ui-kicker">{label}</p>
            <p className={`num text-[13px] mt-0.5 ${color === "bg-teal-500" ? "text-teal-400" : color === "bg-warn" ? "text-red-400" : "text-gold-500"}`}>{count}</p>
          </div>
        ))}
      </div>
      <table className="ui-table w-full">
        <thead><tr><th>Borrower</th><th className="text-right">Days overdue</th><th>Priority</th><th>Next action</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              <td className="num text-slate-200">{r[0]}</td>
              <td className="text-right num">{r[1]}</td>
              <td><span className={`text-[10px] ${r[2] === "Critical" ? "text-red-400" : "text-gold-500"}`}>{r[2]}</span></td>
              <td className="text-slate-400">{r[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}

function OriginationPanel() {
  const leadStages = ["New", "Contacted", "Qualified", "Proposal", "Converted"];
  const appRows = [
    ["APP-1187", "Meadowline Suppliers", "45 days", "12%", "Committee Review"],
    ["APP-1190", "Soweto Builders", "60 days", "13%", "Review"],
    ["APP-1193", "Cape Logistics", "30 days", "11.5%", "Submitted"],
  ];
  return (
    <Panel
      title="Loan Applications — processing originations"
      sub="Pipeline: New → Contacted → Qualified → Proposal → Converted"
      footer="Application to disbursement without chasing anyone. Committee sign-off auto-triggered above R1,000,000."
    >
      <div className="flex items-center gap-1.5 mb-3 flex-wrap">
        {leadStages.map((s, i) => (
          <div key={s} className="flex items-center gap-1.5">
            <span className={`text-[9.5px] font-semibold rounded px-1.5 py-0.5 ${i < 2 ? "bg-teal-500/15 text-teal-400" : "bg-navy-600 text-slate-400"}`}>{s}</span>
            {i < leadStages.length - 1 && <span className="text-slate-600 text-[9px]">→</span>}
          </div>
        ))}
      </div>
      <table className="ui-table w-full">
        <thead><tr><th>App ID</th><th>Client</th><th>Term</th><th>Rate</th><th>Status</th></tr></thead>
        <tbody>
          {appRows.map((r) => (
            <tr key={r[0]}>
              <td className="num text-slate-200">{r[0]}</td>
              <td className="text-slate-300">{r[1]}</td>
              <td className="text-right num">{r[2]}</td>
              <td className="text-right num">{r[3]}</td>
              <td>
                <span className={`text-[10px] ${r[4] === "Committee Review" ? "text-gold-500" : r[4] === "Review" ? "text-teal-400" : "text-slate-400"}`}>
                  {r[4] === "Committee Review" ? "COMMITTEE REQ" : r[4]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}

function ReportingPanel() {
  const kpis = [
    ["Total Loan Book", "R 12.4M", "text-white"],
    ["Overdue Portfolio", "R 386K", "text-gold-500"],
    ["Pending Approvals", "6", "text-teal-400"],
  ];
  const bars = [
    ["Portfolio health", 82, "bg-teal-500"],
    ["Collections rate", 64, "bg-teal-400"],
    ["Revenue vs forecast", 71, "bg-gold-500"],
  ];
  return (
    <Panel
      title="Reporting Studio — actionable business intelligence"
      sub="Delivered 06:01 — before you reach the office"
      footer="Portfolio health, NCA compliance audit, conversion funnel, collector performance, revenue — assembled and sent automatically."
    >
      <div className="grid grid-cols-3 gap-2 mb-3">
        {kpis.map(([label, value, color]) => (
          <div key={label} className="rounded-lg bg-navy-800/60 border border-navy-600/40 px-2 py-2">
            <p className="ui-kicker">{label}</p>
            <p className={`num text-[14px] mt-0.5 ${color}`}>{value}</p>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        {bars.map(([label, pct, bg]) => (
          <div key={label}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-slate-300">{label}</span>
              <span className="num text-slate-100">{pct}%</span>
            </div>
            <div className="ui-bar"><span className={`anim-bar ${bg}`} style={{ width: `${pct}%` }} /></div>
          </div>
        ))}
      </div>
      <div className="mt-3.5 rounded-lg bg-navy-800/60 border border-navy-600/40 px-3 py-2.5">
        <p className="text-[10.5px] text-slate-400">NCA Compliance Audit: <span className="text-teal-400">ready for submission</span> · Aging schedule: 22 accounts &gt; 30 days</p>
      </div>
    </Panel>
  );
}

export default function OutcomePanel({ type }) {
  if (type === "investor-ledger") return <LedgerPanel />;
  if (type === "collections") return <CollectionsPanel />;
  if (type === "origination") return <OriginationPanel />;
  return <ReportingPanel />;
}
