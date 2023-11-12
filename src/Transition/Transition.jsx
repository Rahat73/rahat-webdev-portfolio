import { motion } from "framer-motion";
import { childVariant1, parentVariant1 } from "../variants/variants";

const Row1 = () => (
  <motion.div
    variants={childVariant1}
    className="bg-fuchsia-800 min-h-full origin-left"
  ></motion.div>
);
const Row2 = () => (
  <motion.div
    variants={childVariant1}
    className="bg-fuchsia-800 min-h-full origin-right"
  ></motion.div>
);

const Transition = ({ children }) => {
  return (
    <>
      {children}
      <motion.div
        variants={parentVariant1}
        initial="hidden"
        animate="hidden"
        exit="visible"
        className="fixed top-0 left-0 w-full origin-left grid h-screen"
      >
        <Row1 />
        <Row1 />
        <Row1 />
        <Row1 />
        <Row1 />
      </motion.div>
      <motion.div
        variants={parentVariant1}
        initial="visible"
        animate="hidden"
        exit="hidden"
        className="fixed top-0 left-0 w-full origin-right grid h-screen"
      >
        <Row2 />
        <Row2 />
        <Row2 />
        <Row2 />
        <Row2 />
      </motion.div>
    </>
  );
};

export default Transition;
