import Link from "next/link";
import Reveal from "@/components/Reveal";
import ImportDemo from "@/components/ImportDemo";

export const metadata = {
  title: "Import demo — your data, mapped",
  description:
    "See how APEX imports your .xlsx or .csv customer data and maps it to the platform — deals, investor ledgers and client records. Runs in your browser, nothing uploaded.",
};

export default function ImportPage() {
  return (
    <>
      <section className="section-dark">
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-16 lg:pt-24">
          <Reveal>
            <p className="eyebrow mb-4">Data migration</p>
            <h1 className="font-display font-semibold text-section text-white max-w-3xl">
              Your data moves with you. See it mapped in 60 seconds.
            </h1>
            <p className="text-lead text-slate-300 mt-6 max-w-2xl">
              The fear enterprise buyers have isn&apos;t the software — it&apos;s the migration.
              Upload a workbook (or use the sample) and watch the columns map to APEX fields,
              right here in your browser. Nothing is uploaded anywhere.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <ImportDemo />
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid lg:grid-cols-3 gap-8">
          <Reveal>
            <div className="card h-full">
              <p className="num text-teal-600 text-lg mb-3">01</p>
              <h2 className="text-[16px] font-semibold text-ink mb-2">Import, don&apos;t retype</h2>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                .xlsx and .csv customer data imports directly — deals, investor ledgers and client
                records. You don&apos;t start from zero.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card h-full">
              <p className="num text-teal-600 text-lg mb-3">02</p>
              <h2 className="text-[16px] font-semibold text-ink mb-2">Run in parallel, then cut over</h2>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                Run APEX alongside your current process until you&apos;re comfortable. Your own Risk and
                Compliance officer signs off the close.
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="card h-full">
              <p className="num text-teal-600 text-lg mb-3">03</p>
              <h2 className="text-[16px] font-semibold text-ink mb-2">Go live once you&apos;re onboarded</h2>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                The platform is already built — this is onboarding, not development. Full production
                go-live with a 90-day defects liability period after every deployment.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-content mx-auto px-5 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(1.6rem,3vw,2.5rem)] text-ink max-w-2xl mx-auto">
              Read the full migration guide.
            </h2>
            <div className="mt-7">
              <Link href="/learn/excel-to-crm-migration-lenders" className="btn btn-teal">
                Migrating your lending book from Excel
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
