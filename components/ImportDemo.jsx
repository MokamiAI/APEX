"use client";

import { useEffect, useRef, useState } from "react";
import { track, EVENTS } from "@/lib/analytics";
import { fmtR as fmt } from "@/lib/format";

const SAMPLE_XLSX = [
  { company: "Meadowline Suppliers (Pty) Ltd", amount: 150000, term: 45, rate: 12 },
  { company: "Soweto Builders CC", amount: 2400000, term: 60, rate: 13 },
  { company: "Cape Logistics (Pty) Ltd", amount: 220000, term: 30, rate: 11.5 },
  { company: "Durban Fasteners (Pty) Ltd", amount: 310000, term: 90, rate: 14 },
  { company: "Randburg Steel Co", amount: 900000, term: 45, rate: 12.5 },
  { company: "Kyalami Logistics (Pty) Ltd", amount: 180000, term: 30, rate: 11 },
];

const FIELD_MAP = [
  ["company", "clientName", "Client / company"],
  ["amount", "amount", "Deal amount"],
  ["term", "term", "Term (days)"],
  ["rate", "rate", "Rate (%)"],
];

const HEADER_ALIASES = {
  company: ["company", "client", "customer", "name", "borrower", "entity", "supplier"],
  amount: ["amount", "principal", "deal", "loan", "facility", "value", "advance"],
  term: ["term", "days", "months", "tenor", "period"],
  rate: ["rate", "interest", "yield", "pct", "coupon"],
};

function parseCsv(text) {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  if (lines.length < 2) return null;
  const header = lines[0].split(",").map((h) => h.replace(/^"|"$/g, "").trim().toLowerCase());
  const idx = {};
  header.forEach((h, i) => {
    Object.keys(HEADER_ALIASES).forEach((field) => {
      if (idx[field] === undefined && HEADER_ALIASES[field].includes(h)) idx[field] = i;
    });
  });
  if (idx.amount === undefined) return null;
  const rows = lines.slice(1, 9).map((l) => {
    const cells = l.split(",").map((c) => c.replace(/^"|"$/g, "").trim());
    return {
      company: cells[idx.company ?? 0] || "Unknown",
      amount: parseFloat(cells[idx.amount]) || 0,
      term: idx.term !== undefined ? parseInt(cells[idx.term]) || 0 : 30,
      rate: idx.rate !== undefined ? parseFloat(cells[idx.rate]) || 0 : 12,
    };
  }).filter((r) => r.amount > 0);
  return { rows, detected: FIELD_MAP.map(([field, target, label]) => ({
    label, detected: idx[field] !== undefined ? header[idx[field]] : "—", source: idx[field] !== undefined,
  })) };
}

function payout(amount, rate) {
  const income = (amount * rate) / 100;
  return { income, investor: income * 0.5, retained: income * 0.5 };
}

export default function ImportDemo() {
  const inputRef = useRef(null);
  const [state, setState] = useState("idle"); // idle | parsing | done
  const [data, setData] = useState(null);
  const [fileName, setFileName] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    track(EVENTS.viewTool, { tool: "import" });
  }, []);

  const startParse = (file) => {
    if (!file) return;
    setFileName(file.name);
    setError("");
    setState("parsing");
    const isCsv = /\.csv$/i.test(file.name);
    if (isCsv) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const parsed = parseCsv(String(e.target.result));
        setTimeout(() => {
          if (!parsed) {
            setError("Couldn't find amount/company columns in that CSV. Try the sample below.");
            setState("idle");
            return;
          }
          setData(parsed);
          setState("done");
        }, 1200);
      };
      reader.readAsText(file);
    } else {
      // .xlsx simulation (demo) — real import parses both in the platform
      setTimeout(() => {
        setData({
          rows: SAMPLE_XLSX,
          detected: FIELD_MAP.map(([field, target, label]) => ({
            label, detected: field === "company" ? "company_name" : field === "amount" ? "principal_amount" : field === "term" ? "term_days" : "interest_rate", source: true,
          })),
        });
        setState("done");
      }, 1400);
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) startParse(f);
  };

  const useSample = () => {
    setFileName("sample_customer_book.csv");
    setError("");
    setState("parsing");
    setTimeout(() => {
      setData({
        rows: SAMPLE_XLSX,
        detected: FIELD_MAP.map(([field, target, label]) => ({
          label, detected: field === "company" ? "company_name" : field === "amount" ? "principal_amount" : field === "term" ? "term_days" : "interest_rate", source: true,
        })),
      });
      setState("done");
    }, 1200);
  };

  return (
    <div>
      {/* Dropzone / file picker */}
      {state === "idle" && (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          className={`rounded-2xl border-2 border-dashed p-10 lg:p-14 text-center transition-colors ${
            dragOver ? "border-teal-500 bg-teal-50/50" : "border-slate-300 bg-slate-50"
          }`}
        >
          <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" stroke="#1c4532" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-[16px] font-semibold text-ink">Upload your .xlsx or .csv customer data</p>
          <p className="text-[13.5px] text-slate-500 mt-1.5">Drag and drop your file here, or click to browse</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="btn btn-primary"
            >
              Choose file
            </button>
            <button type="button" onClick={useSample} className="btn btn-ghost !text-ink !border-slate-300 hover:!bg-slate-100">
              Use sample data
            </button>
          </div>
          <input
            ref={inputRef}
            type="file"
            accept=".csv,.xlsx"
            className="hidden"
            onChange={(e) => startParse(e.target.files?.[0])}
          />
          {error && <p className="text-[13px] text-red-600 mt-4">{error}</p>}
          <p className="num text-[11px] text-slate-400 mt-5">
            Demo runs entirely in your browser — nothing is uploaded anywhere
          </p>
        </div>
      )}

      {/* Parsing */}
      {state === "parsing" && (
        <div className="rounded-2xl border border-slate-200 bg-navy-950 p-10 text-center">
          <div className="relative w-12 h-12 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full border-2 border-navy-600" />
            <div className="absolute inset-0 rounded-full border-2 border-teal-500 border-t-transparent animate-spin" style={{ animationDuration: "0.9s" }} />
          </div>
          <p className="text-white font-semibold text-[15px]">Importing {fileName || "your workbook"}…</p>
          <p className="num text-[11px] text-slate-500 mt-1.5">Parsing columns · mapping to APEX fields · validating records</p>
        </div>
      )}

      {/* Mapped result */}
      {state === "done" && data && (
        <div className="anim-settle space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-teal-500/15 text-teal-700 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 12.5 9.5 18 20 6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-[15px] font-semibold text-ink">Import successful — {data.rows.length} records mapped</p>
                <p className="num text-[11px] text-slate-500">{fileName} · parsed in your browser</p>
              </div>
            </div>
            <span className="num text-[10px] text-teal-700 bg-teal-500/10 border border-teal-500/30 rounded px-2.5 py-1">
              Ready for APEX
            </span>
          </div>

          {/* Column mapping */}
          <div>
            <p className="ui-kicker !text-slate-500 mb-3">Column mapping</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {data.detected.map((d) => (
                <div key={d.label} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="num text-[11px] text-slate-400">Source column</p>
                  <p className="num text-[13px] text-ink font-medium mt-0.5">{d.detected}</p>
                  <p className="text-[11.5px] text-teal-700 mt-1">→ {d.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Records + payout preview */}
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-navy-950 rounded-2xl border border-navy-700 overflow-hidden">
              <div className="ui-top !border-navy-600/60">
                <span className="ui-title">Client Repository — imported records</span>
                <span className="ui-dot status-active" />
              </div>
              <div className="overflow-x-auto">
                <table className="ui-table w-full">
                  <thead>
                    <tr>
                      <th>Company</th>
                      <th className="text-right">Amount</th>
                      <th className="text-right">Term</th>
                      <th className="text-right">Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.rows.map((r) => (
                      <tr key={r.company}>
                        <td className="text-slate-200 font-medium text-[11px]">{r.company}</td>
                        <td className="text-right num">{fmt(r.amount)}</td>
                        <td className="text-right num">{r.term}d</td>
                        <td className="text-right num">{r.rate}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <p className="ui-kicker !text-slate-500">Settlement on the first record</p>
              {(() => {
                const first = data.rows[0];
                const p = payout(first.amount, first.rate);
                return (
                  <div className="rounded-2xl border border-slate-200 p-5 space-y-3">
                    {[
                      ["Deal", fmt(first.amount)],
                      ["Interest income", fmt(p.income)],
                      ["Investor payout (50/50)", fmt(p.investor)],
                      ["Your retained margin", fmt(p.retained)],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between items-center text-[13.5px]">
                        <span className="text-slate-500">{k}</span>
                        <span className={`num font-medium ${k.includes("margin") ? "text-gold-600" : "text-ink"}`}>{v}</span>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-slate-200 flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M4 12.5 9.5 18 20 6.5" stroke="#2f7a52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-[11.5px] text-teal-700">WF-107: fund partners notified at settlement</p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3.5 pt-2">
            <a href="/calculator" className="btn btn-primary">Continue — run your own splits</a>
            <button type="button" onClick={() => { setState("idle"); setData(null); setFileName(""); }} className="btn btn-ghost !text-ink !border-slate-300 hover:!bg-slate-100">
              Import another file
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
