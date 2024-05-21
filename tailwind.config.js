/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "primary-1": "#5d596d",
        "primary-2": "#f8f7fa",
        "primary-3": "#fff",
        "primary-4": "#7367f0",
      },
    },
  },
  plugins: [],
};
