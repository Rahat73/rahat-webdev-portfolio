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

const textRevealParentVariant = {
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

const textRevealChildVariant = {
  hidden: { y: "-5vh", opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const navMenuParentVariant = {
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

const navMenuChildVariant = {
  hidden: { y: "-10vh", opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const paraRevealParentVariant = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      delayChildren: 0.75,
    },
  },
};

const paraRevealChildVariant = {
  hidden: { y: "-10vh", opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export {
  parentVariant,
  childVariant,
  parentVariant1,
  childVariant1,
  textRevealParentVariant,
  textRevealChildVariant,
  navMenuParentVariant,
  navMenuChildVariant,
  paraRevealParentVariant,
  paraRevealChildVariant,
};
