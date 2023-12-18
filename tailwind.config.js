/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "smMobile": "320px",
      "mdMobile": "375px",
      "lgMobile": "425px",
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
        custom: "17rem",
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
smMobile:text-cyan-400 
mdMobile:text-red-500 
lgMobile:text-cyan-400
sm:text-fuchsia-500 
md:text-teal-500
lg:text-slate-800 
xl:text-sky-600 
2xl:text-blue-700 
*/


/*
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }
*/