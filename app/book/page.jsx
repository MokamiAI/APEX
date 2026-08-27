import Link from "next/link";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Book a walkthrough — APEX Enterprise",
  description:
    "Book a 20-minute walkthrough of APEX Enterprise. We'll show your own investor splits calculated live — and rebuild your Monday report on your book.",
};

export default function BookPage() {
  return (
    <>
      <section className="section-dark">
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-16 lg:pt-24">
          <Reveal>
            <p className="eyebrow mb-4">Book a walkthrough</p>
            <h1 className="font-display font-semibold text-section text-white max-w-3xl">
              Twenty minutes. Your numbers. Live.
            </h1>
            <p className="text-lead text-slate-300 mt-6 max-w-2xl">
              Bring a settled deal from your book — we&apos;ll show its payout schedule calculated by
              APEX in real time, and rebuild your Monday report in front of you. No slideware, no
              generic demo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <BookingForm purpose="walkthrough" />
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 lg:sticky lg:top-24">
              <div>
                <p className="eyebrow mb-3">What you&apos;ll see</p>
                <ul className="space-y-3">
                  {[
                    ["Your payout schedule, generated live", "Enter a deal from your book — every investor's model applied, your margin shown."],
                    ["Your Monday report, rebuilt", "Portfolio health, aging schedule, collector performance — assembled automatically."],
                    ["Your compliance trail, proven", "Field-level logging, committee workflow, the 7-year audit trail — live."],
                    ["Your migration path", "Your workbook mapped to APEX fields — see it before you commit."],
                  ].map(([t, d]) => (
                    <li key={t} className="flex gap-3.5">
                      <span className="text-teal-600 font-bold mt-0.5">✓</span>
                      <div>
                        <p className="text-[15px] font-semibold text-ink">{t}</p>
                        <p className="text-[13.5px] text-slate-500 mt-0.5 leading-relaxed">{d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-navy-950 p-6 border border-navy-700">
                <p className="ui-kicker !text-slate-500 mb-3">Before the call</p>
                <p className="text-[14px] text-slate-300 leading-relaxed">
                  Send one settled deal from your book — one row, that&apos;s all. We&apos;ll have its payout
                  schedule ready when you join. No prep beyond that.
                </p>
              </div>
              <p className="text-[13px] text-slate-500 leading-relaxed">
                Prefer to skip the call entirely?{" "}
                <Link href="/calculator" className="text-teal-700 font-semibold underline underline-offset-4">
                  Run the calculator
                </Link>{" "}
                or take the{" "}
                <Link href="/compliance-audit" className="text-teal-700 font-semibold underline underline-offset-4">
                  compliance readiness check
                </Link>{" "}
                now.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
