import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { ProjectDataModel } from "../interfaces/ProjectDataModel";

export default function Project({
  title,
  image,
  link,
  description,
}: ProjectDataModel) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [isHovered, setIsHovered] = useState<boolean>(false);

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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textColorClass = isHovered ? "text-fourthColor" : "text-thirdColor";

  return (
    <motion.div
      className="card h-min-custom120 w-11/12 bg-gradient shadow-xl mb-48 
        cursor-pointer border-secondaryColor border-2 rounded-3xl 
        flex items-center justify-center"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <a
        className="h-4/5 w-full md:w-11/12 p-4 sm:px-6 lg:p-0 lg:px-2 lg:pt-2 mt-3"
        href={link}
      >
        <img
          src={image}
          alt="title"
          className="rounded-2xl w-full h-64 lg:h-72 3xl:h-80 border-secondaryColor  
            shadow-customShadow transition ease-in-out delay-150 duration-700 
            outline-none bg-contain hover:translate-y-3 hover:shadow-none"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </a>

      <div className="collapse p-3 transition ease-in-out duration-700">
        <input type="checkbox" />
        <div className="collapse-title text-center flex items-center justify-center p-0">
          <h2
            className={`card-title font-medium text-2xl mdMobile:text-3xl
              transition ease-in-out duration-700 font-suisseWorks ${textColorClass}`}
          >
            {title}{" "}
          </h2>
        </div>
        <div className="collapse-content text-center ">
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
