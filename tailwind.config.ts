import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#E0F7FF",  // Bleu très clair
          100: "#B3EBFF", // Bleu pastel
          200: "#80DEFF", // Bleu ciel doux
          300: "#4DD1FF", // Bleu ciel vif
          400: "#1AC4FF", // Bleu turquoise
          500: "hsl(var(--primary))", // Bleu pur (00A4E1)
          600: "#008FCC", // Bleu intense
          700: "#0077B3", // Bleu profond
          800: "#005F8A", // Bleu nuit
          900: "#002848", // Bleu foncé
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        title: ["var(--font-title)", "var(--font-geist-sans)", "arial"],
        poppins: ["var(--poppins)"],
        worksans:["var(--font-worksans)"],
        bevietnampro:["var(--font-bevietnampro)"]
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    darkMode: ["class"],
  },
  plugins: [nextui(), require("tailwindcss-animate")],
} satisfies Config;
