import Link from "next/link";
import Reveal from "@/components/Reveal";
import ComplianceAudit from "@/components/ComplianceAudit";

export const metadata = { title: "Compliance readiness check" };

export default function ComplianceAuditPage() {
  return (
    <>
      <section className="section-dark">
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-16 lg:pt-24">
          <Reveal>
            <p className="eyebrow mb-4">Free tool · no signup</p>
            <h1 className="font-display font-semibold text-section text-white max-w-3xl">
              The 12-point POPIA &amp; NCA readiness check.
            </h1>
            <p className="text-lead text-slate-300 mt-6 max-w-2xl">
              Twelve questions on the controls a regulated capital intermediary must have.
              A scored report names your specific gaps — and the APEX control that closes each one.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <ComplianceAudit />
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="max-w-content mx-auto px-5 lg:px-8 text-center">
          <h2 className="font-display font-semibold text-[clamp(1.6rem,3vw,2.5rem)] text-ink max-w-2xl mx-auto">
            Compliance isn&apos;t a page of promises. It&apos;s a system of enforced controls.
          </h2>
          <p className="text-slate-600 mt-4 max-w-xl mx-auto text-[15.5px] leading-relaxed">
            See the eight controls APEX enforces by default — NCA pre-screening, the weighted risk
            engine, field-level POPIA logging, committee approval and the 7-year audit trail.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3.5">
            <Link href="/compliance" className="btn btn-teal">See the controls</Link>
            <Link href="/calculator" className="btn btn-ghost !text-ink !border-slate-300 hover:!bg-slate-100">
              Back to the calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
