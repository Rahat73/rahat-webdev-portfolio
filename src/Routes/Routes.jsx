import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Contact from "../Pages/Contact/Contact";
import Education from "../Pages/Education/Education";
import Introduction from "../Pages/Introduction/Introduction";
import Projects from "../Pages/Projects/Projects";
import Skills from "../Pages/Skills/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Introduction /> },
      { path: "about-me", element: <AboutMe /> },
      { path: "skills", element: <Skills /> },
      { path: "projects", element: <Projects /> },
      { path: "education", element: <Education /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
