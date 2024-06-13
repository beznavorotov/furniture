export default function scrollToTop(behavior: ScrollBehavior = 'smooth') {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: behavior,
  });
}
