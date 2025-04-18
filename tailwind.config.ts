
import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Dark blue color palette
        background: {
          DEFAULT: "#0A192F",  // Deep navy blue
          secondary: "#112240", // Slightly lighter navy
        },
        foreground: {
          DEFAULT: "#E6F1FF",  // Soft light blue
          muted: "#8892B0",    // Grayish blue
        },
        primary: {
          DEFAULT: "#64FFDA",  // Vibrant teal accent
          foreground: "#0A192F", // Dark background for contrast
        },
        accent: {
          DEFAULT: "#233554",  // Muted blue-gray
          foreground: "#CCD6F6", // Light blue-gray text
        },
        border: "#233554", // Muted blue-gray border
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'blue-glow': '0 0 20px rgba(100, 255, 218, 0.2)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
