"use client";

import { useEffect, useMemo, useState } from "react";
import { captureLead } from "@/lib/lead";
import { track, EVENTS } from "@/lib/analytics";
import { fmtR } from "@/lib/format";

export default function Calculator() {
  const [capture, setCapture] = useState({ email: "", whatsapp: "", sent: false, busy: false, error: "", calendarUrl: "" });
  const [appsPerMonth, setAppsPerMonth] = useState("60");
  const [approvalHours, setApprovalHours] = useState("2.5");
  const [hourlyCost, setHourlyCost] = useState("350");
  const [overdueBook, setOverdueBook] = useState("386000");
  const [daysToContact, setDaysToContact] = useState("6");

  useEffect(() => {
    track(EVENTS.viewTool, { tool: "calculator" });
  }, []);

  const result = useMemo(() => {
    const apps = parseFloat(appsPerMonth) || 0;
    const hrs = parseFloat(approvalHours) || 0;
    const rate = parseFloat(hourlyCost) || 0;
    const overdue = parseFloat(overdueBook) || 0;
    const days = parseFloat(daysToContact) || 0;

    const hoursSaved = apps * hrs;
    const costSaved = hoursSaved * rate;

    // Nightly automated monitoring flags an overdue account the day after it's due,
    // instead of waiting `days` for someone to notice — modelled as a proportional
    // reduction in exposure, capped at a defensible ceiling rather than claiming
    // the whole book gets fixed.
    const speedupFactor = days > 1 ? Math.min(0.35, (days - 1) / days) : 0;
    const overdueAddressedSooner = overdue * speedupFactor;

    const riskScore = Math.min(
      100,
      30 + Math.min(apps, 200) / 4 + hrs * 3 + Math.min(days, 20) * 2
    );
    const band = riskScore >= 75 ? "Critical" : riskScore >= 55 ? "Fragile" : "Manageable";

    return { hoursSaved, costSaved, overdueAddressedSooner, riskScore, band };
  }, [appsPerMonth, approvalHours, hourlyCost, overdueBook, daysToContact]);

  const bandColor =
    result.band === "Critical" ? "text-warn" : result.band === "Fragile" ? "text-gold-600" : "text-ok";

  const submitCapture = async () => {
    setCapture((c) => ({ ...c, busy: true, error: "" }));
    const res = await captureLead({
      type: "calculator",
      payload: {
        email: capture.email,
        whatsapp: capture.whatsapp,
        appsPerMonth,
        approvalHours,
        hourlyCost,
        overdueBook,
        daysToContact,
        riskScore: result.riskScore,
      },
    });
    if (res.ok) {
      track(EVENTS.calculatorCapture, { riskScore: result.riskScore, channel: capture.whatsapp ? "whatsapp" : "email" });
      track(EVENTS.leadSent, { type: "calculator", nurture: res.nurture || "calculator-user" });
      setCapture((c) => ({ ...c, sent: true, busy: false, calendarUrl: res.calendarUrl || "" }));
    } else {
      setCapture((c) => ({ ...c, busy: false, error: "Try again, or email marcus@intermediateds.co.za." }));
    }
  };

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      {/* Inputs */}
      <div className="lg:col-span-2 space-y-5">
        <div>
          <label className="field-label" htmlFor="apps-month">Applications processed per month</label>
          <input id="apps-month" className="field num" inputMode="numeric" value={appsPerMonth}
            onChange={(e) => setAppsPerMonth(e.target.value)} />
        </div>
        <div>
          <label className="field-label" htmlFor="approval-hours">Average manual approval time (hours per application)</label>
          <input id="approval-hours" className="field num" inputMode="decimal" value={approvalHours}
            onChange={(e) => setApprovalHours(e.target.value)} />
        </div>
        <div>
          <label className="field-label" htmlFor="hourly-cost">Blended staff cost (R / hour)</label>
          <input id="hourly-cost" className="field num" inputMode="numeric" value={hourlyCost}
            onChange={(e) => setHourlyCost(e.target.value)} />
        </div>
        <div>
          <label className="field-label" htmlFor="overdue-book">Value of accounts currently overdue (R)</label>
          <input id="overdue-book" className="field num" inputMode="numeric" value={overdueBook}
            onChange={(e) => setOverdueBook(e.target.value)} />
        </div>
        <div>
          <label className="field-label" htmlFor="days-contact">Average days before first collections contact today</label>
          <input id="days-contact" className="field num" inputMode="numeric" value={daysToContact}
            onChange={(e) => setDaysToContact(e.target.value)} />
        </div>
      </div>

      {/* Results */}
      <div className="lg:col-span-3">
        <div className="bg-navy-950 rounded-2xl border border-navy-700 p-5 sm:p-7">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <div>
              <p className="ui-kicker !text-slate-500">The moment an application is ready</p>
              <p className="font-display text-xl font-semibold text-white mt-1">Automated approval &amp; arrears impact</p>
            </div>
            <span className="num text-[11px] text-teal-400 bg-teal-500/10 border border-teal-500/30 rounded px-2.5 py-1">
              WF-107 · nightly sweep active
            </span>
          </div>

          {/* Capture — above the fold, the hot lead moment */}
          {!capture.sent ? (
            <div className="rounded-xl border border-teal-500/40 bg-navy-900 p-4 mb-4">
              <p className="text-[14px] font-semibold text-white mb-0.5">
                Get your impact report + Manual Process Risk Score — free.
              </p>
              <p className="text-[12px] text-slate-400 mb-3">No obligation. We only contact you about this.</p>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  className="field !py-2 !text-[13px] flex-1 !bg-white"
                  placeholder="Email"
                  value={capture.email}
                  onChange={(e) => setCapture((c) => ({ ...c, email: e.target.value }))}
                  aria-label="Email"
                />
                <input
                  className="field num !py-2 !text-[13px] flex-1 !bg-white"
                  placeholder="WhatsApp number"
                  value={capture.whatsapp}
                  onChange={(e) => setCapture((c) => ({ ...c, whatsapp: e.target.value }))}
                  aria-label="WhatsApp number"
                />
                <button
                  type="button"
                  disabled={capture.busy || (!capture.email && !capture.whatsapp)}
                  onClick={submitCapture}
                  className="btn btn-primary !py-2 !text-[13px] whitespace-nowrap"
                >
                  {capture.busy ? "Sending…" : "Get my results"}
                </button>
              </div>
              {capture.error && <p className="text-[12px] text-red-400 mt-2">{capture.error}</p>}
              <p className="num text-[10px] text-slate-500 mt-2">POPIA-compliant · no spam, ever</p>
            </div>
          ) : (
            <div className="rounded-xl border border-teal-500/40 bg-teal-500/10 p-4 mb-4 flex flex-wrap items-center gap-3">
              <span className="text-teal-400 font-bold">✓</span>
              <p className="text-[13.5px] text-teal-100 flex-1">
                Your report and risk score are on their way. We&apos;ll reply within one business day.
              </p>
              {capture.calendarUrl && (
                <a href={capture.calendarUrl} target="_blank" rel="noreferrer" className="btn btn-primary !py-1.5 !px-3 !text-[12.5px]">
                  Choose your walkthrough slot
                </a>
              )}
            </div>
          )}

          <table className="ui-table w-full">
            <thead>
              <tr>
                <th>Impact area</th>
                <th className="text-right">Monthly</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-slate-200 font-medium">Hours no longer spent on manual approval routing</td>
                <td className="text-right num text-teal-400">{Math.round(result.hoursSaved).toLocaleString()} hrs</td>
              </tr>
              <tr>
                <td className="text-slate-200 font-medium">Staff cost saved</td>
                <td className="text-right num text-teal-400">{fmtR(result.costSaved)}</td>
              </tr>
              <tr className="border-t-2 border-navy-600/60">
                <td className="text-white font-semibold">Overdue exposure addressed sooner</td>
                <td className="text-right num text-gold-500 font-semibold">{fmtR(result.overdueAddressedSooner)}</td>
              </tr>
            </tbody>
          </table>

          <div className="grid sm:grid-cols-3 gap-3 mt-5">
            <div className="rounded-xl bg-navy-800/60 border border-navy-600/40 p-4">
              <p className="ui-kicker">Hours saved / month</p>
              <p className="num text-white text-lg mt-1">{Math.round(result.hoursSaved).toLocaleString()}</p>
            </div>
            <div className="rounded-xl bg-navy-800/60 border border-navy-600/40 p-4">
              <p className="ui-kicker">Cost saved / month</p>
              <p className="num text-gold-500 text-lg mt-1">{fmtR(result.costSaved)}</p>
            </div>
            <div className="rounded-xl bg-navy-800/60 border border-navy-600/40 p-4">
              <p className="ui-kicker">Manual Process Risk Score</p>
              <p className={`num text-lg mt-1 ${bandColor}`}>{Math.round(result.riskScore)}<span className="text-[12px] text-slate-500">/100 · {result.band}</span></p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-[12px] text-slate-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 12.5 9.5 18 20 6.5" stroke="#2f7a52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            This is the impact APEX runs automatically — on every application, every night, for every account.
          </div>
        </div>
      </div>
    </div>
  );
}
