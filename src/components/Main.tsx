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
      className="w-full flex flex-col justify-center items-center overflow-hidden text-center
      "
    >
      <motion.p
        className="font-suisseWorks text-xs font-thin leading-loose tracking-wide mr-1"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: item.delay1, ease: "easeIn" }}
      >
        <span>{item.text1}</span>
      </motion.p>

      <motion.p
        className="font-suisseWorks text-xs font-thin leading-loose tracking-wide"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: item.delay2, ease: "easeIn" }}
      >
        <span>{item.text2}</span>
      </motion.p>
    </div>
  ));

  return (
    <div className="hero h-5/6 flex flex-col justify-around ">
      <div 
        className="w-full h-full flex flex-col justify-center items-center 
        "
      >
        
        <div 
          className="w-10/12 flex justify-around items-center overflow-hidden font-suisseWorks
            text-fourthColor text-2xl mb-4 px-2
          "
        >
          <AnimatedText text="Front-end" delay={0.7} />
          <AnimatedText text="Developer" delay={0.9} />
        </div>

        {block}
      </div>

      <ScrollLink
        className="w-5 h-12 cursor-pointer text-thirdColor hover:text-fourthColor"
        to="section1"
        smooth={true}
        duration={2000}
        spy={true}
        offset={-80}
      >
        <motion.div
          className="w-full h-full flex justify-center items-center 
            border rounded-3xl text-xs
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
