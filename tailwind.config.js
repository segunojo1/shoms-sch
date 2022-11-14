/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "red",
        brightRed: "hsl(12, 88%, 59%)",
        purple: "#A02279"
      }
    },
  },
  plugins: [],
}
