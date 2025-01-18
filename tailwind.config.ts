import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001f",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        ovo: ["var(--font-ovo)", "sans-serif"],
      },
      boxShadow: {
        black: "4px 4px 0px #000",
        white: "4px 4px 0px #fff",
      },
    },
  },
  plugins: [],
} satisfies Config;
