import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  childVariant1,
  navMenuChildVariant,
  navMenuParentVariant,
  parentVariant1,
} from "../../variants/variants";
import HoverText from "../../Components/HoverText/HoverText";

const Column = ({ className }) => (
  <motion.div
    variants={childVariant1}
    className={`bg-rose-950 min-h-full origin-top border-r border-rose-300 border-opacity-10 ${className}`}
  ></motion.div>
);

const NavPage = ({ setIsMenuOpen }) => {
  return (
    <motion.div
      variants={parentVariant1}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed top-0 left-0 bottom-0 right-0 pointer-events-auto grid grid-cols-6 md:grid-cols-12 origin-top z-30"
    >
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column className={"hidden md:block"} />
      <Column className={"hidden md:block"} />
      <Column className={"hidden md:block"} />
      <Column className={"hidden md:block"} />
      <Column className={"hidden md:block"} />
      <Column className={"hidden md:block"} />
      <motion.div
        variants={navMenuParentVariant}
        className="fixed h-full w-full flex flex-col justify-center items-center space-y-10 md:text-6xl font-semibold uppercase origin-top"
      >
        <motion.div variants={navMenuChildVariant}>
          <Link to={"/"} onClick={() => setIsMenuOpen(false)}>
            <HoverText>Home</HoverText>
          </Link>
        </motion.div>
        <motion.div variants={navMenuChildVariant}>
          <Link to={"/about-me"} onClick={() => setIsMenuOpen(false)}>
            <HoverText>About Me</HoverText>
          </Link>
        </motion.div>
        <motion.div variants={navMenuChildVariant}>
          <Link to={"/skills"} onClick={() => setIsMenuOpen(false)}>
            <HoverText>Skills</HoverText>
          </Link>
        </motion.div>
        <motion.div variants={navMenuChildVariant}>
          <Link to={"/projects"} onClick={() => setIsMenuOpen(false)}>
            <HoverText>Projects</HoverText>
          </Link>
        </motion.div>
        <motion.div variants={navMenuChildVariant}>
          <Link to={"/education"} onClick={() => setIsMenuOpen(false)}>
            <HoverText>Education</HoverText>
          </Link>
        </motion.div>
        <motion.div variants={navMenuChildVariant}>
          <Link to={"/contact"} onClick={() => setIsMenuOpen(false)}>
            <HoverText>Contact</HoverText>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NavPage;
