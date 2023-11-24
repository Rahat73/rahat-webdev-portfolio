import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { childVariant1, parentVariant1 } from "../../variants/variants";

const Column = () => (
  <motion.div
    variants={childVariant1}
    className="bg-rose-950 min-h-full origin-top border-r border-rose-300 border-opacity-10"
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
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <motion.div
        variants={childVariant1}
        className="fixed h-full w-full flex flex-col justify-center items-center space-y-10 md:text-6xl font-semibold uppercase"
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
          Contact
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NavPage;
