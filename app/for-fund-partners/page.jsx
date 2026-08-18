import Link from "next/link";
import Reveal from "@/components/Reveal";
import { FUND_PARTNER } from "@/lib/data";

export const metadata = { title: "For fund partners" };

export default function FundPartnersPage() {
  return (
    <>
      <section className="section-dark">
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-16 lg:pt-24 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="eyebrow mb-4">For fund partners</p>
            <h1 className="font-display font-semibold text-section text-white">
              {FUND_PARTNER.hero.headline}
            </h1>
            <p className="text-lead text-slate-300 mt-6">{FUND_PARTNER.hero.sub}</p>
            <div className="flex flex-col sm:flex-row gap-3.5 mt-9">
              <Link href="/calculator" className="btn btn-primary">See a payout schedule live</Link>
              <Link href="/tour" className="btn btn-ghost">Tour the investor ledger</Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="bg-navy-900 border border-navy-700 rounded-2xl p-7">
              <p className="ui-title !text-slate-400 mb-4">Fund partner view · live</p>
              <div className="space-y-3">
                {[
                  ["Sizwe Capital", "3 originators · 14 deals · R 1.24M deployed", "teal"],
                  ["Marlin Fund", "2 originators · 9 deals · R 860K deployed", "teal"],
                  ["Umoya Partners", "4 originators · 21 deals · R 1.9M deployed", "teal"],
                ].map(([name, meta, tone]) => (
                  <div key={name} className="rounded-xl bg-navy-800/60 border border-navy-600/40 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[13px] font-semibold text-white">{name}</p>
                      <span className="num text-[10px] text-teal-400">● Live</span>
                    </div>
                    <p className="text-[11.5px] text-slate-400 mt-1">{meta}</p>
                    <div className="mt-2.5 flex gap-2">
                      <span className="text-[9.5px] font-semibold rounded bg-teal-500/15 text-teal-400 px-2 py-1">View deals</span>
                      <span className="text-[9.5px] font-semibold rounded bg-navy-600/60 text-slate-400 px-2 py-1">Ledger</span>
                      <span className="text-[9.5px] font-semibold rounded bg-navy-600/60 text-slate-400 px-2 py-1">Statements</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">What changes for your capital</p>
            <h2 className="font-display font-semibold text-section text-ink max-w-3xl">
              Four things your fund gains the day originators run on APEX.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FUND_PARTNER.why.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 60}>
                <div className="card h-full">
                  <p className="num text-teal-600 text-lg mb-3">{(i + 1).toString().padStart(2, "0")}</p>
                  <h3 className="text-[16px] font-semibold text-ink mb-2.5">{w.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-slate-600">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="eyebrow mb-4">The two-sided model</p>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,3vw,2.6rem)] text-white leading-tight">
              {FUND_PARTNER.flywheel.headline}
            </h2>
            <p className="text-slate-300 mt-5 text-[16px] leading-relaxed">
              {FUND_PARTNER.flywheel.body}
            </p>
            <ul className="mt-7 space-y-3">
              {FUND_PARTNER.flywheel.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[15px] text-slate-300">
                  <span className="text-teal-400 font-bold">✓</span>{b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-5">
              {FUND_PARTNER.stats.map((s) => (
                <div key={s.label} className="bg-navy-900 border border-navy-700 rounded-2xl p-6">
                  <p className="num text-3xl text-teal-400">{s.value}</p>
                  <p className="text-[13px] text-slate-400 mt-2 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(1.8rem,3.4vw,2.9rem)] text-ink max-w-2xl mx-auto">
              Talk to us about onboarding your originators.
            </h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto text-[15.5px] leading-relaxed">
              We&apos;ll show you a live fund-partner view on your own deals, in 20 minutes — no
              obligation, and your data stays yours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3.5">
              <Link href="/book" className="btn btn-primary">Request fund onboarding</Link>
              <Link href="/calculator" className="btn btn-ghost !text-ink !border-slate-300 hover:!bg-slate-100">
                Calculate a payout live
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
