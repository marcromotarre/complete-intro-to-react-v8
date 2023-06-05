/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        main: "#171F2D",
        secondary: "#326EAC",
      },
      width: { "max-app": "1000px" },
    },
  },
  plugins: [],
};
