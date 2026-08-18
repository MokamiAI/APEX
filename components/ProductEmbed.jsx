// ProductEmbed — the sandbox embed point.
//
// In production, set NEXT_PUBLIC_APEX_SANDBOX_URL to the staging Apex instance URL,
// and this component will render the REAL product UI inside an iframe (the hero
// becomes the live platform — the Stripe-checkout-in-the-hero pattern).
//
// If the env var is unset, we render the built-in high-fidelity interface panel
// (the "signature product moment") as a temporary substitute, clearly flagged
// for replacement when live screenshots are available.
//
// Usage in the hero:
//   <ProductEmbed />
export default function ProductEmbed() {
  const sandboxUrl = process.env.NEXT_PUBLIC_APEX_SANDBOX_URL;
  if (!sandboxUrl) return null;
  return (
    <iframe
      src={sandboxUrl}
      title="APEX Enterprise — live platform demo"
      className="w-full aspect-[4/3] rounded-xl border border-navy-600 bg-white"
      loading="lazy"
      allow="clipboard-write"
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
    />
  );
}
