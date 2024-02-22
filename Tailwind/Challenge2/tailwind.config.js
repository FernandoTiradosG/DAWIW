/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Trebuchet': ['Trebuchet MS', 'sans-serif'],
        'Bebas': ['Bebas Neue', 'sans-serif'],
        'WebSymbols': ['WebSymbolsRegular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

