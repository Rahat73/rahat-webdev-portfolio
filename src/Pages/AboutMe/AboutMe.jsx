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
              fascinating world of technology.{" "}
              <span className="text-rose-400">Exploring new technologies</span>{" "}
              became a natural curiosity for me, which fueled my fascination for
              computers, and eventually it organically evolved into a journey
              into the captivating realm of coding.
            </motion.p>
            <motion.p variants={paraRevealChildVariant}>
              Fast forward today, and you&apos;ll find me wielding the tools of{" "}
              <span className="text-rose-400">
                React, Framer Motion, NodeJS, MongoDB,
              </span>{" "}
              and anything{" "}
              <span className="text-rose-400">
                JavaScript, HTML, and CSS related, building bridges between
                imagination and reality
              </span>
              .
            </motion.p>
            <motion.p variants={paraRevealChildVariant}>
              When I&apos;m not wrangling code, I&apos;m{" "}
              <span className="text-rose-400">capturing moments</span> through
              the lens of my camera , or maybe{" "}
              <span className="text-rose-400">
                exploring the vibrant stories
              </span>{" "}
              woven into a captivating game.
            </motion.p>
            <motion.p variants={paraRevealChildVariant}>
              Currently I am seeking to{" "}
              <span className="text-rose-400">elevate my expertise</span> in a
              prestigious, stable organization by securing a coveted position
              and contribute my expertise and collaborate with{" "}
              <span className="text-rose-400">forward-thinking</span>{" "}
              professionals in an environment that fosters{" "}
              <span className="text-rose-400">innovation and growth.</span>
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
