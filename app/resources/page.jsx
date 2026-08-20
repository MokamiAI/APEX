import Link from "next/link";
import Reveal from "@/components/Reveal";
import { LEARN, LEARN_CATEGORIES } from "@/lib/learn";

export const metadata = {
  title: "Guides & resources — APEX Enterprise",
  description:
    "Practical guides for lenders: automated approval routing, PAR buckets and collections, POPIA and NCA compliance, choosing lending software and more.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="section-dark">
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-16 lg:pt-24">
          <Reveal>
            <p className="eyebrow mb-4">Guides & resources</p>
            <h1 className="font-display font-semibold text-section text-white max-w-3xl">
              The questions lenders actually ask.
            </h1>
            <p className="text-lead text-slate-300 mt-6 max-w-2xl">
              Written for operators, risk officers and accountants — specific, honest, and always
              ending in a tool that proves the point on your own numbers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 space-y-16">
          {LEARN_CATEGORIES.map((cat) => {
            const items = LEARN.filter((l) => l.category === cat);
            return (
              <div key={cat}>
                <Reveal>
                  <p className="eyebrow mb-6">{cat}</p>
                </Reveal>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((l, i) => (
                    <Reveal key={l.slug} delay={(i % 3) * 60}>
                      <Link href={`/learn/${l.slug}`} className="card group h-full block hover:border-teal-500/50 transition-colors">
                        <h2 className="text-[16px] font-semibold text-ink leading-snug group-hover:text-teal-700 transition-colors">
                          {l.title}
                        </h2>
                        <p className="text-[13.5px] text-slate-500 mt-2.5 leading-relaxed line-clamp-3">{l.intro}</p>
                        <p className="num text-[11px] text-teal-700 mt-4">Read guide →</p>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="max-w-content mx-auto px-5 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(1.6rem,3vw,2.5rem)] text-ink max-w-2xl mx-auto">
              Skip the reading. Run the numbers.
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3.5">
              <Link href="/calculator" className="btn btn-primary">See your impact live</Link>
              <Link href="/compliance-audit" className="btn btn-teal">Run the readiness check</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
