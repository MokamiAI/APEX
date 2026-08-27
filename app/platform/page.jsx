import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PILLARS, ROLES, WORKFLOW_RULES, INTEGRATIONS, REPORTS, RISK_MATRIX } from "@/lib/data";

export const metadata = { title: "Platform — the 23 modules" };

export default function PlatformPage() {
  return (
    <>
      <section className="section-dark">
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-16 lg:pt-24">
          <Reveal>
            <p className="eyebrow mb-4">The platform</p>
            <h1 className="font-display font-semibold text-section text-white max-w-3xl">
              Every step of the deal lifecycle. One unified financial operating system.
            </h1>
            <p className="text-lead text-slate-300 mt-6 max-w-2xl">
              Twenty-three modules across nine functional pillars — from lead to investor paid out.
              Each module is described the way it changes your week, not the way it looks in a brochure.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 space-y-20">
          {PILLARS.map((p, i) => (
            <Reveal key={p.id}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <p className="num text-teal-600 text-[14px] mb-2">{(i + 1).toString().padStart(2, "0")}</p>
                  <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink mb-4">{p.name}</h2>
                  <p className="text-[16px] leading-relaxed text-slate-600">{p.desc}</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <p className="text-[12px] uppercase tracking-[0.14em] text-slate-400 font-semibold mb-4">
                    What&apos;s inside
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {p.modules.map((m) => (
                      <li key={m} className="flex gap-2.5 text-[14.5px] text-slate-700">
                        <span className="text-teal-600 mt-0.5">—</span>{m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Workflow automation */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">Workflow automation</p>
            <h2 className="font-display font-semibold text-section text-ink max-w-2xl">
              The event-driven business logic engine.
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl text-[15.5px] leading-relaxed">
              No-code rules trigger emails, SMS alerts and webhooks across the lifecycle — including
              WF-107, which notifies fund partners the moment a settlement payout is calculated.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WORKFLOW_RULES.map((w, i) => (
              <Reveal key={w.id} delay={(i % 4) * 60}>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 h-full">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="num text-[11px] text-teal-700">{w.id}</span>
                    <span className="num text-[10px] text-slate-400">{w.runs} runs</span>
                  </div>
                  <p className="text-[15px] font-semibold text-ink">{w.name}</p>
                  <p className="text-[12.5px] text-slate-500 mt-1">
                    <span className="text-slate-400">Trigger:</span> {w.trigger}
                  </p>
                  <p className="text-[12.5px] text-slate-500">
                    <span className="text-slate-400">Action:</span> {w.action}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Risk engine */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="eyebrow mb-4">The risk engine</p>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,3vw,2.6rem)] text-white leading-tight">
              Every application scored on an auditable weighting matrix.
            </h2>
            <p className="text-slate-300 mt-5 text-[16px] leading-relaxed">
              The platform assigns a credit risk profile to every application — a transparent score you
              can see, defend and adjust. NCA pre-screening runs first and cannot be bypassed.
            </p>
            <p className="text-slate-400 mt-4 text-[15px] leading-relaxed">
              Risk stratification across <span className="text-white">Credit · Market · Ops · Compliance · Fraud</span> —
              with predictive analytics flagging disbursement volatility before it becomes a problem.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="bg-navy-900 border border-navy-700 rounded-2xl p-7">
              <p className="ui-title !text-slate-400 mb-5">Risk weighting matrix</p>
              {RISK_MATRIX.map((r, i) => (
                <div key={r.factor} className="mb-4">
                  <div className="flex justify-between text-[13px] mb-1.5">
                    <span className="text-slate-300">{r.factor}</span>
                    <span className="num text-teal-400">{r.weight}</span>
                  </div>
                  <div className="ui-bar">
                    <span
                      className="bg-teal-500"
                      style={{ width: r.weight, animationDelay: `${i * 150}ms` }}
                    />
                  </div>
                </div>
              ))}
              <div className="mt-5 rounded-lg bg-navy-800/60 border border-navy-600/40 px-4 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-[12.5px] text-slate-400">Example application</span>
                  <span className="num text-[12px] text-teal-400">Low Risk · 82/100</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[12.5px] text-slate-400">NCA compliance</span>
                  <span className="num text-[12px] text-teal-400">Compliant</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[12.5px] text-slate-400">Committee threshold (R1,000,000)</span>
                  <span className="num text-[12px] text-gold-500">Auto-triggered</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">Integrations hub</p>
            <h2 className="font-display font-semibold text-section text-ink max-w-2xl">
              Connect your third-party financial ecosystem.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INTEGRATIONS.map((intg, i) => (
              <Reveal key={intg.name} delay={(i % 4) * 60}>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 h-full">
                  <p className="text-[15px] font-semibold text-ink">{intg.name}</p>
                  <p className="text-[13px] text-slate-500 mt-1.5 leading-relaxed">{intg.desc}</p>
                  <p className="num text-[10px] text-teal-700 mt-3">● Connected</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting studio */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="eyebrow mb-4">Reporting studio</p>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,3vw,2.6rem)] text-ink leading-tight">
              Actionable business intelligence — on schedule.
            </h2>
            <p className="text-slate-600 mt-5 text-[16px] leading-relaxed">
              A six-report studio against the live book, plus an executive dashboard and predictive
              analytics. Your Monday digest is assembled and delivered before you reach the office.
            </p>
          </Reveal>
          <div className="space-y-3">
            {REPORTS.map((r, i) => (
              <Reveal key={r.name} delay={i * 50}>
                <div className="bg-white border border-slate-200 rounded-xl px-5 py-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[15px] font-semibold text-ink">{r.name}</p>
                    <p className="text-[12.5px] text-slate-500 mt-0.5">{r.desc}</p>
                  </div>
                  <span className="num text-[10px] text-teal-700 shrink-0">auto</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">User directory</p>
            <h2 className="font-display font-semibold text-section text-ink max-w-2xl">
              Six roles. Role-based access, configured per user.
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl text-[15.5px] leading-relaxed">
              Default module access per role, with per-user overrides. Two-factor authentication and
              session timeouts enforce who can see what.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ROLES.map((role, i) => (
              <Reveal key={role.name} delay={(i % 3) * 60}>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 h-full">
                  <p className="text-[15.5px] font-semibold text-ink">{role.name}</p>
                  <p className="text-[13px] text-slate-500 mt-1.5 leading-relaxed">{role.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(1.8rem,3.4vw,2.9rem)] text-white max-w-2xl mx-auto">
              See the platform compute a settlement from your own numbers.
            </h2>
            <div className="mt-8">
              <Link href="/calculator" className="btn btn-primary">Calculate your splits live</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
