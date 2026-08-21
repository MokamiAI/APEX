import Link from "next/link";
import Calculator from "@/components/Calculator";

export const metadata = { title: "Investor payout calculator" };

export default function CalculatorPage() {
  return (
    <>
      <section className="section-dark">
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-16 lg:pt-24">
          <p className="eyebrow mb-4">One module of APEX Enterprise · free tool · no signup</p>
          <h1 className="font-display font-semibold text-section text-white max-w-3xl">
            The settlement engine, on your own numbers.
          </h1>
          <p className="text-lead text-slate-300 mt-6 max-w-2xl">
            This is one capability inside the APEX Enterprise operating system: enter a deal from
            your book, and APEX applies every investor&apos;s model — 50/50 splits, fixed returns,
            penalty and reward rates — and shows the payout schedule and your retained margin.
            Exactly what the platform does at every settlement after go-live.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Calculator />
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="max-w-content mx-auto px-5 lg:px-8 text-center">
          <h2 className="font-display font-semibold text-[clamp(1.6rem,3vw,2.5rem)] text-ink max-w-2xl mx-auto">
            Your numbers stay in your browser. The platform does this for your whole book.
          </h2>
          <p className="text-slate-600 mt-4 max-w-xl mx-auto text-[15.5px] leading-relaxed">
            Every deal, every fund partner, every settlement — calculated automatically, notified via
            WhatsApp, visible in each investor&apos;s ledger.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3.5">
            <Link href="/how-it-works" className="btn btn-teal">See how a deal flows through APEX</Link>
            <Link href="/pricing" className="btn btn-ghost !text-ink !border-slate-300 hover:!bg-slate-100">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
