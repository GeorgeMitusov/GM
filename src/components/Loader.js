import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { BarLoader } from 'react-spinners';

import '../styles/Loader.scss';

const Loader = () => {

  return (
    <motion.section 
      className='loader'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 1 }}
    >
      
      <AnimatePresence>

        <div className='loader-wrap'>

          <motion.span 
            className='loader-logo'
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1, ease: "easeIn"}}
          > 
            GM 
          </motion.span>

          <motion.div 
            className='loader-bar'
            initial={{ opacity: 0, filter: "blur(2px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          >
            <BarLoader 
              size={50} 
              color={'#ffffff'} 
              loading={true} 
              width="60%"
            />
          </motion.div>
        
        </div>

      </AnimatePresence>

    </motion.section>
  )
}

export default Loader;