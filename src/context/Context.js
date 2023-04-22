import { createContext, useState } from 'react';

import { faLinkedin, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';

import ProjectPic from '../assets/1.png';
import ProjectPicTwo from '../assets/2.jpg';
import ProjectPicThree from '../assets/3.png';
import ProjectPicFour from '../assets/4.jpeg';
import ProjectPicFive from '../assets/5.jpg';
import ProjectPicSix from '../assets/6.jpg';
import ProjectPicSeven from '../assets/7.png';
import ProjectPicEight from '../assets/8.png';

export const Context = createContext();

const mainTitleData = [
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

const projectsData = [
  {
    image: ProjectPicEight,
    title: 'Zakaz Germania',
    link: 'https://zakazgermania.onrender.com'
  },
  {
    image: ProjectPicFour,
    title: 'Glint',
    link: 'https://glint-ru4l.onrender.com'
  },
  {
    image: ProjectPicTwo,
    title: 'Shopping Cart',
    link: 'https://paramount-shopping.onrender.com'
  },
  {
    image: ProjectPic,
    title: 'Barbican',
    link: 'https://gallery-app-cm73.onrender.com'
  },
  {
    image: ProjectPicSeven,
    title: 'Task Tracker',
    link: 'https://task-tracker-jyxt.onrender.com'
  },
  {
    image: ProjectPicThree,
    title: 'Currency Converter',
    link: 'https://currency-swap.onrender.com'
  },
  {
    image: ProjectPicSix,
    title: 'Star Wars App',
    link: 'https://star-wars-app-2u46.onrender.com'
  },
  {
    image: ProjectPicFive,
    title: 'Pokedex App',
    link: 'https://pokedex-9jdo.onrender.com'
  }
]

const footerSocialsInfo = [
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

const DataProvider = ({ children }) => {
    
  const [ mainTitleInfo, setMainTitleInfo ] = useState(mainTitleData);
  const [ isContactOpened, setIsContactOpened ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ loadingContent, setLoadingContent ] = useState(true);
  const [ successMsg, setSuccessMsg ] = useState(false);
  const [ isFormSubmitting, setIsFormSubmitting ] = useState(false);
  const [ showTopBtn, setShowTopBtn ] = useState(false);

  const toggleIsContact = () => {
    setIsContactOpened( !isContactOpened )
  }

  const startFormSubmit = () => setIsFormSubmitting(true);

  return (
    <Context.Provider 
      value={{ mainTitleInfo, projectsData, 
        isContactOpened, setIsContactOpened, toggleIsContact,
        loading, setLoading, loadingContent, setLoadingContent,
        successMsg, setSuccessMsg, footerSocialsInfo,
        isFormSubmitting, setIsFormSubmitting, startFormSubmit,
        showTopBtn, setShowTopBtn
      }}
    >
      { children }
    </Context.Provider>
  )
}

export default DataProvider