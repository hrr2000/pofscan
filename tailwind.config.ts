import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d1c1d",
        secondary: "#999999",
      },
      borderColor: {
        primary: "#4f4f4f"
      }
    },
  },
  plugins: [],
} satisfies Config;
