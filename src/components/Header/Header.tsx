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
                <form className="d-flex form--search" role="search">
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
                  <NavLink to="/cart" className={setLinkActive}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 19.65V18H6.9L7.8 16.35L21.6 15L24 6H5.55L4.5 1.5H0V3H3.3L6.45 15.6L4.5 19.5V21.75C4.5 22.95 5.55 24 6.75 24C7.95 24 9 22.95 9 21.75C9 20.55 7.95 19.5 6.75 19.5H18V21.75C18 22.95 19.05 24 20.25 24C21.45 24 22.5 22.95 22.5 21.75C22.5 20.7 21.9 19.95 21 19.65ZM6 7.5H22.05L20.4 13.5L7.8 14.85L6 7.5Z"
                        fill="none"
                      />
                    </svg>
                  </NavLink>
                  <NavLink to="/favorites" className={setLinkActive}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3115 5.92201C10.3997 5.00592 9.16143 4.48941 7.86894 4.48604C6.57644 4.48266 5.33551 4.9927 4.41896 5.90401C3.50765 6.82056 2.99762 8.06149 3.00099 9.35398C3.00437 10.6465 3.52088 11.8847 4.43696 12.7965L11.4975 19.8585C11.6381 19.9991 11.8288 20.0781 12.0277 20.0781C12.2266 20.0781 12.4173 19.9991 12.558 19.8585L19.5825 12.8385C20.4933 11.922 21.0031 10.6814 20.9997 9.38928C20.9963 8.09715 20.4801 6.85922 19.5645 5.94751C19.1128 5.49256 18.5759 5.13115 17.9844 4.88397C17.3929 4.6368 16.7585 4.50871 16.1174 4.50704C15.4764 4.50536 14.8413 4.63014 14.2485 4.87423C13.6558 5.11832 13.117 5.47692 12.663 5.92951L11.9925 6.60151L11.3115 5.92201ZM18.519 11.7795L12.03 18.267L5.49746 11.736C4.86304 11.1056 4.50479 10.2491 4.50142 9.35473C4.49804 8.46035 4.84981 7.6012 5.47946 6.96601C6.11432 6.33551 6.97357 5.98291 7.86831 5.98572C8.76306 5.98853 9.62007 6.34653 10.251 6.98101L11.466 8.19601C11.5366 8.26666 11.6207 8.3225 11.7132 8.36022C11.8057 8.39794 11.9048 8.4168 12.0047 8.41568C12.1046 8.41456 12.2033 8.39349 12.295 8.35371C12.3866 8.31393 12.4694 8.25623 12.5385 8.18401L13.7235 6.99001C14.0381 6.67688 14.4115 6.42892 14.8222 6.26032C15.2329 6.09172 15.6728 6.00579 16.1167 6.00746C16.5606 6.00914 16.9999 6.09837 17.4093 6.27006C17.8186 6.44175 18.1901 6.69252 18.5025 7.00801C19.1371 7.63869 19.4954 8.49559 19.4985 9.39034C19.5016 10.2851 19.1493 11.1444 18.519 11.7795Z"
                        fill="none"
                      />
                    </svg>
                  </NavLink>
                  <NavLink to="/login" className={setLinkActive}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.5 3.1875H4.5C4.1519 3.1875 3.81806 3.32578 3.57192 3.57192C3.32578 3.81806 3.1875 4.1519 3.1875 4.5V19.5C3.1875 19.8481 3.32578 20.1819 3.57192 20.4281C3.81806 20.6742 4.1519 20.8125 4.5 20.8125H19.5C19.8481 20.8125 20.1819 20.6742 20.4281 20.4281C20.6742 20.1819 20.8125 19.8481 20.8125 19.5V4.5C20.8125 4.1519 20.6742 3.81806 20.4281 3.57192C20.1819 3.32578 19.8481 3.1875 19.5 3.1875ZM8.8125 11.25C8.8125 10.6196 8.99944 10.0033 9.34969 9.47912C9.69994 8.95494 10.1978 8.54639 10.7802 8.30513C11.3626 8.06388 12.0035 8.00076 12.6219 8.12375C13.2402 8.24674 13.8081 8.55032 14.2539 8.9961C14.6997 9.44188 15.0033 10.0098 15.1263 10.6281C15.2492 11.2465 15.1861 11.8874 14.9449 12.4698C14.7036 13.0522 14.2951 13.5501 13.7709 13.9003C13.2467 14.2506 12.6304 14.4375 12 14.4375C11.1546 14.4375 10.3439 14.1017 9.7461 13.5039C9.14832 12.9061 8.8125 12.0954 8.8125 11.25ZM6.16594 19.6875C6.54957 18.6084 7.22333 17.656 8.11312 16.935C9.2137 16.0464 10.5855 15.5618 12 15.5618C13.4145 15.5618 14.7863 16.0464 15.8869 16.935C16.7767 17.656 17.4504 18.6084 17.8341 19.6875H6.16594ZM19.6875 19.5C19.6875 19.5497 19.6677 19.5974 19.6326 19.6326C19.5974 19.6677 19.5497 19.6875 19.5 19.6875H19.0153C18.6871 18.5684 18.0955 17.5441 17.2901 16.7007C16.4846 15.8572 15.4888 15.2191 14.3859 14.8397C15.1575 14.3273 15.7435 13.58 16.0574 12.7086C16.3712 11.8372 16.3962 10.8879 16.1285 10.0012C15.8609 9.11452 15.3149 8.33755 14.5714 7.78529C13.8278 7.23303 12.9262 6.93484 12 6.93484C11.0738 6.93484 10.1722 7.23303 9.42864 7.78529C8.68509 8.33755 8.13909 9.11452 7.87146 10.0012C7.60383 10.8879 7.62878 11.8372 7.94262 12.7086C8.25647 13.58 8.84253 14.3273 9.61406 14.8397C8.51122 15.2191 7.51536 15.8572 6.70991 16.7007C5.90445 17.5441 5.31286 18.5684 4.98469 19.6875H4.5C4.45027 19.6875 4.40258 19.6677 4.36742 19.6326C4.33225 19.5974 4.3125 19.5497 4.3125 19.5V4.5C4.3125 4.45027 4.33225 4.40258 4.36742 4.36742C4.40258 4.33225 4.45027 4.3125 4.5 4.3125H19.5C19.5497 4.3125 19.5974 4.33225 19.6326 4.36742C19.6677 4.40258 19.6875 4.45027 19.6875 4.5V19.5Z"
                        fill="none"
                      />
                    </svg>
                  </NavLink>
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
