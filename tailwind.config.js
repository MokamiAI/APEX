/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Matches the real APEX product's own design tokens (apex.intermediateds.co.za):
        // --color-primary #1c4532, --color-primary-pale #d8f3dc, --color-background #f4f6f5.
        // "navy" keeps its old name (used across dozens of components) but now resolves
        // to a dark-forest-green ramp instead of navy-black, so dark sections read as
        // the real brand instead of an invented one.
        navy: {
          950: "#0d1f16",
          900: "#16301f",
          800: "#1c4532",
          700: "#2a5a41",
          600: "#3d7355",
        },
        ink: "#111827",
        slate: {
          50: "#f4f6f5",
          100: "#eef1ef",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
        },
        // "teal" keeps its old name too, now the real primary green + a bright
        // mint variant (derived from --color-primary-pale) for accents on dark bg.
        teal: {
          700: "#1c4532",
          600: "#235e3f",
          500: "#2f7a52",
          400: "#6bc490",
        },
        // The real product has no amber/orange anywhere — its one CTA color is the
        // primary green. "amber" now points at that so every existing btn-primary
        // usage becomes the real green button instead of an invented accent color.
        amber: {
          500: "#1c4532",
          600: "#16301f",
        },
        // "gold" is new — the real brand has no severity/highlight tier beyond
        // success/error, but this site's product mockups need a third visible
        // accent for things like "retained margin", PAR-bucket severity and
        // status dots (previously bright amber, which no longer exists as a
        // separate hue now that amber = the primary green).
        gold: {
          50: "#fbf3e3",
          500: "#d9a441",
          600: "#a8791f",
          700: "#7a5a17",
        },
        ok: "#16A34A",
        warn: "#DC2626",
      },
      fontFamily: {
        // The real product loads a single face — Manrope — everywhere, no separate
        // display/mono faces. Both keys point at it so any raw font-serif/font-mono
        // utility (if used directly) still matches the real brand.
        serif: ['"Manrope"', "system-ui", "-apple-system", "sans-serif"],
        sans: ['"Manrope"', "system-ui", "-apple-system", "sans-serif"],
        mono: ['"Manrope"', "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(2.75rem, 5.5vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        section: ["clamp(2rem, 3.6vw, 3.25rem)", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
        lead: ["clamp(1.15rem, 1.6vw, 1.4rem)", { lineHeight: "1.6" }],
      },
      maxWidth: {
        content: "1180px",
      },
      spacing: {
        section: "clamp(5rem, 10vw, 7.5rem)",
      },
    },
  },
  plugins: [],
};
