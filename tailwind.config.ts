import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#008080", // Teal
        accent: "#40E0D0",  // Turquoise
        mint: "#F0FDFA",    // Light Mint
        navy: "#001f3f",    // Dark Navy
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
export default config;
