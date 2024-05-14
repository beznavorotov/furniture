import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import cart from '../../assets/icons/cart.svg';
import heart from '../../assets/icons/heart.svg';
import user from '../../assets/icons/user.svg';
import { CatalogMenu } from '../CatalogMenu/CatalogMenu';

export const Header = () => {
  const setLinkActive = ({ isActive }: { isActive }) =>
    isActive ? 'active' : '';

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
                  <NavLink className={`nav-link ${setLinkActive}`} to="/">
                    Головна
                  </NavLink>
                </li>
                <li className="nav-item dropdown d-block d-sm-none">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Каталог товарів
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        Передпокій
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Вітальні
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Спальні
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Кухоні мебелі
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Дитячі мебелі
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Офісні мебелі
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Ванна кімната
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Гардеробні
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${setLinkActive}`}
                    to="/promotions"
                  >
                    Акції
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${setLinkActive}`}
                    to="/delivery"
                  >
                    Доставка і оплата
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${setLinkActive}`}
                    to="/contact"
                  >
                    Контакти
                  </NavLink>
                </li>
              </ul>

              <div className="header__search">
                <form className="d-flex form--search " role="search">
                  <label className="input-group" htmlFor="searchInput">
                    <input
                      id="searchInput"
                      type="search"
                      className="form-control"
                      placeholder="Пошук"
                      aria-label="Пошук"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn__search"
                      type="button"
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
                <nav className="user__actions">
                  <Link to="cart">
                    <img src={cart} alt="cart icon" />
                  </Link>
                  <Link to="favorites">
                    <img src={heart} alt="heart icon" />
                  </Link>
                  <Link to="login">
                    <img src={user} alt="user icon" />
                  </Link>
                </nav>
              </div>
              <CatalogMenu />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
