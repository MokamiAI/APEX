"use client";

import { useState } from "react";
import { TOUR_MODULES, PILLARS } from "@/lib/data";
import { fmtR as fmt } from "@/lib/format";
import {
  SAMPLE_DASHBOARD_KPIS, SAMPLE_PORTFOLIO_BARS,
  SAMPLE_PAR_BUCKETS, SAMPLE_COLLECTIONS_ROWS,
} from "@/lib/sampleLedger";

const Chip = ({ children, tone = "slate" }) => (
  <span
    className={`inline-block text-[9.5px] font-semibold rounded px-1.5 py-0.5 ${
      tone === "teal"
        ? "bg-teal-500/15 text-teal-400"
        : tone === "amber"
        ? "bg-gold-500/15 text-gold-500"
        : tone === "red"
        ? "bg-red-500/15 text-red-400"
        : "bg-navy-600/60 text-slate-400"
    }`}
  >
    {children}
  </span>
);

const Th = ({ children, right }) => (
  <th className={`text-left text-[9px] uppercase tracking-wider text-slate-500 font-medium px-2 py-1.5 border-b border-navy-600/40 ${right ? "text-right" : ""}`}>
    {children}
  </th>
);

/* ---------- Screens ---------- */

function DashboardScreen() {
  const kpis = SAMPLE_DASHBOARD_KPIS;
  const bars = SAMPLE_PORTFOLIO_BARS.map(([l, h], i) => [l, h, i === SAMPLE_PORTFOLIO_BARS.length - 1 ? "bg-teal-400" : "bg-teal-500"]);
  return (
    <div className="space-y-3">
      <p className="text-[11px] text-slate-400">Here is what&apos;s happening today in APEX</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {kpis.map(([label, value, color]) => (
          <div key={label} className="rounded-lg bg-navy-800/60 border border-navy-600/40 px-3 py-2.5">
            <p className="ui-kicker">{label}</p>
            <p className={`num text-[16px] mt-1 ${color}`}>{value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg bg-navy-800/60 border border-navy-600/40 p-3">
        <div className="flex items-center justify-between mb-2">
          <p className="ui-kicker">Performance forecast — last 6 months</p>
          <Chip tone="teal">Portfolio (M)</Chip>
        </div>
        <div className="flex items-end gap-2 h-20">
          {bars.map(([l, h, c]) => (
            <div key={l} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-t bg-navy-700/60 overflow-hidden flex items-end justify-center" style={{ height: "100%" }}>
                <div className={`w-full anim-bar ${c}`} style={{ height: `${h}%` }} />
              </div>
              <span className="num text-[8px] text-slate-500">{l}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <Chip tone="amber">2 committee reviews pending</Chip>
        <Chip>3 tasks due today</Chip>
      </div>
    </div>
  );
}

function LeadsScreen() {
  const rows = [
    ["Soweto Builders", "88", "Hot", "Referral", "Qualified"],
    ["Cape Logistics", "74", "Warm", "WhatsApp", "Proposal"],
    ["Durban Fasteners", "61", "Warm", "LinkedIn", "Contacted"],
    ["Pretoria Retailers", "43", "Cold", "Google", "New"],
    ["Sandton Tech", "92", "Hot", "Referral", "Proposal"],
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="ui-title !text-slate-400">Leads Management</p>
        <Chip tone="teal">+ New Lead</Chip>
      </div>
      <table className="ui-table w-full">
        <thead><tr><Th>Company</Th><Th right>Score</Th><Th>Status</Th><Th>Source</Th><Th>Stage</Th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              <td className="text-slate-200 font-medium text-[11px]">{r[0]}</td>
              <td className="text-right num">{r[1]}</td>
              <td><Chip tone={r[2] === "Hot" ? "red" : r[2] === "Warm" ? "amber" : "slate"}>{r[2]}</Chip></td>
              <td className="text-slate-400 text-[11px]">{r[3]}</td>
              <td className="text-slate-400 text-[11px]">{r[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-[10px] text-slate-500 mt-2">Convert your prospects into active clients — drag and drop through stages.</p>
    </div>
  );
}

function ApplicationsScreen() {
  const rows = [
    ["APP-1187", "Meadowline Suppliers", "45 days", "12%", "R 150,000", "Committee Review"],
    ["APP-1190", "Soweto Builders", "60 days", "13%", "R 2,400,000", "Committee Review"],
    ["APP-1193", "Cape Logistics", "30 days", "11.5%", "R 220,000", "Review"],
    ["APP-1196", "Randburg Steel", "90 days", "14%", "R 900,000", "Submitted"],
    ["APP-1199", "Kyalami Logistics", "45 days", "12.5%", "R 310,000", "Submitted"],
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="ui-title !text-slate-400">Loan Applications — processing originations</p>
        <Chip tone="teal">Submit New</Chip>
      </div>
      <table className="ui-table w-full">
        <thead><tr><Th>App ID</Th><Th>Client</Th><Th right>Term</Th><Th right>Rate</Th><Th right>Amount</Th><Th>Status</Th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              <td className="num text-slate-200">{r[0]}</td>
              <td className="text-slate-300 text-[11px]">{r[1]}</td>
              <td className="text-right num">{r[2]}</td>
              <td className="text-right num">{r[3]}</td>
              <td className="text-right num">{r[4]}</td>
              <td>{r[5] === "Committee Review" ? <Chip tone="amber">COMMITTEE REQ</Chip> : r[5] === "Review" ? <Chip tone="teal">Review</Chip> : <Chip>Submitted</Chip>}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-[10px] text-slate-500 mt-2">Internal risk assessment on every application · NCA pre-screen cannot be bypassed.</p>
    </div>
  );
}

function ApprovalsScreen() {
  const rows = [
    ["APP-1187", "Meadowline Suppliers", "R 150,000", "Low Risk · 82/100", "Review"],
    ["APP-1190", "Soweto Builders", "R 2,400,000", "Medium Risk · 61/100", "Committee Review"],
  ];
  return (
    <div>
      <p className="ui-title !text-slate-400 mb-2">Pending Approvals — credit decisions queue</p>
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r[0]} className="rounded-lg bg-navy-800/60 border border-navy-600/40 p-3">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div>
                <p className="text-[11.5px] text-slate-200 font-medium">{r[1]} <span className="num text-slate-500">· {r[0]}</span></p>
                <p className="num text-[10px] text-slate-500 mt-0.5">{r[2]} · {r[3]}</p>
              </div>
              {r[4] === "Committee Review" ? <Chip tone="amber">Committee required</Chip> : <Chip tone="teal">Review</Chip>}
            </div>
            <div className="flex gap-2 mt-2.5">
              <button type="button" className="text-[9.5px] font-semibold rounded bg-teal-500/15 text-teal-400 px-2 py-1 hover:bg-teal-500/25 transition-colors">Approve &amp; Disburse</button>
              <button type="button" className="text-[9.5px] font-semibold rounded bg-gold-500/15 text-gold-500 px-2 py-1 hover:bg-gold-500/25 transition-colors">Forward to Committee</button>
              <button type="button" className="text-[9.5px] font-semibold rounded bg-navy-600/60 text-slate-400 px-2 py-1 hover:bg-navy-600 transition-colors">Request Info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LoanBookScreen() {
  const rows = [
    ["LN-2210", "Naledi Trading", 150000, 86000, 5400, "12 Aug", "Current"],
    ["LN-2214", "Bronkhorst & Co", 2400000, 1900000, 64000, "Overdue", "Overdue"],
    ["LN-2217", "Karoo Fresh", 310000, 120000, 9800, "18 Aug", "Current"],
  ];
  return (
    <div>
      <p className="ui-title !text-slate-400 mb-2">Active Loan Book — monitoring portfolio health</p>
      <table className="ui-table w-full">
        <thead><tr><Th>Loan Ref</Th><Th>Client</Th><Th right>Principal</Th><Th right>Balance</Th><Th right>Repayment</Th><Th>Next due</Th><Th>Status</Th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              <td className="num text-slate-200">{r[0]}</td>
              <td className="text-slate-300 text-[11px]">{r[1]}</td>
              <td className="text-right num">{fmt(r[2])}</td>
              <td className="text-right num">{fmt(r[3])}</td>
              <td className="text-right num">{fmt(r[4])}</td>
              <td className="text-slate-400 text-[11px]">{r[5]}</td>
              <td>{r[6] === "Current" ? <Chip tone="teal">Current</Chip> : <Chip tone="red">Overdue</Chip>}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-[10px] text-slate-500 mt-2">Payment reminders scheduled (WF-103) · aging schedule recalculated on every payment.</p>
    </div>
  );
}

function CollectionsScreen() {
  const buckets = SAMPLE_PAR_BUCKETS;
  const rows = SAMPLE_COLLECTIONS_ROWS;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="ui-title !text-slate-400">Recoveries & Collections</p>
        <Chip tone="teal">SMS Campaign</Chip>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-3">
        {buckets.map(([label, count, tone]) => (
          <div key={label} className="rounded-lg bg-navy-800/60 border border-navy-600/40 px-2 py-1.5 text-center">
            <p className="ui-kicker">{label}</p>
            <p className={`num text-[13px] mt-0.5 ${tone === "red" ? "text-red-400" : tone === "amber" ? "text-gold-500" : "text-teal-400"}`}>{count}</p>
          </div>
        ))}
      </div>
      <table className="ui-table w-full">
        <thead><tr><Th>Deal</Th><Th>Borrower</Th><Th right>Days</Th><Th>Priority</Th><Th>Next action</Th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              <td className="num text-slate-200">{r[0]}</td>
              <td className="text-slate-300 text-[11px]">{r[1]}</td>
              <td className="text-right num">{r[2]}</td>
              <td><Chip tone={r[3] === "Critical" ? "red" : "amber"}>{r[3]}</Chip></td>
              <td className="text-slate-400 text-[11px]">{r[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ReportsScreen() {
  const reports = [
    ["Monthly Portfolio Health", "Comprehensive loan book performance metrics"],
    ["NCA Compliance Audit", "Regulatory data required for annual submission"],
    ["Sales Conversion Funnel", "Analysis of lead to disbursement speed"],
    ["Collector Performance", "Recovery rates and productivity per agent"],
    ["Revenue & Interest Earned", "Projected vs actual P&L from interest"],
    ["Aging Schedule (Arrears)", "Daily buckets of overdue accounts"],
  ];
  return (
    <div>
      <p className="ui-title !text-slate-400 mb-2">Reporting Studio — actionable business intelligence</p>
      <div className="space-y-2">
        {reports.map(([name, desc]) => (
          <div key={name} className="flex items-center justify-between rounded-lg bg-navy-800/60 border border-navy-600/40 px-3 py-2">
            <div>
              <p className="text-[11px] text-slate-200 font-medium">{name}</p>
              <p className="text-[9.5px] text-slate-500 mt-0.5">{desc}</p>
            </div>
            <Chip tone="teal">auto</Chip>
          </div>
        ))}
      </div>
    </div>
  );
}

function InboxScreen() {
  const convos = [
    ["John Doe · Director at Cape Logistics", "Hi John, apologies for that. Let me refresh your access link right now.", "WhatsApp"],
    ["Sarah Botha · Soweto Builders", "I have attached the new contract for the Q4 facility.", "Email"],
    ["Lerato Khumalo · Pretoria Retailers", "When is my next repayment due?", "SMS"],
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="ui-title !text-slate-400">Unified Inbox — omnichannel communications</p>
        <Chip tone="teal">Compose</Chip>
      </div>
      <div className="space-y-2">
        {convos.map(([who, msg, channel]) => (
          <div key={who} className="rounded-lg bg-navy-800/60 border border-navy-600/40 px-3 py-2.5">
            <div className="flex items-center justify-between">
              <p className="text-[10.5px] text-slate-200 font-medium">{who}</p>
              <Chip tone={channel === "WhatsApp" ? "teal" : "slate"}>{channel}</Chip>
            </div>
            <p className="text-[10px] text-slate-500 mt-1">{msg}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AutomationScreen() {
  const rules = [
    ["WF-101", "New Lead Welcome", "Lead Created", "Send Email"],
    ["WF-103", "Payment Reminder", "3 Days Before Due", "WhatsApp"],
    ["WF-104", "Approval Escalation", "Approval Stalled", "Notify Manager"],
    ["WF-107", "Nightly Arrears Sweep", "Daily at 02:00", "Flag Overdue + Queue Reminders"],
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="ui-title !text-slate-400">Workflow Automation — event-driven business logic</p>
        <Chip tone="teal">+ Create Rule</Chip>
      </div>
      <table className="ui-table w-full">
        <thead><tr><Th>Rule</Th><Th>Name</Th><Th>Trigger</Th><Th>Action</Th><Th>State</Th></tr></thead>
        <tbody>
          {rules.map((r) => (
            <tr key={r[0]}>
              <td className="num text-teal-400">{r[0]}</td>
              <td className="text-slate-200 text-[11px]">{r[1]}</td>
              <td className="text-slate-400 text-[11px]">{r[2]}</td>
              <td className="text-slate-400 text-[11px]">{r[3]}</td>
              <td><Chip tone="teal">Active</Chip></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AuditScreen() {
  const rows = [
    ["Sarah Dlamini", "APP-1187 · rate", "12%", "11.5%", "14:02"],
    ["John Mokoena", "LN-2214 · status", "Current", "Overdue", "13:47"],
    ["Peter Zulu", "DL-2217 · action", "—", "Escalated to Legal", "11:20"],
  ];
  return (
    <div>
      <p className="ui-title !text-slate-400 mb-2">System Audit Trail — immutable log of all system activity</p>
      <table className="ui-table w-full">
        <thead><tr><Th>User</Th><Th>Entity</Th><Th>Old value</Th><Th>New value</Th><Th right>Time</Th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0] + r[1]}>
              <td className="text-slate-300 text-[11px]">{r[0]}</td>
              <td className="text-slate-300 text-[11px]">{r[1]}</td>
              <td className="text-slate-500 text-[11px]">{r[2]}</td>
              <td className="text-slate-200 text-[11px]">{r[3]}</td>
              <td className="text-right num">{r[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-[10px] text-slate-500 mt-2">7-year immutable trail · exportable on demand.</p>
    </div>
  );
}

function GenericScreen({ module }) {
  const pillar = PILLARS.find((p) => p.modules.includes(module.label));
  return (
    <div className="py-6">
      <div className="flex items-start gap-3">
        <div className="w-11 h-11 shrink-0 rounded-xl bg-navy-800/60 border border-navy-600/40 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="#2f7a52" strokeWidth="1.6" />
            <path d="M8 9h8M8 13h5" stroke="#2f7a52" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          {pillar && <p className="num text-[10px] uppercase tracking-[0.14em] text-teal-500 mb-1">{pillar.name}</p>}
          <p className="text-[13.5px] text-white font-semibold">{module.label}</p>
          <p className="text-[11.5px] text-slate-400 mt-1.5 leading-relaxed max-w-[360px]">
            {pillar ? pillar.desc : "Part of the APEX Enterprise platform."}
          </p>
        </div>
      </div>
      {pillar && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {pillar.modules.map((m) => (
            <span
              key={m}
              className={`text-[9.5px] font-semibold rounded px-1.5 py-0.5 ${
                m === module.label ? "bg-teal-500/15 text-teal-400" : "bg-navy-600/60 text-slate-400"
              }`}
            >
              {m}
            </span>
          ))}
        </div>
      )}
      <p className="text-[10px] text-slate-500 mt-4">
        This tour shows the highest-traffic modules in full detail — the rest are represented here, and in full in the live sandbox.
      </p>
    </div>
  );
}

const SCREENS = {
  dashboard: DashboardScreen,
  leads: LeadsScreen,
  applications: ApplicationsScreen,
  approvals: ApprovalsScreen,
  loanbook: LoanBookScreen,
  collections: CollectionsScreen,
  reports: ReportsScreen,
  inbox: InboxScreen,
  automation: AutomationScreen,
  audit: AuditScreen,
};

/* ---------- The app frame ---------- */

export default function ProductTour() {
  const [active, setActive] = useState("dashboard");
  const Screen = SCREENS[active] || GenericScreen;
  const activeModule = TOUR_MODULES.find((m) => m.id === active);

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
          <span className="ui-kicker hidden sm:block">Acting as: Sarah Dlamini · admin</span>
          <span className="ui-dot status-active" />
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-52 shrink-0 bg-navy-900/80 border-r border-navy-600/40 py-3">
          <p className="ui-kicker px-3 mb-2">Modules · 22</p>
          <nav className="space-y-0.5 max-h-[430px] overflow-y-auto pr-1" aria-label="APEX modules">
            {TOUR_MODULES.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setActive(m.id)}
                className={`w-full text-left px-3 py-1.5 text-[11px] transition-colors flex items-center gap-2 ${
                  active === m.id
                    ? "bg-teal-500/10 text-teal-400 border-l-2 border-teal-500"
                    : "text-slate-400 hover:text-white border-l-2 border-transparent"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${active === m.id ? "bg-teal-500" : "bg-navy-600"}`} />
                {m.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile module picker */}
        <div className="md:hidden px-3 pt-3">
          <select
            className="field !py-2 !text-[12px]"
            value={active}
            onChange={(e) => setActive(e.target.value)}
            aria-label="Choose module"
          >
            {TOUR_MODULES.map((m) => (
              <option key={m.id} value={m.id}>{m.label}</option>
            ))}
          </select>
        </div>

        {/* Main */}
        <div className="flex-1 min-w-0">
          <div className="px-4 pt-3 pb-2 border-b border-navy-600/40 flex items-center justify-between gap-3">
            <p className="text-[12px] text-white font-semibold truncate">{activeModule?.label}</p>
            <div className="hidden sm:flex items-center gap-2 text-slate-500">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="num text-[10px]">Search records…</span>
            </div>
          </div>
          <div className="px-4 py-3 max-h-[400px] overflow-y-auto">
            <Screen module={activeModule} />
          </div>
        </div>
      </div>
    </div>
  );
}
