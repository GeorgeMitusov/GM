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
      className="w-full flex flex-col justify-center mdMobile:justify-around items-center
        overflow-hidden text-center 
        mdMobile:h-12 lgMobile:h-16 md:h-20
        lgMobile:px-2 sm:px-8
      "
    >
      <motion.p
        className="font-suisseWorks 
          text-xs mdMobile:text-sm lgMobile:text-md md:text-lg
          font-thin leading-loose tracking-wide mr-1 mdMobile:tracking-wider
            mdMobile:leading-relaxed lgMobile:leading-loose md:leading-9 
          "
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: item.delay1, ease: "easeIn" }}
      >
        <span>{item.text1}</span>
      </motion.p>

      <motion.p
        className="font-suisseWorks 
          text-xs mdMobile:text-sm lgMobile:text-md md:text-lg
          font-thin leading-loose tracking-wide"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: item.delay2, ease: "easeIn" }}
      >
        <span>{item.text2}</span>
      </motion.p>
    </div>
  ));

  return (
    <div className="hero h-5/6 lgMobile:h-4/5 flex flex-col justify-around 
      ">
      <div 
        className="w-full sm:w-9/12 h-full mdMobile:h-5/6 flex flex-col justify-center items-center
        "
        // border border-cyan-300
      >
        
        <div 
          className="w-10/12 lgMobile:w-11/12 sm:w-10/12 md:w-full flex justify-around items-center overflow-hidden
              font-suisseWorks text-fourthColor mb-2 lgMobile:mb-1 lgMobile:mt-10
              text-2xl mdMobile:text-3xl lgMobile:text-4xl md:text-5xl
              px-2 lgMobile:px-2.5 md:px-10 mdMobile:p-0
          "
            // border border-pink-300
        >
          <AnimatedText text="Front-end" delay={0.7} />
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
            transition ease-linear
          "
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


// import { motion } from "framer-motion";
// import { Link as ScrollLink } from "react-scroll";
// import { useWebsiteContext } from "../context/context";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle } from "@fortawesome/free-solid-svg-icons";

// import AnimatedText from "./AnimatedText";

// export default function Main() {
//   const { mainTitleData } = useWebsiteContext();

//   const block = mainTitleData.map((item, index) => (
//     <div
//       key={index}
//       className="w-10/12 flex justify-center items-center overflow-hidden text-center 2xl:w-full"
//     >
//       <motion.p
//         className="font-suisseWorks text-xl font-thin leading-loose tracking-wide mr-1 2xl:text-lg"
//         initial={{ y: 100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 1, delay: item.delay1, ease: "easeIn" }}
//       >
//         <span>{item.text1}</span>
//       </motion.p>

//       <motion.p
//         className="font-suisseWorks text-xl font-thin leading-loose tracking-wide"
//         initial={{ y: 100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 1, delay: item.delay2, ease: "easeIn" }}
//       >
//         <span>{item.text2}</span>
//       </motion.p>
//     </div>
//   ));

//   return (
//     <div className="hero h-5/6 flex flex-col justify-center">
//       <div 
//         className="w-3/5 h-3/5 mb-36 flex flex-col justify-center items-center 
//         "
//       >
        
//         <div 
//           className="w-2/3 p-2 mb-3 flex justify-around overflow-hidden font-suisseWorks
//            text-fourthColor text-7xl"
//         >
//           <AnimatedText text="Front-end" delay={0.7} />
//           <AnimatedText text="Developer" delay={0.9} />
//         </div>

//         {block}
//       </div>

//       <ScrollLink
//         className="w-6 h-12 cursor-pointer text-thirdColor hover:text-fourthColor"
//         to="section1"
//         smooth={true}
//         duration={2000}
//         spy={true}
//         offset={-80}
//       >
//         <motion.div
//           className="w-full h-full transition ease-linear flex justify-center items-center border rounded-3xl"
//           initial={{ y: 200 }}
//           animate={{ y: 0 }}
//           transition={{ duration: 1, delay: 2.5, ease: "easeIn" }}
//         >
//           <FontAwesomeIcon icon={faCircle} className="animate-bounce-slow" />
//         </motion.div>
//       </ScrollLink>
//     </div>
//   );
// }
