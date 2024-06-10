const scrollToTop = (behavior) => {
  return window.scrollTo({
    top: 0,
    left: 0,
    behavior: behavior,
  });
};

export default scrollToTop;
