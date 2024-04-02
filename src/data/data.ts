import {
  faLinkedin,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { TitleDataModel } from "../interfaces/TitleDataModel";

import cv from "../assets/cv/GM_CV.pdf";

const Pic1 = require("../assets/Pic1.png") as string;
const Pic2 = require("../assets/Pic2.jpg") as string;
const Pic3 = require("../assets/Pic3.png") as string;
const Pic4 = require("../assets/Pic4.jpeg") as string;
const Pic5 = require("../assets/Pic5.jpg") as string;
const Pic6 = require("../assets/Pic6.jpg") as string;
const Pic7 = require("../assets/Pic7.png") as string;
const Pic8 = require("../assets/Pic8.png") as string;

export const mainTitleData: TitleDataModel[] = [
  {
    className: "main-two",
    className2: "main-two-text",
    delay1: 1.1,
    text1: "Hi! I'm George Mitusov, a Front-end Web",
    delay2: 1.3,
    text2: "Developer passionate about crafting",
  },
  {
    className: "main-three",
    className2: "main-three-text",
    delay1: 1.45,
    text1: "responsive and visually appealing websites",
    delay2: 1.6,
    text2: "that deliver seamless user experiences. With a",
  },
  {
    className: "main-four",
    className2: "main-four-text",
    delay1: 1.75,
    text1: "focus on clean and efficient code, I specialize",
    delay2: 1.9,
    text2: "in creating dynamic interfaces that engage",
  },
  {
    className: "main-five",
    className2: "main-five-text",
    delay1: 2,
    text1: "and delight users. Let's build something awesome together!",
  },
];

export const projectsData = [
  {
    image: Pic2,
    title: "Shopping Cart",
    link: "https://paramount-shopping.onrender.com",
    description: `Attempted to make an E-Commerce App that fetches data from a
      server, offers different types of clothing, allows users to interact by
      adding and removing items from a cart. On the checkout page,
      the user can place an order by submitting a form. React, Context
      API, Routing, Formik, etc. were used.
    `,
  },
  {
    image: Pic7,
    title: "Task Tracker",
    link: "https://task-manager-sable-kappa.vercel.app/",
    description: `An app that handles tasks. Users can add new, delete, edit, mark
      as accomplished, search, and show done tasks. Utilizes TypeScript,
      SCSS, Reducer, and more.
    `,
  },
  {
    image: Pic3,
    title: "Currency Converter",
    link: "https://currency-exchange-ashy.vercel.app/",
    description: `With the help of Angular users can easily convert a certain amount
      from one currency into another.
    `,
  },
  {
    image: Pic4,
    title: "Glint",
    link: "https://glint-ru4l.onrender.com",
    description: `Modern and stylish business website, that was made with React JS.    
      It is fully responsive, has an animating stats section, working contact form, 
      allows sending requests directly, and has its own portfolio section.
    `,
  },
  {
    image: Pic8,
    title: "Zakaz Germania",
    link: "https://zakazgermania.onrender.com",
    description: `The website for car dealers. That project was made by request.    
      It contains a few pages, where a customer can check all important information about the company, about the procedure of a car buying, check a price and actually select one for itself.    
      React, SCSS, Formik and others were used over here.
    `,
  },
  {
    image: Pic1,
    title: "Barbican",
    link: "https://gallery-two-gamma.vercel.app/",
    description: `Gallery Application. Page transition and other animations make a visual stunning effect for an user's experience.`,
  },
  {
    image: Pic6,
    title: "Star Wars App",
    link: "https://star-wars-app-2u46.onrender.com",
    description: `All about Star Wars. You can find information about characters, planets, ships and to see it all in details. That project was made with React and SCSS.`,
  },
  {
    image: Pic5,
    title: "Pokedex App",
    link: "https://pokedex-9jdo.onrender.com",
    description: `One of my first projects. Pokedex. Fetches data, displays it in a list, user can select a pokemon and go to a detailed view page to get more information or save it in favorites.
     I used Rect JS to build this project and other libraries as an extra.
    `,
  },
];

export const footerSocialsInfo = [
  {
    href: "https://github.com/GeorgeMitusov/",
    className: "github",
    icon: faGithub,
  },
  {
    href: "https://www.linkedin.com/in/george-mitusov-68b973143/",
    className: "linkedin",
    icon: faLinkedin,
  },
  {
    href: "https://telegram.me/callme_george",
    className: "telegram",
    icon: faTelegram,
  },
  {
    href: cv,
    className: "resume",
    icon: faFile,
  },
];
