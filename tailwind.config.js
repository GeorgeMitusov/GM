/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "smMobile": "320px",
      "mdMobile": "375px",
      "lgMobile": "425px",
      "lLaptop": "1440px",
      "3xl": "1700px",
      "4xl": "1900px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        mainColor: "#10101a",
        secondaryColor: "#20222e",
        thirdColor: "#D3D3D3",
        fourthColor: "#FFFFFF",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(180deg, rgba(35,37,49,.5), rgba(15,15,24,.5))",
      },
      boxShadow: {
        customShadow: "0.1rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5)",
      },
      fontSize: {
        custom10: '10rem',
        custom12: '12rem',
        custom13: '12.5rem',
        custom15: '14.3rem',
        custom155: '15.8rem',
        custom16: '16.5rem',
        custom17: "17rem",
        custom19: "19.5rem",
      },
      height:{
        custom120: "26rem",
        custom140: "30rem",
      },
      fontFamily: {
        sourceL: ["sourceSansL", "sans-serif"],
        creattion: ["creattion", "sans-serif"],
        selino: ["selino-regular", "sans-serif"],
        selinoItalic: ["selino-italic", "sans-serif"],
        suisseWorks: ["suisseWorks", "sans-serif"],
        suisseInt: ["suisseInt", "sans-serif"],
        sourceEl: ["sourceSansEL", "sans-serif"],
        sourceR: ["sourceSansR", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

/*
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
"lLaptop": "1440px",
2xl	1536px	@media (min-width: 1536px) { ... }
"3xl": "1700px",
"4xl": "1900px",
*/