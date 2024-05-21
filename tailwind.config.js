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
        "primary-1": "#038584",
        "primary-2": "#343434",
        "primary-3": "#c2c2c0",
        "primary-4": "#7367f0",
      },
    },
  },
  plugins: [],
};
