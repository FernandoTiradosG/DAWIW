/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'movile': '376px',
    },
    extend: {
      fontFamily: {
        'Hanken': ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

