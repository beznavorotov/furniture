function scrollToTop(behavior) {
  return window.scrollTo({
    top: 0,
    left: 0,
    behavior: behavior,
  });
}

export default scrollToTop;

//  default scrollToTop;

// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// export default function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: 'instant',
//     });
//   }, [pathname]);
// }
