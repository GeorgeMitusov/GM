import React, { useContext } from 'react'
import { Context } from '../context/Context';
import { motion } from "framer-motion";
import '../styles/Header.scss';

const Header = () => {

  const { toggleIsContact } = useContext(Context);

  return (
    <header className='header'>

        <div className='header-wrap'>

          <motion.span 
            className='header-logo'
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 2.2, ease: "easeIn"}}
          > 
            GM 
          </motion.span>

          <motion.button
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 2.2, ease: "easeIn"}}
            onClick={toggleIsContact}
          > 
            Contact
          </motion.button>
            
        </div>

    </header>
  )
}

export default Header;
