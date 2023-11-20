import { motion } from "framer-motion";
import { childVariant1, parentVariant1 } from "../variants/variants";

const Row = () => (
  <motion.div
    variants={childVariant1}
    className="bg-slate-900 min-h-full origin-top border-r border-stone-100 border-opacity-10"
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
        className="fixed top-0 left-0 w-full origin-top grid grid-cols-12 h-screen"
      >
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </motion.div>
      <motion.div
        variants={parentVariant1}
        initial="visible"
        animate="hidden"
        exit="hidden"
        className="fixed top-0 left-0 w-full origin-top grid grid-cols-12 h-screen"
      >
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </motion.div>
    </>
  );
};

export default Transition;
