import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Why APEX Enterprise",
  description:
    "Why lenders choose APEX Enterprise: the decision engine, the compliance controls, the 60-day migration and the 90-day warranty.",
};

const ARGUMENTS = [
  {
    n: "01",
    h: "Built for the whole lifecycle, not a patchwork",
    b: "Most lending software covers one stage and leaves you gluing a CRM to a loan tracker to a spreadsheet. APEX covers all eight — lead qualification through collections — in one system, with the difference showing in every workflow.",
  },
  {
    n: "02",
    h: "The decision engine",
    b: "The moment an application is submitted, it's scored automatically against your risk matrix and routed — approved directly, or forwarded to committee the instant your threshold is hit. This is the calculation most platforms in this market still make a person do.",
  },
  {
    n: "03",
    h: "Compliance you can show, not promise",
    b: "NCA pre-screening that cannot be bypassed, a weighted risk engine, POPIA field-level logging, DSAR with a 21-business-day SLA, committee approval and a 7-year audit trail. UAT was passed by the client's own Risk, Compliance & Legal Officer with zero critical issues.",
  },
  {
    n: "04",
    h: "Your data moves with you",
    b: "Import your .xlsx or .csv book directly. Run APEX in parallel until you're comfortable. Your own compliance officer signs off the close. Full go-live in 60 days — with a 90-day defects liability period after every deployment.",
  },
  {
    n: "05",
    h: "A platform, not a patchwork",
    b: "24 modules across 8 stages — CRM, origination, approvals, loan administration, collections, reporting, automation, system administration — in one system. No more gluing a CRM to a loan tracker to a spreadsheet.",
  },
  {
    n: "06",
    h: "Built for the whole business",
    b: "Origination runs the book, accountants audit with a trail that already exists, IT and admin keep it secure and configured. One source of truth, every stakeholder sees what they need.",
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

      <section className="bg-white py-20 lg:py-28">
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

      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="eyebrow mb-4">The honest comparison</p>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,3vw,2.6rem)] text-white leading-tight">
              Spreadsheet. Generic CRM. Loan software. APEX.
            </h2>
            <p className="text-slate-300 mt-5 text-[16px] leading-relaxed">
              The buying decision isn&apos;t really between vendors — it&apos;s between four ways of running
              a lending book. We&apos;ve written the comparison honestly, including where APEX is the
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
                ["Modules", "24", "teal"],
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

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(1.8rem,3.4vw,2.9rem)] text-ink max-w-2xl mx-auto">
              See it on your own book.
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3.5">
              <Link href="/book" className="btn btn-primary">Book a 20-minute walkthrough</Link>
              <Link href="/calculator" className="btn btn-teal">See your impact live</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
