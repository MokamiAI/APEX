"use client";

import { useEffect, useMemo, useState } from "react";
import { AUDIT_QUESTIONS, AUDIT_BANDS, AUDIT_TO_CONTROL } from "@/lib/data";
import { captureLead } from "@/lib/lead";
import { track, EVENTS } from "@/lib/analytics";

const ANSWER_VALUE = { yes: 2, partly: 1, no: 0 };

function bandFor(score) {
  return AUDIT_BANDS.find((b) => score >= b.min) || AUDIT_BANDS[AUDIT_BANDS.length - 1];
}

const TONE_STYLES = {
  ok: { text: "text-teal-600", chip: "bg-teal-500/15 text-teal-600 border-teal-500/30", bar: "bg-teal-500" },
  amber: { text: "text-gold-600", chip: "bg-gold-500/15 text-gold-600 border-gold-500/30", bar: "bg-gold-500" },
  red: { text: "text-red-600", chip: "bg-red-500/15 text-red-700 border-red-500/30", bar: "bg-red-500" },
};

export default function ComplianceAudit() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [reportEmail, setReportEmail] = useState("");
  const [reportSent, setReportSent] = useState(false);

  useEffect(() => {
    track(EVENTS.viewTool, { tool: "compliance-audit" });
  }, []);

  const answered = Object.keys(answers).length;

  const result = useMemo(() => {
    const total = AUDIT_QUESTIONS.reduce((s, q) => s + (ANSWER_VALUE[answers[q.id]] || 0), 0);
    const max = AUDIT_QUESTIONS.length * 2;
    const score = Math.round((total / max) * 100);
    const band = bandFor(score);
    const gaps = AUDIT_QUESTIONS.filter((q) => (ANSWER_VALUE[answers[q.id]] || 0) < 2);
    return { score, band, gaps, total };
  }, [answers, submitted]);

  const setAnswer = (id, value) => {
    setAnswers((a) => ({ ...a, [id]: value }));
  };

  const allAnswered = answered === AUDIT_QUESTIONS.length;

  return (
    <div>
      {!submitted ? (
        <div>
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <p className="text-[14px] text-slate-500">
              <span className="num text-teal-700 font-semibold">{answered}</span> / {AUDIT_QUESTIONS.length} answered
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setAnswers({})}
                className="text-[13px] font-medium text-slate-400 hover:text-slate-600"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {AUDIT_QUESTIONS.map((q, i) => {
              const val = answers[q.id];
              return (
                <div key={q.id} className="border border-slate-200 rounded-2xl p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="num text-[11px] uppercase tracking-[0.14em] text-teal-700 mb-1.5">
                        {String(i + 1).padStart(2, "0")} · {q.area}
                      </p>
                      <p className="text-[15.5px] font-semibold text-ink leading-snug">{q.q}</p>
                      <p className="text-[12.5px] text-slate-500 mt-1.5">{q.hint}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2.5">
                    {[
                      ["yes", "Yes"],
                      ["partly", "Partly"],
                      ["no", "No"],
                    ].map(([key, label]) => (
                      <button
                        key={key}
                        type="button"
                        aria-pressed={val === key}
                        onClick={() => setAnswer(q.id, key)}
                        className={`rounded-lg border px-4 py-2 text-[13px] font-semibold transition-colors ${
                          val === key
                            ? key === "yes"
                              ? "bg-teal-600 text-white border-teal-600"
                              : key === "partly"
                              ? "bg-amber-500 text-white border-amber-500"
                              : "bg-red-600 text-white border-red-600"
                            : "border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              disabled={!allAnswered}
              onClick={() => setSubmitted(true)}
              className={`btn ${allAnswered ? "btn-primary" : "!bg-slate-200 !text-slate-400 cursor-not-allowed"}`}
            >
              {allAnswered ? "Get my readiness report" : `Answer all 12 to get your report (${answered}/12)`}
            </button>
            <p className="num text-[11px] text-slate-400 mt-3">No signup · your answers never leave your browser</p>
          </div>
        </div>
      ) : (
        <div className="anim-settle">
          {/* Score card */}
          <div className="bg-navy-950 rounded-2xl border border-navy-700 p-7 sm:p-9">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="ui-kicker !text-slate-500 mb-2">POPIA / NCA readiness score</p>
                <div className="flex items-center gap-4">
                  <span className={`num text-6xl font-semibold ${TONE_STYLES[result.band.tone].text}`}>{result.score}</span>
                  <span className={`text-[13px] font-semibold rounded-full border px-3 py-1 ${TONE_STYLES[result.band.tone].chip}`}>
                    {result.band.label}
                  </span>
                </div>
                <p className="text-slate-400 mt-4 max-w-xl text-[14px] leading-relaxed">{result.band.note}</p>
              </div>
              <div className="w-full sm:w-56 shrink-0">
                <div className="flex justify-between text-[11px] text-slate-500 mb-1.5">
                  <span>Critical</span><span>Manageable</span>
                </div>
                <div className="ui-bar h-2.5">
                  <span className={`anim-bar ${TONE_STYLES[result.band.tone].bar}`} style={{ width: `${result.score}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Gaps */}
          <div className="mt-8">
            <h3 className="font-display font-semibold text-2xl text-ink mb-1">
              Your specific gaps{result.gaps.length ? ` (${result.gaps.length})` : ""}
            </h3>
            <p className="text-[14px] text-slate-500 mb-6">
              {result.gaps.length === 0
                ? "Strong position — the controls below are exactly what APEX keeps automated."
                : "Each gap below maps to a control APEX enforces by default."}
            </p>

            {result.gaps.length === 0 ? (
              <div className="rounded-2xl border border-teal-600/40 bg-teal-50 p-6 flex items-center gap-4">
                <span className="text-2xl">✓</span>
                <p className="text-[15px] text-teal-900">
                  Every control is in place. APEX keeps them that way — enforced by the system, not by memory.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {result.gaps.map((g) => (
                  <div key={g.id} className="border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5">
                    <span className="num text-[11px] uppercase tracking-[0.14em] text-slate-400 sm:w-36 shrink-0 sm:pt-0.5">
                      {g.area}
                    </span>
                    <div className="flex-1">
                      <p className="text-[14px] font-semibold text-ink">{g.q}</p>
                      <p className="text-[13px] text-teal-700 mt-1.5">
                        <span className="font-semibold">Apex control:</span> {AUDIT_TO_CONTROL[g.area]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-[14.5px] font-semibold text-ink mb-1">Email me this report</p>
            <p className="text-[12.5px] text-slate-500 mb-3">Your score, your gaps, and the APEX control that closes each — in one page.</p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                className="field !py-2 !text-[13px] flex-1"
                placeholder="Email"
                value={reportEmail}
                onChange={(e) => setReportEmail(e.target.value)}
                aria-label="Email for report"
              />
              <button
                type="button"
                disabled={reportSent || !reportEmail.trim()}
                onClick={async () => {
                  const res = await captureLead({
                    type: "audit",
                    payload: {
                      email: reportEmail,
                      score: result.score,
                      band: result.band.label,
                      gaps: result.gaps.map((g) => g.area),
                    },
                  });
                  if (res.ok) {
                    track(EVENTS.auditReportRequest, { score: result.score, band: result.band.label, gaps: result.gaps.length });
                    track(EVENTS.leadSent, { type: "audit", nurture: "audit-report" });
                    setReportSent(true);
                  }
                }}
                className="btn btn-teal !py-2 !text-[13px] whitespace-nowrap"
              >
                {reportSent ? "✓ Sent" : "Email my report"}
              </button>
            </div>
            <p className="num text-[10px] text-slate-400 mt-2">POPIA-compliant · only about this report</p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a href="mailto:marcus@intermediateds.co.za?subject=Compliance%20readiness%20report%20follow-up" className="btn btn-primary">
              Talk to us about closing the gaps
            </a>
            <button
              type="button"
              onClick={() => { setSubmitted(false); setAnswers({}); }}
              className="btn btn-ghost !text-ink !border-slate-300 hover:!bg-slate-100"
            >
              Run it again
            </button>
          </div>
          <p className="text-center num text-[11px] text-slate-400 mt-4">
            This is an indicative self-assessment, not legal advice. POPIA penalties run to R10 million per infringement.
          </p>
        </div>
      )}
    </div>
  );
}
