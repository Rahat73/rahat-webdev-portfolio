import Transition from "../../Transition/Transition";
import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import {
  SiBootstrap,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiMongodb,
  SiNetlify,
  SiTailwindcss,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import {
  paraRevealChildVariant,
  paraRevealParentVariant,
  textRevealChildVariant,
  textRevealParentVariant,
} from "../../variants/variants";
import TextShpere from "../../Components/TextSphere/TextSphere";

const Skills = () => {
  return (
    <Transition>
      <div className="h-screen grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 p-10">
        <motion.div
          variants={paraRevealParentVariant}
          initial="hidden"
          animate="visible"
          className="w-5/6 mx-auto h-full col-span-1 flex flex-col justify-center items-center space-y-10"
        >
          <motion.p variants={paraRevealChildVariant} className="text-justify">
            The <span className="text-rose-400">MERN stack</span> is my
            launchpad, crafting dynamic web experiences with MongoDB,
            Express.js, React.js, and Node.js. But my{" "}
            <span className="text-rose-400">thirst for knowledge</span> keeps me
            exploring, constantly adding new skills to my arsenal.
          </motion.p>
          <motion.div
            variants={textRevealParentVariant}
            initial="hidden"
            animate="visible"
            className="text-7xl grid grid-cols-5 gap-5"
          >
            <motion.div variants={textRevealChildVariant}>
              <FaJs />
            </motion.div>
            <motion.div variants={textRevealChildVariant}>
              <FaReact />
            </motion.div>
            <motion.div variants={textRevealChildVariant}>
              <FaNodeJs />
            </motion.div>
            <motion.div variants={textRevealChildVariant}>
              <SiMongodb />
            </motion.div>
            <motion.div variants={textRevealChildVariant}>
              <SiExpress />
            </motion.div>
            <motion.div variants={textRevealChildVariant}>
              <FaHtml5 />
            </motion.div>
            <motion.div variants={textRevealChildVariant}>
              <FaCss3Alt />
            </motion.div>
            <motion.div variants={textRevealChildVariant}>
              <SiTailwindcss />
            </motion.div>
            <motion.div variants={textRevealChildVariant}>
              <SiBootstrap />
            </motion.div>
            <motion.div variants={textRevealChildVariant}>
              <SiFramer />
            </motion.div>
            <motion.div variants={textRevealChildVariant}>
              <SiVisualstudiocode />
            </motion.div>
            <motion.div variants={textRevealChildVariant}>
              <FaGithub />
            </motion.div>
            <motion.div variants={textRevealChildVariant}>
              <SiFirebase />
            </motion.div>
            <motion.div variants={textRevealChildVariant}>
              <SiNetlify />
            </motion.div>
            <motion.div variants={textRevealChildVariant}>
              <SiVercel />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div>
          <TextShpere />
        </motion.div>
      </div>
    </Transition>
  );
};

export default Skills;
