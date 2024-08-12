import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const [menuItem, setMenuItem] = useState('orders');

  useEffect(() => {
    const path = location.pathname.split('/').pop();
    if (path) {
      setMenuItem(path);
    }
    if (path === 'profile') {
      setMenuItem('orders');
    }
  }, [location]);

  const renderComponent = () => {
    switch (menuItem) {
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
              <a href="/">{isAuth ? username : 'Авторизуйтесь'}</a>
            </div>
          </div>

          <ul>
            <li
              className={`button_menu ${menuItem === 'orders' ? 'active' : ''}`}
              onClick={() => setMenuItem('orders')}
            >
              Мої замовлення <img src={arrow} alt="arrow" className="arrow" />
            </li>
            <li
              className={`button_menu ${menuItem === 'userInfo' ? 'active' : ''}`}
              onClick={() => setMenuItem('userInfo')}
            >
              Персональні дані <img src={arrow} alt="arrow" className="arrow" />
            </li>
            <li
              className={`button_menu ${
                menuItem === 'favorites' ? 'active' : ''
              }`}
              onClick={() => setMenuItem('favorites')}
            >
              Список обраного <img src={arrow} alt="arrow" className="arrow" />
            </li>
            <li
              className={`button_menu ${
                menuItem === 'reviews' ? 'active' : ''
              }`}
              onClick={() => setMenuItem('reviews')}
            >
              Мої відгуки <img src={arrow} alt="arrow" className="arrow" />
            </li>
            <li className="button_menu button__logout" onClick={handleLogout}>
              Вихід
            </li>
          </ul>
        </div>
        <div className="content">{renderComponent()}</div>
      </div>
    </div>
  );
};
