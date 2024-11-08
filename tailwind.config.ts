import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancingScript: ['Dancing Script', 'cursive'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightBackground: "#ffffff",
        darkBackground: "#0f0c29",
        lightText: "#000000", 
        darkText: "#ffffff"
      },
    },
  },
  plugins: [],
};

export default config;
