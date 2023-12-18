import { motion } from "framer-motion";
import { useWebsiteContext } from "../context/context";

export default function Header() {
  const { showModal } = useWebsiteContext();

  const customVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  };

  const customTransition = {
    duration: 1,
    delay: 2.2,
    ease: "easeIn",
  };

  return (
    <header className="navbar h-1/6 flex justify-between">
      <motion.span
        className="ml-4 cursor-pointer font-creattion text-4xl transition ease-in-out duration-300 hover:text-fourthColor
        "
        initial="hidden"
        animate="visible"
        variants={customVariants}
        transition={customTransition}
      >
        GM
      </motion.span>

      <motion.button
        className="btn btn-ghost font-thin font-selinoItalic 
          text-xl transition ease-in-out duration-300 hover:text-fourthColor
        "
        initial="hidden"
        animate="visible"
        variants={customVariants}
        transition={customTransition}
        onClick={showModal}
      >
        Contact
      </motion.button>
    </header>
  );
}

// import { motion } from "framer-motion";
// import { useWebsiteContext } from "../context/context";

// export default function Header() {

//   const { showModal } = useWebsiteContext();

//   const customVariants = {
//     hidden: { opacity: 0, filter: "blur(10px)" },
//     visible: { opacity: 1, filter: "blur(0px)" },
//   };

//   const customTransition = {
//     duration: 1,
//     delay: 2.2,
//     ease: "easeIn",
//   };

//   return (
//     <header className="navbar h-1/6 flex justify-between">
//       <motion.span
//         className="ml-10 cursor-pointer text-thirdColor font-creattion text-5xl
//           transition ease-in-out duration-300 hover:text-fourthColor"
//         initial="hidden"
//         animate="visible"
//         variants={customVariants}
//         transition={customTransition}
//       >
//         GM
//       </motion.span>

//       <motion.button
//         className="btn btn-ghost mr-10 text-thirdColor font-thin font-selinoItalic
//           text-2xl transition ease-in-out duration-300 hover:text-fourthColor"
//         initial="hidden"
//         animate="visible"
//         variants={customVariants}
//         transition={customTransition}
//         onClick={showModal}
//       >
//         Contact
//       </motion.button>
//     </header>
//   );
// }
