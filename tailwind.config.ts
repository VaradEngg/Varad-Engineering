import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        steel: "#1f2937",
        mist: "#f3f4f6",
        panel: "#e5e7eb",
        accent: "#c98a2b",
        accentSoft: "#e7d2a9",
      },
      boxShadow: {
        soft: "0 20px 45px rgba(17, 24, 39, 0.08)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
