import { useLocation, useOutlet } from "react-router-dom";
import "./App.css";
import { Fragment, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PreLoader from "./PreLoader/PreLoader";
import BackgroundGrid from "./Components/Background/BackgroundGrid";
import NavPage from "./Pages/NavPage/NavPage";
import MenuToggle from "./Components/MenuToggle/MenuToggle";
import Cursor from "./Components/Cursor/Cursor";
import { textEnter, textLeave } from "./Components/Cursor/setCursor";

function App() {
  const outlet = useOutlet();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen text-rose-100 bg-slate-950 overflow-hidden font-Unbounded text-3xl">
      <PreLoader />
      <Cursor />
      {/* <BackgroundGradient /> */}
      <BackgroundGrid />
      <AnimatePresence>
        {isMenuOpen && <NavPage setIsMenuOpen={setIsMenuOpen} />}
      </AnimatePresence>
      <span
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className=" text-6xl"
      >
        Hello World
      </span>
      <div
        className="fixed top-7 right-7 rounded-full pointer-events-auto z-30"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <MenuToggle isMenuOpen={isMenuOpen} />
      </div>
      <AnimatePresence mode="wait">
        <Fragment key={location.pathname}>{outlet}</Fragment>
      </AnimatePresence>
    </div>
  );
}

export default App;
