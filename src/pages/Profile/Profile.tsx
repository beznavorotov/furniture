import { useLocation, useNavigate, NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/';
import { Orders } from '@/pages/Profile/Orders/Orders';
import { UserInfo } from '@/pages/Profile/UserInfo/UserInfo';
import { Favorites } from '@/pages/Profile/Favorites/Favorites';
import { Reviews } from '@/pages/Profile/Reviews/Reviews';
import { logout } from '@/store/slices/authSlice';
import photoUser from '@/assets/photo_user.png';
import arrow from '@/assets/arrow.svg';

export const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const username = useSelector(
    (state: RootState) => state.auth.user?.username || 'Авторизуйтесь',
  );

  const renderComponent = () => {
    switch (location.pathname.split('/').pop()) {
      case 'profile':
        return <Orders />;
      case 'orders':
        return <Orders />;
      case 'userInfo':
        return <UserInfo />;
      case 'favorites':
        return <Favorites />;
      case 'reviews':
        return <Reviews />;
      default:
        return null;
    }
  };

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="page">
        <div className="sidebarMenu">
          <div className="data">
            <div className="photo">
              <img src={photoUser} alt="icon user" className="icon_user" />
            </div>
            <div className="name">
              <h2 className="name_user">
                {isAuth ? username : 'Авторизуйтесь'}
              </h2>
              <Link to="/">{isAuth ? username : 'Авторизуйтесь'}</Link>
            </div>
          </div>

          <nav className="profile-navigation">
            <NavLink
              to="/profile/orders"
              className={({ isActive }) =>
                (isActive ? 'active' : '') + ' button_menu'
              }
            >
              Мої замовлення <img src={arrow} alt="arrow" className="arrow" />
            </NavLink>
            <NavLink
              to="/profile/userInfo"
              className={({ isActive }) =>
                (isActive ? 'active' : '') + ' button_menu'
              }
            >
              Персональні дані <img src={arrow} alt="arrow" className="arrow" />
            </NavLink>
            <NavLink
              to="/profile/favorites"
              className={({ isActive }) =>
                (isActive ? 'active' : '') + ' button_menu'
              }
            >
              Список обраного <img src={arrow} alt="arrow" className="arrow" />
            </NavLink>
            <NavLink
              to="/profile/reviews"
              className={({ isActive }) =>
                (isActive ? 'active' : '') + ' button_menu'
              }
            >
              Мої відгуки <img src={arrow} alt="arrow" className="arrow" />
            </NavLink>
            <span className="button_menu button__logout" onClick={handleLogout}>
              Вихід
            </span>
          </nav>
        </div>
        <div className="content">{renderComponent()}</div>
      </div>
    </div>
  );
};
