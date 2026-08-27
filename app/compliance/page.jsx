import Link from "next/link";
import Reveal from "@/components/Reveal";
import { COMPLIANCE_CONTROLS, SECURITY_FACTS } from "@/lib/data";

const ICONS = {
  law: "M12 3v18M4 7h16M6 7l1-3h10l1 3M7 21h10",
  scale: "M12 3v18M8 5h8M5 7h14M7 21h10M12 7l-4 6h8l-4-6Z",
  shield: "M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2",
  trash: "M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5",
  radar: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  check: "M4 12.5 9.5 18 20 6.5",
  file: "M6 3h8l4 4v14H6V3Zm8 0v5h5",
  report: "M5 21V4h9l5 5v12H5Zm8-17v5h5M8 14h8M8 17h8",
};

export const metadata = { title: "Compliance & security" };

export default function CompliancePage() {
  return (
    <>
      <section className="section-dark">
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-16 lg:pt-24">
          <Reveal>
            <p className="eyebrow mb-4">Compliance & security</p>
            <h1 className="font-display font-semibold text-section text-white max-w-3xl">
              Your audit trail exists before anyone asks for it.
            </h1>
            <p className="text-lead text-slate-300 mt-6 max-w-2xl">
              POPIA and NCA obligations enforced by the system — not by someone&apos;s memory.
              Eight controls, built in, impossible to switch off by accident.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Controls */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPLIANCE_CONTROLS.map((c, i) => (
              <Reveal key={c.name} delay={(i % 4) * 60}>
                <div className="card h-full flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-600/30 flex items-center justify-center mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d={ICONS[c.tone]} stroke="#1c4532" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="text-[16px] font-semibold text-ink mb-2.5">{c.name}</h2>
                  <p className="text-[13.5px] leading-relaxed text-slate-600 flex-1">{c.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Validation */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="eyebrow mb-4">Independently validated</p>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,3vw,2.6rem)] text-white leading-tight">
              UAT run by the client&apos;s own Risk, Compliance &amp; Legal Officer.
            </h2>
            <p className="text-slate-300 mt-5 text-[16px] leading-relaxed">
              Before go-live, the first enterprise tenant&apos;s Risk, Compliance and Legal Officer ran user
              acceptance testing on the live system. Result: <span className="text-white font-semibold">zero critical or
              high-severity issues</span>. That&apos;s the standard every deployment is held to.
            </p>
            <p className="text-slate-400 mt-5 text-[15px] leading-relaxed">
              Every deployment is followed by a 90-day defects liability period. Your compliance officer signs
              off the close — not us.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="bg-navy-900 border border-navy-700 rounded-2xl p-7">
              <div className="flex items-center justify-between mb-6">
                <p className="ui-title !text-slate-400">UAT sign-off summary</p>
                <span className="num text-[11px] text-teal-400 bg-teal-500/10 border border-teal-500/30 rounded px-2.5 py-1">Passed</span>
              </div>
              {[
                ["Critical severity issues", "0"],
                ["High severity issues", "0"],
                ["Data migration accuracy", "100%"],
                ["Tested by", "Client Risk / Compliance / Legal"],
                ["Deployment type", "Onboarding, not development"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-center py-3 border-b border-navy-600/40 last:border-0">
                  <span className="text-[13.5px] text-slate-400">{k}</span>
                  <span className="num text-[13.5px] text-white">{v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust & security hub */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">Trust &amp; security</p>
            <h2 className="font-display font-semibold text-section text-ink max-w-2xl">
              The infrastructure facts your Risk officer will ask for.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY_FACTS.map((f, i) => (
              <Reveal key={f.k} delay={(i % 4) * 60}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 h-full">
                  <p className="text-[12px] uppercase tracking-[0.14em] text-slate-400 font-semibold mb-2">{f.k}</p>
                  <p className="text-[15.5px] font-semibold text-ink leading-snug">{f.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Audit CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h2 className="font-display font-semibold text-[clamp(1.5rem,2.6vw,2.2rem)] text-ink leading-tight">
                  Not sure where your compliance stands? Get the 12-point readiness check.
                </h2>
                <p className="text-slate-600 mt-3 max-w-xl text-[15.5px] leading-relaxed">
                  Twelve questions on KYC, retention, DSAR, access logging and consent. A scored report names
                  your specific gaps — and what closing them looks like.
                </p>
              </div>
              <Link href="/compliance-audit" className="btn btn-teal whitespace-nowrap">See your gaps</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
