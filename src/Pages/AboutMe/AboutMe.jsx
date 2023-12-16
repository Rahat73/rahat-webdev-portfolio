import Transition from "../../Transition/Transition";
import { motion } from "framer-motion";
import myImg from "../../assets/images/rahat.jpg";
import {
  paraRevealChildVariant,
  paraRevealParentVariant,
} from "../../variants/variants";

const AboutMe = () => {
  return (
    <Transition>
      <div className="h-screen grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 p-10">
        <div className="text-sm lg:text-base h-full w-5/6 mx-auto col-span-1 flex flex-col justify-center items-center text-justify">
          <motion.div
            variants={paraRevealParentVariant}
            initial="hidden"
            animate="visible"
            className="z-10 space-y-5"
          >
            <motion.p variants={paraRevealChildVariant}>
              Ever since I was a child, I found myself irresistibly drawn to the
              fascinating world of technology. Exploring new technologies became
              a natural curiosity for me, which fueled my fascination for
              computers, and eventually it organically evolved into a journey
              into the captivating realm of coding.
            </motion.p>
            <motion.p variants={paraRevealChildVariant}>
              Fast forward today, and you'll find me wielding the tools of
              React, Framer Motion, NodeJS, MongoDB, and anything JavaScript,
              HTML, and CSS related, building bridges between imagination and
              reality.
            </motion.p>
            <motion.p variants={paraRevealChildVariant}>
              When I'm not wrangling code, I'm capturing moments through the
              lens of my camera, or maybe exploring the vibrant stories woven
              into a captivating game.
            </motion.p>
            <motion.p variants={paraRevealChildVariant}>
              Currently I am seeking to elevate my expertise in a prestigious,
              stable organization by securing a coveted position and contribute
              my expertise and collaborate with forward-thinking professionals
              in an environment that fosters innovation and growth.
            </motion.p>
          </motion.div>
          <img className="fixed md:hidden opacity-50" src={myImg} alt="myImg" />
        </div>
        <div className="hidden col-span-1 mx-auto md:flex items-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="w-96 z-10"
            src={myImg}
            alt="myImg"
          />
        </div>
      </div>
    </Transition>
  );
};

export default AboutMe;
