/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    // "../shared-ui/src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  important: "#nova-mfe-shared-layout",
} satisfies Config;
