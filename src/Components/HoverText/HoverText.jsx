import { textEnter, textLeave } from "../Cursor/setCursor";

const HoverText = ({ children }) => {
  return (
    <span
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
      onMouseUp={textLeave}
      className="cursor-none"
    >
      {children}
    </span>
  );
};

export default HoverText;
