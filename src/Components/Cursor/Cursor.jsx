import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cursor } from "./setCursor";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const cursorVariant = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      //   transition: { duration: 0.1 },
    },
    textHover: {
      height: 150,
      width: 150,
      backgroundColor: "blue",
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      //   transition: { duration: 0.1 },
    },
  };

  return (
    <motion.div
      variants={cursorVariant}
      animate={cursor}
      className="w-[32px] h-[32px] rounded-full bg-rose-400 fixed top-0 left-0 z-30 pointer-events-none mix-blend-difference"
    />
  );
};

export default Cursor;
