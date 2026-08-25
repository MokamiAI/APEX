"use client";

import { useEffect, useMemo, useState } from "react";
import { captureLead } from "@/lib/lead";
import { track, EVENTS } from "@/lib/analytics";
import { fmtR } from "@/lib/format";
import { SAMPLE_INVESTORS, SAMPLE_DEAL } from "@/lib/sampleLedger";

function emptyInvestor(id) {
  return { id, name: "", contribution: "", model: "split", rate: "" };
}

const DEFAULT_INVESTORS = SAMPLE_INVESTORS.map((inv, i) => ({
  id: i + 1,
  name: inv.name,
  contribution: String(inv.contribution),
  model: inv.kind,
  rate: inv.kind === "fixed" ? String(inv.rate) : "",
}));

export default function Calculator() {
  const [dealAmount, setDealAmount] = useState(String(SAMPLE_DEAL.amount));
  const [capture, setCapture] = useState({ email: "", whatsapp: "", sent: false, busy: false, error: "", calendarUrl: "" });
  const [grossIncome, setGrossIncome] = useState(String(SAMPLE_DEAL.income));
  const [timing, setTiming] = useState("on-time");
  const [investors, setInvestors] = useState(DEFAULT_INVESTORS);

  useEffect(() => {
    track(EVENTS.viewTool, { tool: "calculator" });
  }, []);

  const updateInvestor = (id, patch) =>
    setInvestors((list) => list.map((inv) => (inv.id === id ? { ...inv, ...patch } : inv)));

  const addInvestor = () =>
    setInvestors((list) => [...list, emptyInvestor(Math.max(...list.map((i) => i.id), 0) + 1)]);

  const removeInvestor = (id) => setInvestors((list) => list.filter((i) => i.id !== id));

  const result = useMemo(() => {
    const capital = parseFloat(dealAmount) || 0;
    const income = parseFloat(grossIncome) || 0;
    const penaltyRate = timing === "late" ? 0.02 : 0;
    const penaltyReward = timing === "early" ? 0.01 : penaltyRate;

    const rows = investors
      .map((inv) => {
        const contribution = parseFloat(inv.contribution) || 0;
        if (!inv.name || contribution <= 0) return null;
        if (inv.model === "fixed") {
          const rate = parseFloat(inv.rate) || 0;
          return { ...inv, contribution, kind: "fixed", rate, returnBase: (contribution * rate) / 100 };
        }
        return { ...inv, contribution, kind: "split", rate: 0, returnBase: 0 };
      })
      .filter(Boolean);

    const fixedSum = rows.reduce((s, r) => s + (r.kind === "fixed" ? r.returnBase : 0), 0);
    const remaining = Math.max(income - fixedSum, 0);
    const splitTotal = rows.reduce((s, r) => s + (r.kind === "split" ? r.contribution : 0), 0);

    const rowsFinal = rows.map((r) => {
      let ret = r.returnBase;
      if (r.kind === "split" && splitTotal > 0) {
        ret = (remaining * r.contribution) / splitTotal;
      }
      const adj = r.contribution * penaltyReward;
      ret = Math.max(ret + adj, 0);
      return { ...r, returnAmt: ret, payout: r.contribution + ret };
    });

    const totalPayout = rowsFinal.reduce((s, r) => s + r.payout, 0);
    const totalReturn = rowsFinal.reduce((s, r) => s + r.returnAmt, 0);
    const retained = Math.max(income - totalReturn, 0);
    const hasMixed = new Set(rowsFinal.map((r) => r.kind)).size > 1;
    const risk = Math.min(
      100,
      32 + Math.max(rowsFinal.length - 1, 0) * 4 + (hasMixed ? 12 : 0) + (timing === "late" ? 10 : 0) + (rowsFinal.length > 5 ? 8 : 0)
    );
    const band = risk >= 75 ? "Critical" : risk >= 55 ? "Fragile" : "Manageable";

    return { rows: rowsFinal, totalPayout, totalReturn, retained, capital, risk, band };
  }, [dealAmount, grossIncome, timing, investors]);

  const bandColor =
    result.band === "Critical" ? "text-warn" : result.band === "Fragile" ? "text-gold-600" : "text-ok";

  const submitCapture = async () => {
    setCapture((c) => ({ ...c, busy: true, error: "" }));
    const res = await captureLead({
      type: "calculator",
      payload: {
        email: capture.email,
        whatsapp: capture.whatsapp,
        dealAmount,
        grossIncome,
        timing,
        investors: result.rows.map((r) => ({
          name: r.name, model: r.kind, contribution: r.contribution, payout: r.payout,
        })),
        riskScore: result.risk,
      },
    });
    if (res.ok) {
      track(EVENTS.calculatorCapture, { riskScore: result.risk, investors: result.rows.length, channel: capture.whatsapp ? "whatsapp" : "email" });
      track(EVENTS.leadSent, { type: "calculator", nurture: res.nurture || "calculator-user" });
      setCapture((c) => ({ ...c, sent: true, busy: false, calendarUrl: res.calendarUrl || "" }));
    } else {
      setCapture((c) => ({ ...c, busy: false, error: "Try again, or email sales@intermediateds.co.za." }));
    }
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8">
      {/* Inputs */}
      <div className="lg:col-span-2 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="field-label" htmlFor="deal-amount">Deal amount</label>
            <input id="deal-amount" className="field num" inputMode="numeric" value={dealAmount}
              onChange={(e) => setDealAmount(e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="gross-income">Interest income on deal</label>
            <input id="gross-income" className="field num" inputMode="numeric" value={grossIncome}
              onChange={(e) => setGrossIncome(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="field-label" htmlFor="timing">Settlement timing</label>
          <select id="timing" className="select-field" value={timing} onChange={(e) => setTiming(e.target.value)}>
            <option value="on-time">On time</option>
            <option value="early">Early — reward +1%</option>
            <option value="late">Late — penalty −2%</option>
          </select>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="field-label !mb-0">Investors / fund partners</p>
            <button type="button" onClick={addInvestor} className="text-[13px] font-semibold text-teal-700 hover:text-teal-600">
              + Add investor
            </button>
          </div>
          <div className="space-y-3">
            {investors.map((inv) => (
              <div key={inv.id} className="border border-slate-200 rounded-xl p-3.5 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <input
                    className="field !py-2 !text-[14px] min-w-0"
                    placeholder="Investor / fund name"
                    value={inv.name}
                    onChange={(e) => updateInvestor(inv.id, { name: e.target.value })}
                  />
                  <button
                    type="button"
                    onClick={() => removeInvestor(inv.id)}
                    className="text-slate-400 hover:text-warn text-lg leading-none px-1"
                    aria-label={`Remove ${inv.name || "investor"}`}
                  >
                    ×
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="field-label !text-[12px]" htmlFor={`contrib-${inv.id}`}>Contribution (R)</label>
                    <input id={`contrib-${inv.id}`} className="field num !py-2 !text-[14px]" inputMode="numeric"
                      value={inv.contribution} onChange={(e) => updateInvestor(inv.id, { contribution: e.target.value })} />
                  </div>
                  <div>
                    <label className="field-label !text-[12px]" htmlFor={`model-${inv.id}`}>Profit model</label>
                    <select id={`model-${inv.id}`} className="select-field !py-2 !text-[14px]" value={inv.model}
                      onChange={(e) => updateInvestor(inv.id, { model: e.target.value })}>
                      <option value="split">50/50 profit split</option>
                      <option value="fixed">Fixed return</option>
                    </select>
                  </div>
                </div>
                {inv.model === "fixed" && (
                  <div>
                    <label className="field-label !text-[12px]" htmlFor={`rate-${inv.id}`}>Fixed return rate (% per deal)</label>
                    <input id={`rate-${inv.id}`} className="field num !py-2 !text-[14px]" inputMode="decimal"
                      value={inv.rate} onChange={(e) => updateInvestor(inv.id, { rate: e.target.value })} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="lg:col-span-3">
        <div className="bg-navy-950 rounded-2xl border border-navy-700 p-5 sm:p-7">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <div>
              <p className="ui-kicker !text-slate-500">The moment your deal settles</p>
              <p className="font-display text-xl font-semibold text-white mt-1">Automatic payout schedule</p>
            </div>
            <span className="num text-[11px] text-teal-400 bg-teal-500/10 border border-teal-500/30 rounded px-2.5 py-1">
              WF-107 · notifications ready
            </span>
          </div>

          {/* Capture — above the fold, the hot lead moment */}
          {!capture.sent ? (
            <div className="rounded-xl border border-teal-500/40 bg-navy-900 p-4 mb-4">
              <p className="text-[14px] font-semibold text-white mb-0.5">
                Get your payout schedule + Spreadsheet Risk Score — free.
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
                Your schedule and risk score are on their way. We&apos;ll reply within one business day.
              </p>
              {capture.calendarUrl && (
                <a href={capture.calendarUrl} target="_blank" rel="noreferrer" className="btn btn-primary !py-1.5 !px-3 !text-[12.5px]">
                  Choose your walkthrough slot
                </a>
              )}
            </div>
          )}

          {result.rows.length === 0 ? (
            <p className="text-slate-400 text-[14px] py-10 text-center">
              Add at least one investor with a contribution to calculate the split.
            </p>
          ) : (
            <div className="overflow-x-auto -mx-5 sm:-mx-7 px-5 sm:px-7">
              <table className="ui-table w-full min-w-[480px]">
                <thead>
                  <tr>
                    <th>Investor</th>
                    <th>Model</th>
                    <th className="text-right">Contribution</th>
                    <th className="text-right">Return</th>
                    <th className="text-right">Payout</th>
                  </tr>
                </thead>
                <tbody>
                  {result.rows.map((r) => (
                    <tr key={r.id}>
                      <td className="text-slate-200 font-medium">{r.name}</td>
                      <td className="text-slate-400">{r.kind === "fixed" ? `Fixed ${r.rate}%` : "50/50 split"}</td>
                      <td className="text-right num">{fmtR(r.contribution)}</td>
                      <td className="text-right num text-teal-400">{fmtR(r.returnAmt)}</td>
                      <td className="text-right num">{fmtR(r.payout)}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-navy-600/60">
                    <td className="text-white font-semibold">Operator retained margin</td>
                    <td className="text-slate-400">Your income</td>
                    <td className="text-right num text-slate-400">—</td>
                    <td className="text-right num text-slate-400">—</td>
                    <td className="text-right num text-gold-500 font-semibold">{fmtR(result.retained)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          <div className="grid sm:grid-cols-3 gap-3 mt-5">
            <div className="rounded-xl bg-navy-800/60 border border-navy-600/40 p-4">
              <p className="ui-kicker">Total investor payouts</p>
              <p className="num text-white text-lg mt-1">{fmtR(result.totalPayout)}</p>
            </div>
            <div className="rounded-xl bg-navy-800/60 border border-navy-600/40 p-4">
              <p className="ui-kicker">Your retained margin</p>
              <p className="num text-gold-500 text-lg mt-1">{fmtR(result.retained)}</p>
            </div>
            <div className="rounded-xl bg-navy-800/60 border border-navy-600/40 p-4">
              <p className="ui-kicker">Spreadsheet Risk Score</p>
              <p className={`num text-lg mt-1 ${bandColor}`}>{result.risk}<span className="text-[12px] text-slate-500">/100 · {result.band}</span></p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-[12px] text-slate-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 12.5 9.5 18 20 6.5" stroke="#2f7a52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            This is the calculation APEX runs automatically at settlement — on every deal, for every fund partner.
          </div>
        </div>
      </div>
    </div>
  );
}
