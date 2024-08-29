/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1220px",
        "2xl": "1220px",
      },
      colors: {
        white: {
          200: "#F1F5FF",
        },
        black: {
          900: "#151515",
        },
        orange: {
          300: "#EC6724",
        },
      },
    },
  },
  plugins: [],
};
