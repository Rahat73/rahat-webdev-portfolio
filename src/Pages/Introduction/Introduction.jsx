import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Transition from "../../Transition/Transition";
import animation from "../../assets/developer-animation.json";
import HoverText from "../../Components/HoverText/HoverText";
import { textRevealVariant } from "../../variants/variants";

const Introduction = () => {
  return (
    <Transition>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10">
        <div className="h-[50vh] md:h-full col-span-1 flex flex-col justify-center items-center">
          <div>
            <motion.h3
              variants={textRevealVariant}
              initial="hidden"
              animate="visible"
              className="text-3xl mb-3 origin-left"
            >
              Hi, I am
            </motion.h3>
            <motion.h1
              variants={textRevealVariant}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl font-bold origin-left"
            >
              <HoverText>RAHAT ASHIK</HoverText>
            </motion.h1>
            <motion.h2
              variants={textRevealVariant}
              initial="hidden"
              animate="visible"
              className="text-4xl origin-left"
            >
              Web Devoloper
            </motion.h2>
            <motion.p
              variants={textRevealVariant}
              initial="hidden"
              animate="visible"
              className="mt-4 origin-left"
            >
              I like to craft{" "}
              <span className="text-rose-400">
                responsive, engaging, scalable
              </span>{" "}
              web applications <br />
              that ensures great user experience.
            </motion.p>
          </div>
        </div>
        <div className="col-span-1">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
    </Transition>
  );
};

export default Introduction;
