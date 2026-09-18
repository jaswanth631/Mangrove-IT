import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050a14",
          900: "#0a1220",
          800: "#0f1a2e",
          700: "#162032",
        },
        accent: {
          DEFAULT: "#22d3ee",
          dark: "#0891b2",
          dim: "#0e7490",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["DM Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(34, 211, 238, 0.15)",
        "glow-lg": "0 0 60px rgba(34, 211, 238, 0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(24px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
