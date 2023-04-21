import React, { useContext, useEffect } from 'react';
import { Context } from './context/Context';

import { motion, AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Main from './components/Main';
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import ProjectsList from "./components/ProjectsList";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Loader from './components/Loader';

import './styles/App.scss';

function App() {

  const { isContactOpened, loading, setLoading } = useContext(Context);

  useEffect(() => {
    window.addEventListener('load', () => {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        document.body.style.overflow = 'auto';
      }, 8000);
    });
  }, []);

  useEffect(() => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

    }, 3500);

  }, []);

  const content = isContactOpened ? <ContactForm key="contact-form" /> : (
      <motion.div 
        className='app-wrap'
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />

        <Main /> 

        <ScrollToTopBtn />

        <ProjectsList />

        <Footer />

      </motion.div>
  );

  return (
    <div className="App">
      
      <AnimatePresence>

        { loading ? <Loader /> : content }

      </AnimatePresence>

    </div>
  );
}

export default App;