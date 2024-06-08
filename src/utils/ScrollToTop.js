import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Назва функції з великої літери ? Це не компонент, а функція.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);
}
