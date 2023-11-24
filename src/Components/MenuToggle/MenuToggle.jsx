import { motion } from "framer-motion";

const MenuToggle = ({ isMenuOpen }) => {
  return (
    <svg
      width="40"
      height="30"
      viewBox="0 0 40 30"
      fill="transparent"
      strokeWidth="3"
      stroke="white"
      //   strokeLinecap="round"
    >
      <motion.path
        animate={
          isMenuOpen ? { d: "M 3 16.5 L 30 2.5" } : { d: "M 2 2.5 L 35 2.5" }
        }
      />
      <motion.path
        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
        d="M 2 9.423 L 20 9.423"
      />
      <motion.path
        animate={
          isMenuOpen
            ? { d: "M 3 2.5 L 30 16.346" }
            : { d: "M 2 16.346 L 35 16.346" }
        }
      />
    </svg>
  );
};

export default MenuToggle;
