import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B3D91",
          dark: "#082A66",
          ink: "#12203A"
        },
        sky: {
          DEFAULT: "#4FA8E0",
          light: "#EAF4FC"
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E8CE7C"
        },
        paper: "#FAFAF7",
        mist: "#EEF1F5"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      backgroundImage: {
        "gold-thread":
          "linear-gradient(90deg, transparent 0%, #C9A227 20%, #E8CE7C 50%, #C9A227 80%, transparent 100%)"
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(11, 61, 145, 0.12)",
        card: "0 4px 24px rgba(18, 32, 58, 0.08)"
      },
      animation: {
        "thread-flow": "threadFlow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite"
      },
      keyframes: {
        threadFlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
