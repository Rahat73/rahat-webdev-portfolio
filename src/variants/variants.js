const parentVariant = {
  hidden: {
    scale: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
      delayChildren: 0.2,
    },
  },
  visible: {
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};
const childVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const parentVariant1 = {
  hidden: {
    scaleX: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    scaleX: 1,
    transition: {
      // when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};
const childVariant1 = {
  hidden: { scaleX: 0, transition: { duration: 1.25, ease: "anticipate" } },
  visible: { scaleX: 1, transition: { duration: 1.25, ease: "anticipate" } },
};

export { parentVariant, childVariant, parentVariant1, childVariant1 };
