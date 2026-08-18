"use client";

import { WHATSAPP_NUMBER } from "@/lib/data";
import { track, EVENTS } from "@/lib/analytics";

// Floating WhatsApp CTA — the buyer's operating channel.
// Links to wa.me with a pre-filled message; real Meta API inbound
// routing replaces this link in production.
export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi — I'd like to see APEX Enterprise on my own book. Can we arrange a 20-minute walkthrough?"
  );
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      onClick={() => track(EVENTS.whatsappClick, {})}
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex items-center justify-center sm:justify-start gap-2 rounded-full bg-[#25D366] text-white w-12 h-12 sm:w-auto sm:h-auto sm:pl-2 sm:pr-4 sm:py-2 shadow-xl shadow-black/25 hover:scale-[1.03] transition-transform"
      aria-label="Chat with us on WhatsApp"
    >
      <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className="sm:w-7 sm:h-7">
        <path d="M16 2.5A13.4 13.4 0 0 0 4.4 20.8L2.6 29l8.4-2.2A13.4 13.4 0 1 0 16 2.5Zm0 24.5a11 11 0 0 1-5.6-1.5l-.4-.2-5 1.3 1.3-4.9-.3-.5A11 11 0 1 1 16 27Zm6-8.2c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.1-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3Z" />
      </svg>
      <span className="hidden sm:inline text-[14px] font-semibold">WhatsApp us</span>
    </a>
  );
}
