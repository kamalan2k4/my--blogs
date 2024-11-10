/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:
      {
        darkblue: '#242424',
        post: '#373737',
        postp: '#494949',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
