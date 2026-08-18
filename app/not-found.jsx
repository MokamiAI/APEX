import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-dark min-h-[70vh] flex items-center">
      <div className="max-w-content mx-auto px-5 lg:px-8 text-center py-24">
        <p className="num text-teal-500 text-2xl mb-4">404</p>
        <h1 className="font-display font-semibold text-[clamp(2rem,4vw,3.4rem)] text-white leading-tight">
          This page doesn&apos;t exist in the system.
        </h1>
        <p className="text-slate-400 mt-5 max-w-md mx-auto text-[15.5px] leading-relaxed">
          The URL you followed isn&apos;t part of the platform. Here&apos;s where the real work happens.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3.5">
          <Link href="/" className="btn btn-primary">Back to home</Link>
          <Link href="/platform" className="btn btn-ghost">Explore the platform</Link>
        </div>
      </div>
    </section>
  );
}
