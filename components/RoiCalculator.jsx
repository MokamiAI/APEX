"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { track, EVENTS } from "@/lib/analytics";
import { fmtR, fmtNum } from "@/lib/format";

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
  const [deals, setDeals] = useState("80");
  const [investors, setInvestors] = useState("6");
  const [minutes, setMinutes] = useState("45");
  const [hourly, setHourly] = useState("450");
  const [errorRate, setErrorRate] = useState("2");
  const [lossPerError, setLossPerError] = useState("15000");

  useEffect(() => {
    track(EVENTS.viewTool, { tool: "roi" });
  }, []);

  const r = useMemo(() => {
    const d = parseFloat(deals) || 0;
    const inv = parseFloat(investors) || 0;
    const min = parseFloat(minutes) || 0;
    const hr = parseFloat(hourly) || 0;
    const er = (parseFloat(errorRate) || 0) / 100;
    const loss = parseFloat(lossPerError) || 0;

    const settlementsPerYear = d * 12;
    const hoursManual = (settlementsPerYear * inv * min) / 60;
    const costManual = hoursManual * hr;
    const expectedErrors = settlementsPerYear * er;
    const errorLoss = expectedErrors * loss;
    const totalImpact = costManual + errorLoss;

    return { settlementsPerYear, hoursManual, costManual, expectedErrors, errorLoss, totalImpact };
  }, [deals, investors, minutes, hourly, errorRate, lossPerError]);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2 space-y-5">
        <Input label="Deals settled per month" value={deals} onChange={setDeals} suffix="deals" />
        <Input label="Investors / fund partners per deal" value={investors} onChange={setInvestors} suffix="investors" />
        <Input label="Minutes per manual payout recalc" value={minutes} onChange={setMinutes} suffix="min" />
        <Input label="Blended cost of your team's time" value={hourly} onChange={setHourly} suffix="R / hour" />
        <Input label="Estimated error / dispute rate" value={errorRate} onChange={setErrorRate} suffix="%" />
        <Input label="Average loss per disputed payout" value={lossPerError} onChange={setLossPerError} suffix="R" />
      </div>

      <div className="lg:col-span-3">
        <div className="bg-navy-950 rounded-2xl border border-navy-700 p-6 sm:p-8">
          <p className="ui-kicker !text-slate-500 mb-1">What running payouts by hand is costing you</p>
          <p className="font-display text-2xl font-semibold text-white mt-1">Annual impact of manual settlements</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            <div className="rounded-xl bg-navy-800/60 border border-navy-600/40 p-4">
              <p className="ui-kicker">Hours a year on recalculations</p>
              <p className="num text-2xl text-white mt-1">{fmtNum(r.hoursManual)} hrs</p>
            </div>
            <div className="rounded-xl bg-navy-800/60 border border-navy-600/40 p-4">
              <p className="ui-kicker">Cost of that time</p>
              <p className="num text-2xl text-gold-500 mt-1">{fmtR(r.costManual)}</p>
            </div>
            <div className="rounded-xl bg-navy-800/60 border border-navy-600/40 p-4">
              <p className="ui-kicker">Expected disputes a year</p>
              <p className="num text-2xl text-white mt-1">{Math.round(r.expectedErrors)}</p>
            </div>
            <div className="rounded-xl bg-navy-800/60 border border-navy-600/40 p-4">
              <p className="ui-kicker">Exposure from disputes</p>
              <p className="num text-2xl text-red-400 mt-1">{fmtR(r.errorLoss)}</p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-teal-500/40 bg-teal-500/10 p-5 text-center">
            <p className="ui-kicker !text-slate-400">Total annual cost of the status quo</p>
            <p className="num text-4xl text-teal-400 font-semibold mt-1">{fmtR(r.totalImpact)}</p>
            <p className="text-[12.5px] text-slate-300 mt-2 max-w-md mx-auto">
              APEX removes this at settlement — every investor&apos;s model applied automatically,
              WF-107 notified, zero manual recalculation.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/calculator" className="btn btn-primary">See a settlement calculated live</Link>
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
