import { motion, AnimatePresence } from "framer-motion";

import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <motion.section
      className="w-full h-screen bg-mainColor flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence>
        <div className=" h-36 w-1/12 flex flex-col justify-around items-center">
          <motion.span
            className="font-creattion text-fourthColor text-8xl"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1, ease: "easeIn" }}
          >
            GM
          </motion.span>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, filter: "blur(2px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          >
            <BarLoader
              width={150}
              height={5}
              color={"#ffffff"}
              loading={true}
            />
          </motion.div>
        </div>
      </AnimatePresence>
    </motion.section>
  );
};

export default Loader;
