import { faLinkedin, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { TitleDataModel } from "../interfaces/TitleDataModel";

// import Pic from '../assets/1.png';
const Pic1 = require('../assets/Pic1.png') as string;
const Pic2 = require('../assets/Pic2.jpg') as string;
const Pic3 = require('../assets/Pic3.png') as string;
const Pic4 = require('../assets/Pic4.jpeg') as string;
const Pic5 = require('../assets/Pic5.jpg') as string;

const Pic6 = require('../assets/Pic6.jpg') as string;
const Pic7 = require('../assets/Pic7.png') as string;
const Pic8 = require('../assets/Pic8.png') as string;

export const mainTitleData: TitleDataModel[] = [
  {
    className: 'main-two',
    className2: 'main-two-text',
    delay1: 1.1,
    text1: "Hi! I'm George Mitusov, a Front-end Web",
    delay2: 1.3,
    text2: "Developer passionate about crafting",
  },
  {
    className: 'main-three',
    className2: 'main-three-text',
    delay1: 1.45,
    text1: "responsive and visually appealing websites",
    delay2: 1.6,
    text2: "that deliver seamless user experiences. With a",
  },
  {
    className: 'main-four',
    className2: 'main-four-text',
    delay1: 1.75,
    text1: "focus on clean and efficient code, I specialize",
    delay2: 1.9,
    text2: "in creating dynamic interfaces that engage",
  },
  {
    className: 'main-five',
    className2: 'main-five-text',
    delay1: 2,
    text1: "and delight users. Let's build something awesome together!"
  }
]

export const projectsData = [
  {
    image: Pic8,
    title: 'Zakaz Germania',
    link: 'https://zakazgermania.onrender.com'
  },
  {
    image: Pic4,
    title: 'Glint',
    link: 'https://glint-ru4l.onrender.com'
  },
  {
    image: Pic2,
    title: 'Shopping Cart',
    link: 'https://paramount-shopping.onrender.com'
  },
  {
    image: Pic1,
    title: 'Barbican',
    link: 'https://gallery-app-cm73.onrender.com'
  },
  {
    image: Pic3,
    title: 'Currency Converter',
    link: 'https://currency-exchange-ashy.vercel.app/'
  },
  {
    image: Pic7,
    title: 'Task Tracker',
    link: 'https://task-tracker-jyxt.onrender.com'
  },
  {
    image: Pic6,
    title: 'Star Wars App',
    link: 'https://star-wars-app-2u46.onrender.com'
  },
  {
    image: Pic5,
    title: 'Pokedex App',
    link: 'https://pokedex-9jdo.onrender.com'
  }
]

export const footerSocialsInfo = [
  {
    href: 'https://github.com/GeorgeMitusov/',
    className: 'github',
    icon: faGithub
  },
  {
    href: 'https://www.linkedin.com/in/george-mitusov-68b973143/',
    className: 'linkedin',
    icon: faLinkedin
  },
  {
    href: 'https://telegram.me/callme_george',
    className: 'telegram',
    icon: faTelegram
  },
]