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
        forest: {
          50:  "#f0faf5",
          100: "#d0f0e0",
          200: "#a0dfc0",
          400: "#3aaa70",
          500: "#10A870",
          700: "#0B6E4F",
          900: "#074D38",
        },
        cream: {
          50:  "#fdfaf4",
          100: "#f8f2e4",
          200: "#f0e4c8",
          300: "#e0c898",
          500: "#d4b896",
        },
        gold: {
          50:  "#fffbe8",
          100: "#fef2c0",
          200: "#fce47a",
          400: "#F0C84A",
          500: "#C9952A",
          700: "#A07020",
          900: "#6B4510",
        },
        terra: {
          400: "#FF6B35",
          500: "#D45B3A",
          700: "#9E3820",
        },
        sky: {
          400: "#4DA8F5",
          500: "#1A6BAD",
          700: "#0F4A80",
        },
        plum: {
          400: "#8F5AC0",
          500: "#5E2D8C",
          700: "#3E1A60",
        },
        stone: {
          50:  "#f8f8f6",
          100: "#efefeb",
          200: "#dededa",
          300: "#c8c8c2",
          400: "#9e9e97",
          600: "#5e5e58",
          700: "#4a4a45",
          900: "#1a1a18",
        },
        ink: "#0D1117",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans:    ["Outfit", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "22px",
        "4xl": "32px",
      },
      animation: {
        "fade-up":    "fadeUp 0.7s ease both",
        "fade-in":    "fadeIn 0.6s ease both",
        "float-card": "floatCard 4s ease-in-out infinite alternate",
        "pulse-dot":  "pulse 2s infinite",
        "bounce-cue": "bounce 2s infinite",
        "grad-shift": "gradShift 6s ease infinite",
        "count-roll": "countRoll 0.5s ease both",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        floatCard: {
          "0%":   { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-14px)" },
        },
        gradShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        countRoll: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial":  "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero":    "linear-gradient(135deg,#061A12 0%,#0B3D2A 35%,#1A6BAD 70%,#0D1117 100%)",
        "gradient-gold":    "linear-gradient(135deg,#A07020,#C9952A,#F0C84A)",
        "gradient-emerald": "linear-gradient(135deg,#074D38,#0B6E4F,#10A870)",
        "gradient-coral":   "linear-gradient(135deg,#9E3820,#D45B3A,#FF6B35)",
      },
      boxShadow: {
        "card":   "0 4px 24px rgba(0,0,0,0.07)",
        "card-lg":"0 20px 60px rgba(0,0,0,0.14)",
        "gold":   "0 12px 36px rgba(201,149,42,0.40)",
        "emerald":"0 12px 36px rgba(11,110,79,0.35)",
        "float":  "0 24px 64px rgba(0,0,0,0.45), 0 0 0 0.5px rgba(255,255,255,0.08)",
        "glass":  "0 8px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
      },
    },
  },
  plugins: [],
};
export default config;