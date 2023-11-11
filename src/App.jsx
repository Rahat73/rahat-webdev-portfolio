import { Link, useLocation, useOutlet } from "react-router-dom";
import "./App.css";
import { Fragment } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const outlet = useOutlet();
  const location = useLocation();
  return (
    <>
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
    </>
  );
}

export default App;
