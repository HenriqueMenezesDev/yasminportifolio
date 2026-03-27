/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DAEAD7", // Very Light Pastel Green
        accent: "#8BBD96", // Medium Pastel Green
        black: "#17231A",  // Deep Forest Green (Text)
        white: "#FFFFFF",  // Pure White
      },
      fontFamily: {
        heading: ['"Clash Display"', 'sans-serif'],
        body: ['"General Sans"', 'sans-serif'],
        display: ['"Gloria Hallelujah"', 'cursive'],
      }
    },
  },
  plugins: [],
}
