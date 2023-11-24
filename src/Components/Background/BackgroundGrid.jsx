// import { motion } from "framer-motion";

const BackgroundGrid = () => {
  const numDivs = 12;
  const divArray = Array.from({ length: numDivs }, (_, index) => index);

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 grid grid-cols-12 pointer-events-none">
      {/* grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))] min-[2560px]:grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] min-[2560px]:grid-rows-[repeat(auto-fit,_minmax(150px,_1fr))] */}
      {divArray.map((index) => (
        <div
          key={index}
          className="h-full w-full border border-rose-300 opacity-10 "
          // whileHover={{
          //   opacity: 0.5,
          //   transition: {
          //     duration: 0.1,
          //     ease: "easeInOut",
          //   },
          // }}
          // animate={{
          //   opacity: 0.1,
          //   transition: {
          //     duration: 0.5,
          //     ease: "easeInOut",
          //   },
          // }}
        ></div>
      ))}
    </div>
  );
};

export default BackgroundGrid;
