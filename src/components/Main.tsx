import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useWebsiteContext } from "../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import AnimatedText from "./AnimatedText";

export default function Main() {
  const { mainTitleData } = useWebsiteContext();

  const block = mainTitleData.map((item, index) => (
    <div
      key={index}
      className="w-full lg:h-10 flex flex-col lg:flex-row justify-center mdMobile:justify-around lg:justify-center
        items-center overflow-hidden text-center mdMobile:px-2 sm:px-6 lg:p-0"
    >
      <motion.p
        className="font-suisseWorks 
          text-xs mdMobile:text-sm lgMobile:text-md md:text-md lg:text-lg
          font-thin mr-1 
          tracking-wide mdMobile:tracking-wider  
          leading-loose mdMobile:leading-loose md:leading-9 lg:leading-none"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: item.delay1, ease: "easeIn" }}
      >
        <span>{item.text1}</span>
      </motion.p>

      <motion.p
        className="font-suisseWorks 
          text-xs mdMobile:text-sm lgMobile:text-md md:text-md lg:text-lg
          font-thin tracking-wide mdMobile:tracking-wider
          leading-loose mdMobile:leading-loose"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: item.delay2, ease: "easeIn" }}
      >
        <span>{item.text2}</span>
      </motion.p>
    </div>
  ));

  return (
    <div className="hero h-5/6 lgMobile:h-4/5 flex flex-col justify-around">
      <div
        className="w-full sm:w-9/12 lg:w-10/12 h-5/6 mdMobile:h-5/6 
          flex flex-col justify-center items-center"
      >
        <div
          className="w-full py-2 font-suisseWorks text-fourthColor mb-2 overflow-hidden
            flex justify-center items-center px-2 
            lg:mb-3 lgMobile:mb-1 lgMobile:mt-10 md:mt-0
            text-2xl mdMobile:text-3xl lgMobile:text-4xl lg:text-6xl"
        >
          <AnimatedText text="Front-end" delay={0.7} className="mr-2 lg:mr-6" />
          <AnimatedText text="Developer" delay={0.9} />
        </div>

        {block}
      </div>

      <ScrollLink
        className="w-5 md:w-6 h-12 cursor-pointer text-thirdColor hover:text-fourthColor"
        to="section1"
        smooth={true}
        duration={2000}
        spy={true}
        offset={-80}
      >
        <motion.div
          className="w-full h-full flex justify-center items-center 
            border rounded-3xl text-xs md:text-sm
            transition ease-linear"
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 2.5, ease: "easeIn" }}
        >
          <FontAwesomeIcon icon={faCircle} className="animate-bounce-slow" />
        </motion.div>
      </ScrollLink>
    </div>
  );
}