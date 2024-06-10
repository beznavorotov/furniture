export default function scrollToTop(behavior) {
  return window.scrollTo({
    top: 0,
    left: 0,
    behavior: behavior,
  });
}

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
