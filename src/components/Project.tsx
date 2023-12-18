import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { ProjectDataModel } from "../interfaces/ProjectDataModel";

export default function Project({ title, image, link }: ProjectDataModel) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeIn",
      },
    },
    hidden: {
      opacity: 0,
      y: 150,
      transition: {
        duration: 0.7,
        ease: "easeIn",
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="card w-11/12 bg-gradient shadow-xl mb-48 
        cursor-pointer border-secondaryColor border-2 rounded-3xl 
        flex items-center justify-center
      "
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <a className="h-4/6 w-full p-4 mt-3 peer" href={link}>
        <img
          src={image}
          alt="title"
          className="rounded-2xl w-full h-80 border-secondaryColor  
            shadow-customShadow transition ease-in-out delay-150 duration-700 
            outline-none bg-contain hover:translate-y-3 hover:shadow-none
          "
        />
      </a>
      <div
        className="card-body text-thirdColor transition ease-in-out 
          duration-700 peer-hover:text-fourthColor"
      >
        <h2 className="card-title font-medium text-2xl font-suisseWorks text-center">
          {" "}
          {title}{" "}
        </h2>
      </div>
    </motion.div>
  );
}
