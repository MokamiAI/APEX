import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProductTour from "@/components/ProductTour";

export const metadata = { title: "Product tour — the 23 modules" };

export default function TourPage() {
  return (
    <>
      <section className="section-dark">
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-16 lg:pt-24">
          <Reveal>
            <p className="eyebrow mb-4">Product tour</p>
            <h1 className="font-display font-semibold text-section text-white max-w-3xl">
              Click through the platform. Every one of the 23 modules.
            </h1>
            <p className="text-lead text-slate-300 mt-6 max-w-2xl">
              This is the real APEX Enterprise interface — the Unified Financial Operating System.
              Browse the modules below; the settlement engine, the risk matrix, the committee
              workflow, the PAR buckets and the investor ledger are all in here.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-950 py-16 lg:py-24">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <ProductTour />
          </Reveal>
          <p className="text-center num text-[11px] text-slate-500 mt-4">
            Interface simulation mirroring the live platform · replaced by the real sandbox at launch
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid lg:grid-cols-3 gap-8">
          <Reveal>
            <div className="card h-full">
              <p className="eyebrow mb-3">The differentiator</p>
              <h2 className="font-display font-semibold text-2xl text-ink mb-3">The settlement moment</h2>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                When a deal settles, every investor&apos;s return is calculated automatically —
                each model applied, penalty and reward rates included, your retained margin shown.
              </p>
              <Link href="/calculator" className="btn btn-teal mt-6">Try it on your numbers</Link>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card h-full">
              <p className="eyebrow mb-3">The controls</p>
              <h2 className="font-display font-semibold text-2xl text-ink mb-3">Compliance built in</h2>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                NCA pre-screening that cannot be bypassed, committee approval above R1,000,000,
                POPIA field-level logging and a 7-year audit trail.
              </p>
              <Link href="/compliance" className="btn btn-teal mt-6">See the controls</Link>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="card h-full">
              <p className="eyebrow mb-3">The channels</p>
              <h2 className="font-display font-semibold text-2xl text-ink mb-3">Built for your investors</h2>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                Fund partners get a live ledger, automatic payout schedules and WF-107 WhatsApp
                notifications. Originators get transparent books.
              </p>
              <Link href="/for-fund-partners" className="btn btn-teal mt-6">See the fund partner view</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
