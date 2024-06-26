import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/';
import { Orders } from '@/components/Profile/Orders/Orders';
import { MyData } from '@/components/Profile/MyData/MyData';
import { Favorites } from '@/components/Profile/Favorites/Favorites';
import { Reviews } from '@/components/Profile/Reviews/Reviews';
import photoUser from '@/assets/photo_user.png';
import arrow from '@/assets/arrow.svg';
import { logout } from '@/store/slices/authSlice';

export const Menu = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const userMail = useSelector((state: RootState) => state.auth.user);
  const [menuItem, setMenuItem] = useState('orders');
  const navigate = useNavigate();

  const renderComponent = () => {
    switch (menuItem) {
      case 'orders':
        return <Orders />;
      case 'myData':
        return <MyData />;
      case 'favorites':
        return <Favorites />;
      case 'reviews':
        return <Reviews />;
      default:
        return null;
    }
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
              <h2 className="name_user">Користувач</h2>
              <a href="/">{isAuth ? userMail : 'Авторизуйтесь'}</a>
            </div>
          </div>

          <ul>
            <li
              className={`button_menu ${menuItem === 'orders' ? 'active' : ''}`}
              onClick={() => setMenuItem('orders')}
            >
              Мої замовлення <img src={arrow} alt="" className="arrow" />
            </li>
            <li
              className={`button_menu ${menuItem === 'myData' ? 'active' : ''}`}
              onClick={() => setMenuItem('myData')}
            >
              Персональні дані <img src={arrow} alt="" className="arrow" />
            </li>
            <li
              className={`button_menu ${
                menuItem === 'favorites' ? 'active' : ''
              }`}
              onClick={() => setMenuItem('favorites')}
            >
              Список обраного <img src={arrow} alt="" className="arrow" />
            </li>
            <li
              className={`button_menu ${
                menuItem === 'reviews' ? 'active' : ''
              }`}
              onClick={() => setMenuItem('reviews')}
            >
              Мої відгуки <img src={arrow} alt="" className="arrow" />
            </li>
            <li
              className={`button_menu button__logout`}
              onClick={() => {
                dispatch(logout());
                navigate('/login');
              }}
            >
              Вихід
            </li>
          </ul>
        </div>
        <div className="content">{renderComponent()}</div>
      </div>
    </div>
  );
};
