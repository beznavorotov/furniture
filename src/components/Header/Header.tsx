import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.webp';
import { CatalogMenu } from '../CatalogMenu/CatalogMenu';
import { UserActionsNav } from '../UserActionsNav/UserActionsNav';

export const Header = () => {
  const { pathname } = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

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
                <li className="nav-item">
                  <NavLink
                    className={`nav-link catalog-link ${
                      pathname.includes('catalog') ? 'active' : ''
                    }`}
                    to="/catalog/1"
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
                  </NavLink>
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

              <div className="header__search">
                <form
                  className="d-flex form--search"
                  role="search"
                  onSubmit={handleSearch}
                >
                  <label className="input-group" htmlFor="searchInput">
                    <input
                      className="form-control"
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Пошук"
                      aria-label="Пошук"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="button__search"
                      type="submit"
                      id="button-addon2"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.0667 14L8.86667 9.8C8.53333 10.0667 8.15 10.2778 7.71667 10.4333C7.28333 10.5889 6.82222 10.6667 6.33333 10.6667C5.12222 10.6667 4.09733 10.2471 3.25867 9.408C2.42 8.56889 2.00044 7.544 2 6.33333C1.99956 5.12267 2.41911 4.09778 3.25867 3.25867C4.09822 2.41956 5.12311 2 6.33333 2C7.54356 2 8.56867 2.41956 9.40867 3.25867C10.2487 4.09778 10.668 5.12267 10.6667 6.33333C10.6667 6.82222 10.5889 7.28333 10.4333 7.71667C10.2778 8.15 10.0667 8.53333 9.8 8.86667L14 13.0667L13.0667 14ZM6.33333 9.33333C7.16667 9.33333 7.87511 9.04178 8.45867 8.45867C9.04222 7.87556 9.33378 7.16711 9.33333 6.33333C9.33289 5.49956 9.04133 4.79133 8.45867 4.20867C7.876 3.626 7.16756 3.33422 6.33333 3.33333C5.49911 3.33244 4.79089 3.62422 4.20867 4.20867C3.62644 4.79311 3.33467 5.50133 3.33333 6.33333C3.332 7.16533 3.62378 7.87378 4.20867 8.45867C4.79356 9.04356 5.50178 9.33511 6.33333 9.33333Z"
                          fill="#757575"
                        />
                      </svg>
                    </button>
                  </label>
                </form>
                <UserActionsNav />
              </div>
              <CatalogMenu />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
