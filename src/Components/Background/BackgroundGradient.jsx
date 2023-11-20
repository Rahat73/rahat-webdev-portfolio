import { motion } from "framer-motion";
import { blobVariant } from "../../variants/variants";
const BackgroundGradient = () => {
  return (
    <div className="blur-[100px] fixed left-0 top-0 right-0 bottom-0 opacity-50">
      <motion.div
        variants={blobVariant}
        animate="animate"
        className=" rounded-[50%] absolute h-5/6 w-3/4 bg-red-900 top-[-30%] left-[-30%]"
      ></motion.div>
      <motion.div
        variants={blobVariant}
        animate="animate"
        className=" rounded-[50%] absolute h-4/6 w-3/6 bg-yellow-600 top-[-15%] right-[-15%]"
      ></motion.div>
      <motion.div
        variants={blobVariant}
        animate="animate"
        className=" rounded-[50%] absolute h-4/6 w-5/6 bg-blue-900 bottom-[-10%] left-[-18%]"
      ></motion.div>
      <motion.div
        variants={blobVariant}
        animate="animate"
        className=" rounded-[50%] absolute h-3/6 w-3/6 bg-green-800 bottom-[-15%] right-[-20%]"
      ></motion.div>
    </div>
  );
};

export default BackgroundGradient;
