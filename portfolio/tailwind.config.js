/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      sans: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
      mono: ["JetBrains Mono", "ui-monospace", "monospace"],
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        "black-100": "#000319",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
      },
      keyframes: {
        spinRing: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        scroll: {
          to: { transform: "translate(calc(-50% - 0.5rem))" },
        },
        breath: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.12)" },
        },
      },
      animation: {
        spinRing: "spinRing 22s linear infinite",
        orbit: "spinRing 14s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        breath: "breath 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
