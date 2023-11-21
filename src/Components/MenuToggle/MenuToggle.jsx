import { motion } from "framer-motion";

const MenuToggle = ({ isMenuOpen }) => {
  return (
    <svg
      width="23"
      height="18"
      viewBox="0 0 23 18"
      fill="transparent"
      strokeWidth="3"
      stroke="white"
      strokeLinecap="round"
    >
      <motion.path
        animate={
          isMenuOpen ? { d: "M 3 16.5 L 17 2.5" } : { d: "M 2 2.5 L 20 2.5" }
        }
      />
      <motion.path
        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
        d="M 2 9.423 L 20 9.423"
      />
      <motion.path
        animate={
          isMenuOpen
            ? { d: "M 3 2.5 L 17 16.346" }
            : { d: "M 2 16.346 L 20 16.346" }
        }
      />
    </svg>
  );
};

export default MenuToggle;
