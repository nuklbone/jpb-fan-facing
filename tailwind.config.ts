import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/components/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/features/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/lib/**/*.{ts,tsx,js,jsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1d4ed8",
          foreground: "#f8fafc",
          muted: "#1e293b",
        },
        accent: {
          DEFAULT: "#f97316",
          foreground: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        glow: "0 15px 45px -15px rgb(30 64 175 / 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;