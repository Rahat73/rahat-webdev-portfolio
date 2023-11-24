import { motion } from "framer-motion";
import { childVariant, parentVariant } from "../variants/variants";
const PreLoader = () => {
  return (
    <>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-101vw" }}
        transition={{ delay: 3 }}
        className="fixed top-0 left-0 w-full h-screen bg-slate-950 z-40"
      >
        <motion.div
          variants={parentVariant}
          initial="hidden"
          animate="visible"
          className="text-6xl font-light h-full flex justify-center items-center"
        >
          <motion.h1 variants={childVariant}>W</motion.h1>
          <motion.h1 variants={childVariant}>E</motion.h1>
          <motion.h1 variants={childVariant}>L</motion.h1>
          <motion.h1 variants={childVariant}>C</motion.h1>
          <motion.h1 variants={childVariant}>O</motion.h1>
          <motion.h1 variants={childVariant}>M</motion.h1>
          <motion.h1 variants={childVariant}>E</motion.h1>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: "-101vw" }}
        transition={{ delay: 1.75, duration: 2.25, ease: "anticipate" }}
        className="fixed top-0 left-0 w-full h-screen bg-slate-900 z-40"
      ></motion.div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: "-101vw" }}
        transition={{ delay: 2, duration: 2.25, ease: "anticipate" }}
        className="fixed top-0 left-0 w-full h-screen bg-rose-900 z-40"
      ></motion.div>{" "}
    </>
  );
};

export default PreLoader;
