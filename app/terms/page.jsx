import Link from "next/link";

export const metadata = {
  title: "Terms of service",
  description: "Terms governing the use of the APEX Enterprise website and its free tools.",
};

const SECTIONS = [
  {
    h: "1. Agreement",
    body: "These terms govern your use of the APEX Enterprise website operated by Intermediate Data Systems (Pty) Ltd (registration number available on request). By using this website you agree to these terms.",
  },
  {
    h: "2. The tools on this site",
    body: "The arrears & approval impact calculator, compliance readiness check and import demo are provided free for evaluation. Calculations are illustrative and are not financial, legal or investment advice. Always verify results against your professional advisors before acting.",
  },
  {
    h: "3. No client relationship",
    body: "Using the website or its tools does not create a client relationship with Intermediate Data Systems. A client relationship begins only when a written agreement for APEX Enterprise is signed.",
  },
  {
    h: "4. Intellectual property",
    body: "The APEX Enterprise name, the platform, the website content and the brand belong to Intermediate Data Systems (Pty) Ltd. You may not copy, redistribute or use them for commercial purposes without written permission.",
  },
  {
    h: "5. Acceptable use",
    body: "You agree not to misuse the site, attempt to disrupt it, or use its tools to process personal information of others without authority.",
  },
  {
    h: "6. Limitation of liability",
    body: "The website and tools are provided as-is. To the maximum extent permitted by law, Intermediate Data Systems is not liable for any loss arising from your use of the website or reliance on the tools.",
  },
  {
    h: "7. Changes",
    body: "We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the revised terms.",
  },
  {
    h: "8. Governing law",
    body: "These terms are governed by the laws of the Republic of South Africa, and any dispute is subject to the jurisdiction of the South African courts.",
  },
  {
    h: "9. Contact",
    body: "Questions about these terms: marcus@intermediateds.co.za.",
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="section-dark">
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-14 lg:pt-24">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display font-semibold text-section text-white max-w-3xl">Terms of service</h1>
          <p className="text-slate-400 mt-4 text-[15px] max-w-2xl leading-relaxed">
            Effective date: {new Date().toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-content mx-auto px-5 lg:px-8 max-w-3xl space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.h}>
              <h2 className="font-display font-semibold text-2xl text-ink mb-3">{s.h}</h2>
              <p className="text-[15.5px] leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
          <Link href="/" className="btn btn-teal">Back to home</Link>
        </div>
      </section>
    </>
  );
}
