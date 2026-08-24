"use client";

import { useMemo, useState } from "react";
import { captureLead } from "@/lib/lead";
import { track, EVENTS } from "@/lib/analytics";

const STEPS = ["Your business", "Your book", "Your slot", "Your details"];

const FUND_TYPES = [
  "PO financing",
  "Invoice financing",
  "Bridging finance",
  "Multiple / mixed",
];

const DEPLOYMENT = ["R 500k – R 1m", "R 1m – R 3m", "R 3m – R 10m", "R 10m+"];
const VOLUME = ["Under 20 deals / month", "20–80 deals / month", "80–200 deals / month", "200+ deals / month"];
const PARTNERS = ["1–5 fund partners", "5–12 fund partners", "12+ fund partners"];

// Generate bookable slots: next 5 business days, 09:00–16:00 SAST, hourly.
function buildSlots() {
  const slots = [];
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let day = start;
  while (slots.length < 5 * 8) {
    day = new Date(day.getTime() + 86400000);
    const dow = day.getDay();
    if (dow === 0 || dow === 6) continue;
    for (let h = 9; h <= 16; h++) {
      slots.push({
        key: day.toISOString().slice(0, 10) + "-" + h,
        label: day.toLocaleDateString("en-ZA", { weekday: "short", day: "numeric", month: "short" }) + ` · ${String(h).padStart(2, "0")}:00 SAST`,
      });
    }
  }
  return slots.slice(0, 12);
}

export default function BookingForm({ purpose = "walkthrough" }) {
  const [step, setStep] = useState(0);
  const slots = useMemo(buildSlots, []);
  const [form, setForm] = useState({
    fundTypes: [],
    deployment: "",
    volume: "",
    partners: "",
    slot: "",
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [calendarUrl, setCalendarUrl] = useState("");

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));
  const toggleType = (t) =>
    setForm((f) => ({
      ...f,
      fundTypes: f.fundTypes.includes(t) ? f.fundTypes.filter((x) => x !== t) : [...f.fundTypes, t],
    }));

  const validStep = () => {
    const e = {};
    if (step === 0 && form.fundTypes.length === 0) e.fundTypes = "Select at least one funding type.";
    if (step === 1) {
      if (!form.deployment) e.deployment = "Select your monthly deployment.";
      if (!form.volume) e.volume = "Select your deal volume.";
      if (!form.partners) e.partners = "Select your fund partner count.";
    }
    if (step === 2 && !form.slot) e.slot = "Pick a time — or choose “No preference”.";
    if (step === 3) {
      if (!form.name.trim()) e.name = "Your name is required.";
      if (!form.company.trim()) e.company = "Your company is required.";
      if (!form.email.trim() && !form.whatsapp.trim()) e.contact = "Add an email or WhatsApp number.";
      if (!form.consent) e.consent = "Consent is required under POPIA.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validStep()) return;
    setStep((s) => Math.min(s + 1, 3));
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validStep()) return;
    const type = purpose === "fund" ? "fund-onboarding" : "walkthrough";
    const res = await captureLead({
      type,
      payload: {
        name: form.name,
        company: form.company,
        email: form.email,
        whatsapp: form.whatsapp,
        fundTypes: form.fundTypes,
        deployment: form.deployment,
        volume: form.volume,
        partners: form.partners,
        slot: form.slot,
        consent: form.consent,
      },
    });
    if (res.ok) {
      track(EVENTS[type === "fund" ? "fundOnboardingRequest" : "walkthroughRequest"], {
        fundTypes: form.fundTypes.join(","), deployment: form.deployment, channel: form.whatsapp ? "whatsapp" : "email",
      });
      track(EVENTS.leadSent, { type, nurture: res.nurture || "walkthrough-request" });
      setCalendarUrl(res.calendarUrl || "");
    } else {
      setSubmitError("We couldn't save your request just now — please email sales@intermediateds.co.za.");
    }
    setSubmitted(true);
  };

  const whatsappNumber = form.whatsapp.replace(/[^0-9]/g, "");
  const slotLabel = slots.find((s) => s.key === form.slot)?.label;

  if (submitted) {
    return (
      <div className="anim-settle">
        <div className="bg-navy-950 rounded-2xl border border-navy-700 p-8 lg:p-10 text-center">
          <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-teal-500/15 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 12.5 9.5 18 20 6.5" stroke="#6bc490" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="font-display font-semibold text-3xl text-white">
            {purpose === "fund" ? "Your onboarding request is in." : "Your walkthrough request is in."}
          </h2>
          <p className="text-slate-300 mt-4 max-w-xl mx-auto text-[15.5px] leading-relaxed">
            {purpose === "fund"
              ? "We'll confirm within one business day with a live view on your own deals."
              : "We'll confirm within one business day."}
            {slotLabel ? <> You asked for <span className="text-teal-400 font-semibold">{slotLabel}</span> — we&apos;ll hold it for you.</> : ""}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3.5">
            {calendarUrl && (
              <a href={calendarUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Pick your exact slot on the calendar
              </a>
            )}
            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I just requested an APEX session — following up here.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                Continue on WhatsApp
              </a>
            )}
            <a href="/calculator" className="btn btn-ghost">Run the calculator meanwhile</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      {/* Progress */}
      <div className="bg-navy-950 px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 flex-wrap">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold ${
                  i < step ? "bg-teal-500 text-white" : i === step ? "bg-gold-500 text-navy-950" : "bg-navy-700 text-slate-400"
                }`}
              >
                {i < step ? "✓" : i + 1}
              </span>
              <span className={`text-[12px] font-medium ${i === step ? "text-white" : "text-slate-400"}`}>{label}</span>
              {i < STEPS.length - 1 && <span className="w-4 sm:w-6 h-px bg-navy-600" />}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={submit} className="p-6 lg:p-8">
        {step === 0 && (
          <div className="anim-settle">
            <h3 className="font-display font-semibold text-2xl text-ink mb-2">What do you fund?</h3>
            <p className="text-[14px] text-slate-500 mb-6">Helps us bring the right people to the session.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {FUND_TYPES.map((t) => {
                const on = form.fundTypes.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => toggleType(t)}
                    className={`rounded-xl border px-5 py-4 text-left transition-colors ${
                      on ? "border-teal-600 bg-teal-50" : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span className={`text-[15px] font-semibold ${on ? "text-teal-900" : "text-ink"}`}>
                      {on ? "✓ " : ""}{t}
                    </span>
                  </button>
                );
              })}
            </div>
            {errors.fundTypes && <p className="text-[13px] text-red-600 mt-3">{errors.fundTypes}</p>}
          </div>
        )}

        {step === 1 && (
          <div className="anim-settle space-y-6">
            <div>
              <h3 className="font-display font-semibold text-2xl text-ink mb-1">Your book, at a glance</h3>
              <p className="text-[14px] text-slate-500">Three numbers. That&apos;s the whole questionnaire.</p>
            </div>
            {[
              ["deployment", "Monthly deployment", DEPLOYMENT, "R 500k – R 10m+"],
              ["volume", "Active deals per month", VOLUME, "20–200+"],
              ["partners", "Investor fund partners", PARTNERS, "1–12+"],
            ].map(([key, label, options, hint]) => (
              <div key={key}>
                <p className="field-label">{label}</p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {options.map((o) => {
                    const on = form[key] === o;
                    return (
                      <button
                        key={o}
                        type="button"
                        onClick={() => set(key, o)}
                        className={`rounded-lg border px-4 py-2.5 text-left text-[14px] font-medium transition-colors ${
                          on ? "border-teal-600 bg-teal-50 text-teal-900" : "border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        {o}
                      </button>
                    );
                  })}
                </div>
                {errors[key] && <p className="text-[13px] text-red-600 mt-2">{errors[key]}</p>}
              </div>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="anim-settle">
            <h3 className="font-display font-semibold text-2xl text-ink mb-1">When works?</h3>
            <p className="text-[14px] text-slate-500 mb-5">
              We&apos;ll hold your slot and confirm within one business day.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => set("slot", "no-preference")}
                className={`rounded-lg border px-4 py-2.5 text-left text-[13.5px] font-medium transition-colors ${
                  form.slot === "no-preference" ? "border-teal-600 bg-teal-50 text-teal-900" : "border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                No preference — fit me in
              </button>
              {slots.map((s) => {
                const on = form.slot === s.key;
                return (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => set("slot", s.key)}
                    className={`rounded-lg border px-4 py-2.5 text-left text-[13px] font-medium transition-colors ${
                      on ? "border-teal-600 bg-teal-50 text-teal-900" : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
            {errors.slot && <p className="text-[13px] text-red-600 mt-3">{errors.slot}</p>}
          </div>
        )}

        {step === 3 && (
          <div className="anim-settle space-y-5">
            <div>
              <h3 className="font-display font-semibold text-2xl text-ink mb-1">Your details</h3>
              <p className="text-[14px] text-slate-500">We&apos;ll confirm the session within one business day.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="field-label" htmlFor="bk-name">Your name *</label>
                <input id="bk-name" className="field" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="e.g. Thabo Mokoena" />
                {errors.name && <p className="text-[13px] text-red-600 mt-1.5">{errors.name}</p>}
              </div>
              <div>
                <label className="field-label" htmlFor="bk-company">Company *</label>
                <input id="bk-company" className="field" value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="e.g. Umzali Capital (Pty) Ltd" />
                {errors.company && <p className="text-[13px] text-red-600 mt-1.5">{errors.company}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="field-label" htmlFor="bk-email">Email</label>
                <input id="bk-email" type="email" className="field" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@company.co.za" />
              </div>
              <div>
                <label className="field-label" htmlFor="bk-wa">WhatsApp number</label>
                <input id="bk-wa" className="field num" value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} placeholder="+27 82 000 0000" />
              </div>
            </div>
            {errors.contact && <p className="text-[13px] text-red-600">{errors.contact}</p>}
            <label className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 cursor-pointer hover:border-teal-500/50 transition-colors">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => set("consent", e.target.checked)}
                className="mt-0.5 accent-teal-600"
              />
              <span className="text-[13.5px] text-slate-600 leading-relaxed">
                I consent to Intermediate Data Systems (Pty) Ltd processing my details to arrange this
                session, in line with POPIA. I can withdraw consent at any time.
              </span>
            </label>
            {errors.consent && <p className="text-[13px] text-red-600">{errors.consent}</p>}
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row justify-between gap-3">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(s - 1, 0))}
            className={`btn btn-ghost !text-ink !border-slate-300 hover:!bg-slate-100 ${step === 0 ? "invisible" : ""}`}
          >
            Back
          </button>
          {step < 3 ? (
            <button type="button" onClick={next} className="btn btn-primary">Continue</button>
          ) : (
            <button type="submit" className="btn btn-primary">
              {purpose === "fund" ? "Request fund onboarding" : "Book my walkthrough"}
            </button>
          )}
        </div>
        {submitError && <p className="text-[13px] text-red-600 mt-3 text-center">{submitError}</p>}
        <p className="num text-[11px] text-slate-400 mt-4 text-center">
          POPIA-compliant · UTM-tracked · No spam, ever
        </p>
      </form>
    </div>
  );
}
