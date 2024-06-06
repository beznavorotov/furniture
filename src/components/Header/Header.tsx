import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.webp';
import { CatalogMenu } from '../CatalogMenu/CatalogMenu';
import { SearchForm } from '../SearchForm/SearchForm';
import { useEffect, useRef, useState } from 'react';
import { setShowOverlay } from '../../store/slices/modalSlice';
import { useDispatch } from 'react-redux';

export const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const catalogDropDown = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        catalogDropDown.current &&
        !catalogDropDown.current.contains(event.target)
      ) {
        setShowMenu(false);
        dispatch(setShowOverlay(false));
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
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
              className="flex-column collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="header__navigation--list navbar-nav me-auto mb-2 mb-lg-0">
                <li
                  className={`nav-item catalog-menu__dropdown ${
                    showMenu ? 'show' : ''
                  }`}
                  ref={catalogDropDown}
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
                    <svg
                      width="15"
                      height="12"
                      viewBox="0 0 15 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.49995 0.5L11.5 4M3.49995 4L5.49995 0.5M12.78 4H2.21995C2.06997 3.99696 1.92123 4.02771 1.78474 4.08996C1.64825 4.15221 1.52752 4.24437 1.43149 4.35961C1.33545 4.47485 1.26657 4.61023 1.22996 4.7557C1.19334 4.90118 1.18992 5.05302 1.21995 5.2L2.31995 10.7C2.3667 10.9293 2.49238 11.1349 2.6751 11.2811C2.85781 11.4272 3.08601 11.5047 3.31995 11.5H11.68C11.9139 11.5047 12.1421 11.4272 12.3248 11.2811C12.5075 11.1349 12.6332 10.9293 12.68 10.7L13.78 5.2C13.81 5.05302 13.8066 4.90118 13.77 4.7557C13.7333 4.61023 13.6645 4.47485 13.5684 4.35961C13.4724 4.24437 13.3517 4.15221 13.2152 4.08996C13.0787 4.02771 12.9299 3.99696 12.78 4Z"
                        stroke="#003CA6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
