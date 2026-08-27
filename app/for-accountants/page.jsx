import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ACCOUNTANT } from "@/lib/data";

export const metadata = { title: "For accountants & auditors" };

export default function AccountantsPage() {
  return (
    <>
      <section className="section-dark">
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-16 lg:pt-24">
          <Reveal>
            <p className="eyebrow mb-4">For accountants & auditors</p>
            <h1 className="font-display font-semibold text-section text-white max-w-3xl">
              {ACCOUNTANT.hero.headline}
            </h1>
            <p className="text-lead text-slate-300 mt-6 max-w-2xl">{ACCOUNTANT.hero.sub}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">What you gain</p>
            <h2 className="font-display font-semibold text-section text-ink max-w-3xl">
              A client book you can actually audit — without the archaeology.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACCOUNTANT.why.map((w, i) => (
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

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="eyebrow mb-4">The referral programme</p>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,3vw,2.6rem)] text-ink leading-tight">
              {ACCOUNTANT.referral.headline}
            </h2>
            <p className="text-slate-600 mt-5 text-[16px] leading-relaxed">
              {ACCOUNTANT.referral.body}
            </p>
            <ul className="mt-7 space-y-3">
              {ACCOUNTANT.referral.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[15px] text-slate-700">
                  <span className="text-teal-600 font-bold">✓</span>{b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="bg-navy-950 rounded-2xl border border-navy-700 p-8">
              <p className="ui-kicker !text-slate-500 mb-4">The evidence trail your file needs</p>
              <ol className="space-y-4">
                {[
                  ["1", "7-year immutable audit trail", "user · entity · old value · new value · timestamp"],
                  ["2", "POPIA field-level logging", "who accessed each client's PII, when, why"],
                  ["3", "NCA compliance report", "structured, ready for annual submission"],
                  ["4", "Maker-checker approvals", "no single-person control on sensitive actions"],
                ].map(([n, t, d]) => (
                  <li key={n} className="flex gap-4">
                    <span className="num text-teal-400 w-5 shrink-0">{n}</span>
                    <div>
                      <p className="text-[15px] font-semibold text-white">{t}</p>
                      <p className="text-[13px] text-slate-400 mt-0.5">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-6">
                <Link href="/compliance" className="btn btn-teal w-full">See the compliance controls</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(1.8rem,3.4vw,2.9rem)] text-ink max-w-2xl mx-auto">
              Run the 12-point readiness check on a client&apos;s book.
            </h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto text-[15.5px] leading-relaxed">
              A scored report naming the specific compliance gaps — the perfect starting point for
              the conversation with your client.
            </p>
            <div className="mt-8">
              <Link href="/compliance-audit" className="btn btn-primary">Start the readiness check</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
