import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CatalogMenu } from '@/components/CatalogMenu/CatalogMenu';
import { SearchForm } from '@/components/SearchForm/SearchForm';
import { setShowOverlay } from '@/store/slices/modalSlice';
import { handleClickOutside } from '@/utils/handleClickOutside';
import logo from '@/assets/logo.webp';
import { ShoppingBasket } from 'lucide-react';

export const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const catalogDropDownRef = useRef(null);
  const catalogMenuRef = useRef(null);

  useEffect(() => {
    const handleClick = handleClickOutside(catalogDropDownRef, () => {
      setShowMenu(false);
      dispatch(setShowOverlay(false));
    });

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line
  }, []);

  const element = catalogMenuRef.current;

  useEffect(() => {
    if (element && element.classList.contains('show')) {
      element.classList.remove('show');
    }

    setShowMenu(false);
    dispatch(setShowOverlay(false));

    // eslint-disable-next-line
  }, [location]);

  return (
    <div className="container">
      <header className="header" data-bs-theme="light">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <Link className="navbar-brand logo__main" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              ref={catalogMenuRef}
              className="flex-column collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="header__navigation--list navbar-nav me-auto mb-2 mb-lg-0">
                <li
                  className={`nav-item catalog-menu__dropdown ${
                    showMenu ? 'show' : ''
                  }`}
                  ref={catalogDropDownRef}
                >
                  {/* !!! dropDown menu */}
                  <button
                    className="catalog-link"
                    onClick={() => (
                      setShowMenu(!showMenu),
                      dispatch(setShowOverlay(!showMenu))
                    )}
                  >
                    Каталог
                    <ShoppingBasket strokeWidth={1} color="#003CA6" size={15} />
                  </button>

                  <CatalogMenu />
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Головна
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/promotions">
                    Акції
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/delivery">
                    Доставка і оплата
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Контакти
                  </NavLink>
                </li>
              </ul>

              <SearchForm />
              <CatalogMenu />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
