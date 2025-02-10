import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primery: "var(--primery)",
        primeryDark: "var(--primeryDark)",
        secondary: "var(--secondary)",
        secondaryDark: "var(--secondaryDark)",
        gray: "var(--gray)",
        grayDark: "var(--grayDark)",
      },
    },
  },
  plugins: [],
} satisfies Config;
