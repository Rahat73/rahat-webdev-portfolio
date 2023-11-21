import { useLocation, useOutlet } from "react-router-dom";
import "./App.css";
import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PreLoader from "./PreLoader/PreLoader";
import BackgroundGrid from "./Components/Background/BackgroundGrid";
import BackgroundGradient from "./Components/Background/BackgroundGradient";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import NavPage from "./Pages/NavPage/NavPage";
import MenuToggle from "./Components/MenuToggle/MenuToggle";

function App() {
  const outlet = useOutlet();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen text-slate-100 bg-fuchsia-950 overflow-hidden">
      <PreLoader />
      {/* <BackgroundGradient /> */}
      <BackgroundGrid />
      <AnimatePresence>
        {isMenuOpen && <NavPage setIsMenuOpen={setIsMenuOpen} />}
      </AnimatePresence>
      {/* <motion.div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <div
        className="fixed top-7 right-7 rounded-full pointer-events-auto z-30"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* {isMenuOpen ? <FaXmark /> : <FaBarsStaggered />} */}
        <MenuToggle isMenuOpen={isMenuOpen} />
      </div>
      <AnimatePresence mode="wait">
        <Fragment key={location.pathname}>{outlet}</Fragment>
      </AnimatePresence>
      {/* </motion.div> */}
    </div>
  );
}

export default App;
