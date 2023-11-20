import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { childVariant1, parentVariant1 } from "../../variants/variants";

const Row = () => (
  <motion.div
    variants={childVariant1}
    className="bg-blue-900 min-h-full origin-top border-r border-stone-100 border-opacity-10"
  ></motion.div>
);

const NavPage = ({ setIsMenuOpen }) => {
  return (
    <motion.div
      variants={parentVariant1}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed top-0 left-0 bottom-0 right-0 pointer-events-auto grid grid-cols-12 origin-top"
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
      <motion.div
        variants={childVariant1}
        className="fixed top-0 left-0 bottom-0 right-0 space-x-5"
      >
        <Link to={"/"} onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link to={"/about-me"} onClick={() => setIsMenuOpen(false)}>
          About Me
        </Link>
        <Link to={"/skills"} onClick={() => setIsMenuOpen(false)}>
          Skills
        </Link>
        <Link to={"/projects"} onClick={() => setIsMenuOpen(false)}>
          Projects
        </Link>
        <Link to={"/education"} onClick={() => setIsMenuOpen(false)}>
          Education
        </Link>
        <Link to={"/contact"} onClick={() => setIsMenuOpen(false)}>
          contact
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NavPage;
