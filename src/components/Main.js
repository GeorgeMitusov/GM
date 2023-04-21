import React, { useContext } from 'react'
import { Context } from '../context/Context';
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/Main.scss';

const Main = () => {

    const { mainTitleInfo } = useContext(Context);

    const block = mainTitleInfo.map( ( i, id ) => (
        <div key={id} className={i.className}>
             <motion.p
                className={i.className2}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: i.delay1, ease: "easeIn" }}
            >   
                <motion.span>
                    <span> {i.text1} </span>
                </motion.span>

                <motion.span> <span> &nbsp; </span> </motion.span>

                <motion.span
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: i.delay2, ease: "easeIn" }}
                >
                    <span>
                        { i.text2 }
                    </span>
                </motion.span>
            </motion.p>   
        </div>
    ))
   
    return (
        <main className='main'>

            <div className='main-wrap'>

                <div className="main-one">
                
                    <motion.h1  
                        className="main-one-text"
                        initial={{ y: 200 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.7, ease: "easeIn" }}
                    >
                        <motion.div>
                            <span id="one"> Front<span className='main-one-minus'>-</span>end </span>
                        </motion.div>

                        <motion.div>
                            <span id="three"> &nbsp; </span>
                        </motion.div>

                        <motion.div
                            initial={{ y: 200 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, delay: 0.9, ease: "easeIn" }}
                        >
                            <span id="two"> Developer </span>
                        </motion.div>
                    </motion.h1>
                    
                </div>
                
                { block }
                
            </div>
            
            <Link 
                className='main-scroll-down-wrap'
                to="section1"
                smooth={true}
                duration={2000}
                spy={true}
                exact="true"
                offset={-80}
            >
                <motion.div 
                    className='main-scroll-down'
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 2.5, ease: "easeIn" }}
                >
                    <FontAwesomeIcon icon={faCircle} className="fa-bounce" /> 
                </motion.div>
            </Link>

        </main>
    )
}

export default Main;
