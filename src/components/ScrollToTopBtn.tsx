import React, { useEffect } from "react";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion, AnimatePresence } from "framer-motion";
import { useWebsiteContext } from "../context/context";

const ScrollToTopBtn = () => {
  const { showTopBtn, setShowTopBtn } = useWebsiteContext();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const btn = (
    <motion.button
      className="w-10 h-8 btn btn-outline text-thirdColor
        transition-all ease-in duration-500 
        fixed bottom-5 right-8 z-20 hover:text-fourthColor"
      onClick={goToTop}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0,
      }}
      transition={{
        ease: "easeOut",
        duration: 1,
      }}
      whileTap={{ scale: 0.2 }}
    >
      <FontAwesomeIcon className="scrollToTopBtn-icon" icon={faUpLong} />
    </motion.button>
  );

  const btnDisplay = showTopBtn && btn;

  return <AnimatePresence>{btnDisplay}</AnimatePresence>;
};

export default ScrollToTopBtn;
