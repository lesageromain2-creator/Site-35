import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#1c1917", secondary: "#dc2626", accent: "#fef2f2" },
      fontFamily: { heading: ["var(--font-heading)"], body: ["var(--font-body)"] },
    },
  },
  plugins: [],
};
export default config;
