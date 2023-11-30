import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Transition from "../../Transition/Transition";
import animation from "../../assets/developer-animation.json";
import HoverText from "../../Components/HoverText/HoverText";
import {
  textRevealParentVariant,
  textRevealChildVariant,
} from "../../variants/variants";

const Introduction = () => {
  return (
    <Transition>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10">
        <div className="h-[50vh] md:h-full col-span-1 flex flex-col justify-center items-center">
          <motion.div
            variants={textRevealParentVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-3xl mb-3 flex">
              <motion.p variants={textRevealChildVariant}>H</motion.p>
              <motion.p variants={textRevealChildVariant}>i</motion.p>
              <motion.p variants={textRevealChildVariant}>,</motion.p>
              <motion.p variants={textRevealChildVariant}>&nbsp;</motion.p>
              <motion.p variants={textRevealChildVariant}>I</motion.p>
              <motion.p variants={textRevealChildVariant}>&nbsp;</motion.p>
              <motion.p variants={textRevealChildVariant}>a</motion.p>
              <motion.p variants={textRevealChildVariant}>m</motion.p>
            </motion.div>
            <motion.div className="text-5xl md:text-6xl font-bold flex">
              <motion.p
                variants={textRevealChildVariant}
                animate={{
                  rotateY: 180,
                  transition: {
                    repeat: Infinity,
                    repeatDelay: 2,
                    repeatType: "mirror",
                    type: "spring",
                  },
                }}
                className="text-rose-400"
              >
                <HoverText>R</HoverText>
              </motion.p>
              <motion.p
                variants={textRevealChildVariant}
                whileHover={{
                  scale: 0.5,
                  rotate: 360,
                  transition: { type: "spring", damping: 8 },
                }}
              >
                <HoverText>A</HoverText>
              </motion.p>
              <motion.p
                variants={textRevealChildVariant}
                whileHover={{
                  scale: 0.5,
                  rotate: 360,
                  transition: { type: "spring", damping: 8 },
                }}
              >
                <HoverText>H</HoverText>
              </motion.p>
              <motion.p
                variants={textRevealChildVariant}
                whileHover={{
                  scale: 0.5,
                  rotate: 360,
                  transition: { type: "spring", damping: 8 },
                }}
              >
                <HoverText>A</HoverText>
              </motion.p>
              <motion.p
                variants={textRevealChildVariant}
                whileHover={{
                  scale: 0.5,
                  rotate: 360,
                  transition: { type: "spring", damping: 8 },
                }}
              >
                <HoverText>T</HoverText>
              </motion.p>
              <motion.p
                variants={textRevealChildVariant}
                whileHover={{
                  scale: 0.5,
                  rotate: 360,
                  transition: { type: "spring", damping: 8 },
                }}
              >
                &nbsp;
              </motion.p>
              <motion.p
                variants={textRevealChildVariant}
                animate={{
                  rotateY: 180,
                  transition: {
                    repeat: Infinity,
                    repeatDelay: 2,
                    repeatType: "mirror",
                    type: "spring",
                  },
                }}
                className="text-rose-400"
              >
                <HoverText>A</HoverText>
              </motion.p>
              <motion.p
                variants={textRevealChildVariant}
                whileHover={{
                  scale: 0.5,
                  rotate: 360,
                  transition: { type: "spring", damping: 8 },
                }}
              >
                <HoverText>S</HoverText>
              </motion.p>
              <motion.p
                variants={textRevealChildVariant}
                whileHover={{
                  scale: 0.5,
                  rotate: 360,
                  transition: { type: "spring", damping: 8 },
                }}
              >
                <HoverText>H</HoverText>
              </motion.p>
              <motion.p
                variants={textRevealChildVariant}
                whileHover={{
                  scale: 0.5,
                  rotate: 360,
                  transition: { type: "spring", damping: 8 },
                }}
              >
                <HoverText>I</HoverText>
              </motion.p>
              <motion.p
                variants={textRevealChildVariant}
                whileHover={{
                  scale: 0.5,
                  rotate: 360,
                  transition: { type: "spring", damping: 8 },
                }}
              >
                <HoverText>K</HoverText>
              </motion.p>
            </motion.div>
            <motion.div className="text-4xl flex">
              <motion.p variants={textRevealChildVariant}>W</motion.p>
              <motion.p variants={textRevealChildVariant}>e</motion.p>
              <motion.p variants={textRevealChildVariant}>b</motion.p>
              <motion.p variants={textRevealChildVariant}>&nbsp;</motion.p>
              <motion.p variants={textRevealChildVariant}>D</motion.p>
              <motion.p variants={textRevealChildVariant}>e</motion.p>
              <motion.p variants={textRevealChildVariant}>v</motion.p>
              <motion.p variants={textRevealChildVariant}>e</motion.p>
              <motion.p variants={textRevealChildVariant}>l</motion.p>
              <motion.p variants={textRevealChildVariant}>o</motion.p>
              <motion.p variants={textRevealChildVariant}>p</motion.p>
              <motion.p variants={textRevealChildVariant}>e</motion.p>
              <motion.p variants={textRevealChildVariant}>r</motion.p>
            </motion.div>
            <motion.div
              variants={textRevealChildVariant}
              className="mt-4 origin-left"
            >
              I like to craft{" "}
              <span className="text-rose-400">
                responsive, engaging, scalable
              </span>{" "}
              web applications <br />
              that ensures great user experience.
            </motion.div>
          </motion.div>
        </div>
        <div className="col-span-1">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
    </Transition>
  );
};

export default Introduction;
