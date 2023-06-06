/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      screens: {
        sm: "0px",
        md: "767px",
        lg: "1100px",
        xl: "1400px",
      },
      colors: {
        main: "#171F2D",
        secondary: "#326EAC",
        "light-text": "#91A2AB",
        "medium-text": "#91A2AB",
        "dark-text": "#6E8A94",
      },
      width: {
        "max-app": "1000px",
        "image-portfolio": "125px",
        "halo-1": "150px",
        "halo-2": "135px",
      },
      height: {
        "image-portfolio": "125px",
        "halo-1": "150px",
        "halo-2": "135px",
      },
    },
  },
  plugins: [],
};
