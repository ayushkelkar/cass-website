/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006c42",
        "primary-light": "#00a863",
        "primary-dark": "#004d2e",
        dark: "#000000",
        light: "#FFFFFF",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        heading: ["'Barlow Condensed'", "sans-serif"],
        body: ["'Outfit'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-left": "slideLeft 0.7s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "scan": "scan 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideLeft: {
          from: { opacity: 0, transform: "translateX(-30px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,108,66,0.3)" },
          "50%": { boxShadow: "0 0 50px rgba(0,108,66,0.7)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};
