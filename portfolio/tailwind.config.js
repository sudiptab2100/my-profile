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
        accent2: {
          DEFAULT: "#12d8ff",
          hover: "#00c2ef",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 0 24px rgba(0,255,153,0.25)",
        "glow-lg": "0 0 60px rgba(0,255,153,0.35)",
        glass: "0 20px 45px -20px rgba(0,0,0,0.55)",
        "glass-lg": "0 30px 70px -25px rgba(0,0,0,0.65)",
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
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        gradientPan: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.82)" },
        },
        auroraDrift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(4%, -3%, 0)" },
        },
      },
      animation: {
        spinRing: "spinRing 22s linear infinite",
        orbit: "spinRing 14s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        breath: "breath 14s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        "gradient-pan": "gradientPan 6s ease infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "aurora-drift": "auroraDrift 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
