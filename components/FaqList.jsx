"use client";

import { useState } from "react";

export default function FaqList({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="faq-item">
            <button
              type="button"
              className="faq-q"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span>{f.q}</span>
              <span
                className={`num text-teal-600 text-lg transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="faq-a anim-settle">
                <p>{f.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
