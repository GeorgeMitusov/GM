import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import '../styles/Project.scss';

const Project = ({ i }) => {

  const controls = useAnimation();
  const [ ref, inView ] = useInView();

  const variants = {
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: .7,
        ease: 'easeIn'
      }
    },
    hidden: { 
      opacity: 0, 
      y: 150,
      transition: {
        duration: .7,
        ease: 'easeIn' 
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div 
      className='project'
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    > 
      <a className='project-link' href={i.link}>
        <img className='project-image' src={i.image} alt={i.image} />
      </a>
      <h1 className='project-title'> {i.title} </h1>
    </motion.div>
  )
}

export default Project;