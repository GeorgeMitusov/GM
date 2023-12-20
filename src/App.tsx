import { useEffect } from "react";

import { ContextProvider, useWebsiteContext } from "./context/context";
import { motion, AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Main from "./components/Main";
import ProjectsList from "./components/ProjectsList";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Loader from "./components/Loader";

function App() {
  const { loader, setLoader } = useWebsiteContext();

  // useEffect(() => {
  //   setLoader(true);

  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 3500);
  // }, []);

  return (
    <AnimatePresence>
      {/* {loader ? <Loader /> : <AppContent />} */}
      {/* <Loader/> */}
      <AppContent />
    </AnimatePresence>
  );
}

function AppContent() {
  return (
    <motion.div
    // border border-red-500
      className="h-screen w-full bg-mainColor "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <Main />
      <ContactForm />
      <ProjectsList />
      <ScrollToTopBtn />
      <Footer />
    </motion.div>
  );
}

export default App;
