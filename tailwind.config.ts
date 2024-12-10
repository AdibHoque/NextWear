import type {Config} from "tailwindcss";
import {nextui} from "@nextui-org/react";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          foreground: "#FFFFFF",
          DEFAULT: "#111111",
        },
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)", ...defaultTheme.fontFamily.sans],
        satoshiBold: [
          "var(--font-satoshi-bold)",
          ...defaultTheme.fontFamily.sans,
        ],
        integral: ["var(--font-integral)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
