import { useEffect } from "react";
import TagCloud from "TagCloud";

import "./TextSphere.css";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "ExpressJS",
        "JavaScript",
        "React",
        "Netlify",
        "MongoDB",
        "NodeJS",
        "JWT",
        "Firebase",
        "ES6",
        "Vercel",
        "GITHUB",
        "DOM",
        "Figma",
        "SQL",
        "Rest-API",
        "Tailwind",
        "Bootstrap",
        "Framer-Motion",
        "Axios",
        "TypeScript",
        "TanstackQuery",
        "dotENV",
        "Stripe",
        "Recharts",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;
