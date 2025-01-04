import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#050505",
          secondary: "#0F0F10",
          tertiary: "#19191A",
        },
        content: {
          body: "#CDCBCC",
          placeholder: "#827D7F",
          headline: "#B2B2B2",
        },
        border: {
          primary: "#19191A",
          secondary: "#323234",
          tertiary: "#97979B",
        },
        accent: {
          purple: "#4B2DBB",
          green: "#87BB2D",
          pink: "#B5446B"
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
