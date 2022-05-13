export const pageVariants = {
  initial: {
    opacity: 0,
    x: -15,
  },
  in: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
  out: {
    opacity: 0,
    y: -15,
  },
};

export const subtitleVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: { duration: 1 },
  },
  out: {
    opacity: 0,
  },
};
