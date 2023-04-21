import React, { useEffect, useContext } from 'react';
import { Context } from '../context/Context';
import { faUpLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { motion, AnimatePresence } from 'framer-motion';

import '../styles/ScrollToTopBtn.scss';

const ScrollToTopBtn = () => {

    const { showTopBtn, setShowTopBtn } = useContext(Context);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if ( window.scrollY > 350 ) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        })
    }, [])

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const btn = (
        <motion.button 
            className='scrollToTopBtn'
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
                scale: 0
            }}
            transition={{ 
                ease: "easeOut", 
                duration: 1 
            }}
            whileTap={{ scale: .2 }}
        >
            <FontAwesomeIcon className='scrollToTopBtn-icon' icon={faUpLong} />
        </motion.button>
    )

    const btnDisplay = showTopBtn && btn;

    return (
        <AnimatePresence>
            { btnDisplay }
        </AnimatePresence>
    )

}

export default ScrollToTopBtn
