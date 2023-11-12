import { Link, useLocation, useOutlet } from "react-router-dom";
import "./App.css";
import { Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import PreLoader from "./PreLoader/PreLoader";

function App() {
  const outlet = useOutlet();
  const location = useLocation();
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      <PreLoader />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className=" space-x-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/about-me"}>About Me</Link>
        <Link to={"/skills"}>Skills</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/education"}>Education</Link>
        <Link to={"/contact"}>contact</Link>
      </div>
      <AnimatePresence mode="wait">
        <Fragment key={location.pathname}>{outlet}</Fragment>
      </AnimatePresence>
    </div>
  );
}

export default App;
