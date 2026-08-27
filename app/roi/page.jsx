import Link from "next/link";
import Reveal from "@/components/Reveal";
import RoiCalculator from "@/components/RoiCalculator";

export const metadata = {
  title: "ROI calculator — what manual settlements are costing you",
  description:
    "Estimate what manual investor payout calculations cost your syndication business each year — hours, cost of time, and dispute exposure — then see APEX remove it at settlement.",
};

export default function RoiPage() {
  return (
    <>
      <section className="section-dark">
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-16 lg:pt-24">
          <Reveal>
            <p className="eyebrow mb-4">The cost of the status quo</p>
            <h1 className="font-display font-semibold text-section text-white max-w-3xl">
              What are manual settlements really costing you?
            </h1>
            <p className="text-lead text-slate-300 mt-6 max-w-2xl">
              Every settlement recalculated by hand is hours of your team&apos;s time — and every
              recalculated split carries a dispute risk you can&apos;t see coming. Put your numbers in.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <RoiCalculator />
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Reveal>
            <div className="card h-full">
              <p className="eyebrow mb-2">The fix</p>
              <h2 className="text-[17px] font-semibold text-ink mb-2">Automated at settlement</h2>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                APEX applies every investor&apos;s model the moment a deal settles — 50/50 splits, fixed
                returns, penalty and reward rates — and publishes the schedule. No formula in a head.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card h-full">
              <p className="eyebrow mb-2">The control</p>
              <h2 className="text-[17px] font-semibold text-ink mb-2">Dispute risk engineered out</h2>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                The same schedule is visible to every fund partner in their ledger, with WF-107
                notifications. A dispute over a calculated amount stops being a thing.
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="card h-full">
              <p className="eyebrow mb-2">The proof</p>
              <h2 className="text-[17px] font-semibold text-ink mb-2">Try it on your own book</h2>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                Run the payout calculator on a deal from your book — or import your workbook and
                watch it map to APEX in under a minute.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <Link href="/calculator" className="btn btn-teal !py-2 !px-4 !text-[13px]">Run the calculator</Link>
                <Link href="/import" className="btn btn-ghost !text-ink !border-slate-300 hover:!bg-slate-100 !py-2 !px-4 !text-[13px]">Import demo</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
