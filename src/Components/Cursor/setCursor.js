let cursor = "default";
const textEnter = () => {
  cursor = "textHover";
};
const textLeave = () => {
  cursor = "default";
};

export { cursor, textEnter, textLeave };
