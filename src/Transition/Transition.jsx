import { motion } from "framer-motion";

const Transition = ({ children }) => {
  return (
    <>
      {children}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full h-screen origin-left bg-slate-700"
      ></motion.div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full h-screen origin-right bg-slate-700"
      ></motion.div>
    </>
  );
};

export default Transition;
