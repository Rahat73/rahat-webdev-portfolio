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
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
  visible: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.03,
    },
  },
};
const childVariant1 = {
  hidden: { scaleY: 0, transition: { duration: 0.75, ease: "anticipate" } },
  visible: { scaleY: 1, transition: { duration: 0.75, ease: "anticipate" } },
};

const textRevealVariant = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { delay: 4, duration: 0.5 } },
};

export {
  parentVariant,
  childVariant,
  parentVariant1,
  childVariant1,
  textRevealVariant,
};
