import Link from "next/link";
import Reveal from "@/components/Reveal";
import BeforeAfter from "@/components/BeforeAfter";
import OutcomesTabs from "@/components/OutcomesTabs";
import { OUTCOMES, IMPLEMENTATION } from "@/lib/data";

export const metadata = {
  title: "Why APEX Enterprise",
  description:
    "Why capital intermediaries choose APEX Enterprise: the settlement engine, the compliance controls, the guided onboarding and the 90-day warranty.",
};

const ARGUMENTS = [
  {
    n: "01",
    h: "Built for the model, not for the lender",
    b: "Loan software was built for the company that funds its own book. APEX was built for the company that sources the deal and funds it with investor capital — the difference shows in every workflow, from co-funder splits to the investor ledger.",
  },
  {
    n: "02",
    h: "The settlement engine",
    b: "The moment a deal settles, every investor's return is calculated automatically — 50/50 splits or fixed returns, penalty and reward rates applied, your retained margin shown. This is the calculation no other platform in this market performs.",
  },
  {
    n: "03",
    h: "Compliance you can show, not promise",
    b: "NCA pre-screening that cannot be bypassed, a weighted risk engine, POPIA field-level logging, DSAR with a 21-business-day SLA, committee approval and a 7-year audit trail. UAT was passed by the client's own Risk, Compliance & Legal Officer with zero critical issues.",
  },
  {
    n: "04",
    h: "Your data moves with you",
    b: "Import your .xlsx or .csv book directly. Run APEX in parallel until you're comfortable. Your own compliance officer signs off the close. The platform is already built — what's left is onboarding your book, backed by a 90-day defects liability period after every deployment.",
  },
  {
    n: "05",
    h: "A platform, not a patchwork",
    b: "23 modules across 9 pillars — CRM, lending, investor & fund management, collections, messaging, reporting, automation, compliance, security — in one system. No more gluing a CRM to a loan tracker to a spreadsheet.",
  },
  {
    n: "06",
    h: "Built for the whole syndication",
    b: "Operators run the book, fund partners see their deals live, accountants audit with a trail that already exists. One source of truth, three views — the platform serves all three sides of the deal.",
  },
];

export default function WhyApexPage() {
  return (
    <>
      <section className="section-dark">
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-16 lg:pt-24">
          <Reveal>
            <p className="eyebrow mb-4">Why APEX</p>
            <h1 className="font-display font-semibold text-section text-white max-w-3xl">
              The case, in one place.
            </h1>
            <p className="text-lead text-slate-300 mt-6 max-w-2xl">
              If you&apos;re deciding between APEX, a spreadsheet and a generic system, here&apos;s the
              argument — grounded in the model, the controls and the proof.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- THE SHIFT — before / after ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">The shift</p>
            <h2 className="font-display font-semibold text-section text-ink max-w-3xl">
              How your business runs today vs how it runs on APEX.
            </h2>
          </Reveal>
          <div className="mt-12">
            <BeforeAfter />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARGUMENTS.map((a, i) => (
            <Reveal key={a.n} delay={(i % 3) * 70}>
              <div className="card h-full">
                <p className="num text-teal-600 text-lg mb-3">{a.n}</p>
                <h2 className="text-[17px] font-semibold text-ink mb-2.5">{a.h}</h2>
                <p className="text-[14px] leading-relaxed text-slate-600">{a.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- WHAT CHANGES FOR YOU ---------- */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">What changes</p>
            <h2 className="font-display font-semibold text-section text-ink max-w-3xl">
              Four things that change the week you go live.
            </h2>
          </Reveal>
          <div className="mt-14">
            <Reveal delay={80}>
              <OutcomesTabs outcomes={OUTCOMES} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="eyebrow mb-4">The honest comparison</p>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,3vw,2.6rem)] text-white leading-tight">
              Spreadsheet. Generic CRM. Loan software. APEX.
            </h2>
            <p className="text-slate-300 mt-5 text-[16px] leading-relaxed">
              The buying decision isn&apos;t really between vendors — it&apos;s between four ways of running
              a syndication book. We&apos;ve written the comparison honestly, including where APEX is the
              wrong answer.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/learn/apex-vs-spreadsheets" className="btn btn-ghost">APEX vs. spreadsheets</Link>
              <Link href="/learn/apex-vs-generic-crm" className="btn btn-ghost">APEX vs. generic CRM</Link>
              <Link href="/learn/how-to-choose-lending-software" className="btn btn-ghost">The buyer&apos;s checklist</Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="bg-navy-900 border border-navy-700 rounded-2xl p-7">
              <p className="ui-title !text-slate-400 mb-4">The proof, in numbers</p>
              {[
                ["UAT critical issues", "0", "teal"],
                ["Days to go-live", "60", "teal"],
                ["Defects liability", "90 days", "teal"],
                ["Modules", "23", "teal"],
                ["Roles", "6", "teal"],
                ["Enterprise tenants live", "1", "amber"],
              ].map(([k, v, tone]) => (
                <div key={k} className="flex justify-between items-center py-3 border-b border-navy-600/40 last:border-0">
                  <span className="text-[13.5px] text-slate-400">{k}</span>
                  <span className={`num text-[14px] ${tone === "amber" ? "text-gold-500" : "text-teal-400"}`}>{v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- IMPLEMENTATION ---------- */}
      <section className="section-dark py-24 lg:py-32">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">Implementation</p>
            <h2 className="font-display font-semibold text-section text-white max-w-3xl">
              The platform is already built. Your data comes with you.
            </h2>
            <p className="text-slate-400 mt-5 max-w-xl text-[15px] leading-relaxed">
              The fear enterprise buyers have isn&apos;t the software — it&apos;s the migration. There&apos;s no development
              project to wait on; what&apos;s left is onboarding your book. Here&apos;s exactly how that risk is handled.
            </p>
          </Reveal>
          <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {IMPLEMENTATION.map((s, i) => (
              <Reveal key={s.step} delay={i * 70}>
                <li className="card-dark h-full">
                  <p className="num text-teal-400 text-lg mb-3">{s.step}</p>
                  <h3 className="text-white font-semibold text-[16px] mb-2.5">{s.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-slate-400">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(1.8rem,3.4vw,2.9rem)] text-ink max-w-2xl mx-auto">
              See it on your own book.
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3.5">
              <Link href="/book" className="btn btn-primary">Book a 20-minute walkthrough</Link>
              <Link href="/calculator" className="btn btn-teal">Calculate your splits live</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
