"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { track, EVENTS } from "@/lib/analytics";
import { fmtR } from "@/lib/format";

function Input({ label, value, onChange, suffix }) {
  return (
    <div>
      <label className="field-label">{label}</label>
      <div className="flex items-center gap-2">
        <input className="field num" inputMode="decimal" value={value} onChange={(e) => onChange(e.target.value)} />
        {suffix && <span className="num text-[13px] text-slate-400">{suffix}</span>}
      </div>
    </div>
  );
}

export default function RoiCalculator() {
  const [apps, setApps] = useState("80");
  const [minutesPerDecision, setMinutesPerDecision] = useState("35");
  const [hourly, setHourly] = useState("450");
  const [auditHours, setAuditHours] = useState("6");
  const [incidentRate, setIncidentRate] = useState("2");
  const [lossPerIncident, setLossPerIncident] = useState("15000");

  useEffect(() => {
    track(EVENTS.viewTool, { tool: "roi" });
  }, []);

  const r = useMemo(() => {
    const a = parseFloat(apps) || 0;
    const min = parseFloat(minutesPerDecision) || 0;
    const hr = parseFloat(hourly) || 0;
    const audit = parseFloat(auditHours) || 0;
    const ir = (parseFloat(incidentRate) || 0) / 100;
    const loss = parseFloat(lossPerIncident) || 0;

    const appsPerYear = a * 12;
    const hoursApprovals = (appsPerYear * min) / 60;
    const hoursAudit = audit * 12;
    const hoursManual = hoursApprovals + hoursAudit;
    const costManual = hoursManual * hr;
    const expectedIncidents = appsPerYear * ir;
    const incidentLoss = expectedIncidents * loss;
    const totalImpact = costManual + incidentLoss;

    return { hoursApprovals, hoursAudit, hoursManual, costManual, expectedIncidents, incidentLoss, totalImpact };
  }, [apps, minutesPerDecision, hourly, auditHours, incidentRate, lossPerIncident]);

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2 space-y-5">
        <Input label="Applications processed per month" value={apps} onChange={setApps} suffix="apps" />
        <Input label="Minutes per manual approval decision" value={minutesPerDecision} onChange={setMinutesPerDecision} suffix="min" />
        <Input label="Blended cost of your team's time" value={hourly} onChange={setHourly} suffix="R / hour" />
        <Input label="Hours a month assembling audit evidence" value={auditHours} onChange={setAuditHours} suffix="hrs" />
        <Input label="Estimated compliance / dispute incident rate" value={incidentRate} onChange={setIncidentRate} suffix="%" />
        <Input label="Average cost per incident" value={lossPerIncident} onChange={setLossPerIncident} suffix="R" />
      </div>

      <div className="lg:col-span-3">
        <div className="bg-navy-950 rounded-2xl border border-navy-700 p-6 sm:p-8">
          <p className="ui-kicker !text-slate-500 mb-1">What running lending by hand is costing you</p>
          <p className="font-display text-2xl font-semibold text-white mt-1">Annual impact of manual approvals &amp; audit assembly</p>

          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            <div className="rounded-xl bg-navy-800/60 border border-navy-600/40 p-4">
              <p className="ui-kicker">Hours a year on manual approvals</p>
              <p className="num text-2xl text-white mt-1">{Math.round(r.hoursApprovals).toLocaleString()} hrs</p>
            </div>
            <div className="rounded-xl bg-navy-800/60 border border-navy-600/40 p-4">
              <p className="ui-kicker">Hours a year assembling audit evidence</p>
              <p className="num text-2xl text-white mt-1">{Math.round(r.hoursAudit).toLocaleString()} hrs</p>
            </div>
            <div className="rounded-xl bg-navy-800/60 border border-navy-600/40 p-4">
              <p className="ui-kicker">Cost of that time</p>
              <p className="num text-2xl text-gold-500 mt-1">{fmtR(r.costManual)}</p>
            </div>
            <div className="rounded-xl bg-navy-800/60 border border-navy-600/40 p-4">
              <p className="ui-kicker">Exposure from expected incidents</p>
              <p className="num text-2xl text-red-400 mt-1">{fmtR(r.incidentLoss)}</p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-teal-500/40 bg-teal-500/10 p-5 text-center">
            <p className="ui-kicker !text-slate-400">Total annual cost of the status quo</p>
            <p className="num text-4xl text-teal-400 font-semibold mt-1">{fmtR(r.totalImpact)}</p>
            <p className="text-[12.5px] text-slate-300 mt-2 max-w-md mx-auto">
              APEX removes this at the source — every application scored and routed automatically,
              every action logged to the audit trail, zero manual recalculation.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/calculator" className="btn btn-primary">See a decision routed live</Link>
            <Link href="/book" className="btn btn-ghost">Book a 20-minute walkthrough</Link>
          </div>
          <p className="num text-[10px] text-slate-500 mt-4 text-center">
            Illustrative estimate for planning — not financial advice. Adjust inputs to your book.
          </p>
        </div>
      </div>
    </div>
  );
}
