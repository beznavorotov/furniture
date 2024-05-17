import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Orders } from '../Orders/Orders';
import { MyData } from '../MyData/MyData';
import { Favorites } from '../Favorites/Favorites';
import { Reviews } from '../Reviews/Reviews';
import photoUser from '../../../assets/photo_user.png';
import arrow from '../../../assets/arrow.svg';

export const Menu = () => {
  const [MenuItem, setMenuItem] = useState('orders');
  const navigate = useNavigate();

  const renderComponent = () => {
    switch (MenuItem) {
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
              <h2 className="name_user">Ім'я Прізвище</h2>
              <a href="mailto:emailprofile@gmail.com">emailprofile@gmail.com</a>
            </div>
          </div>

          <ul>
            <li
              className={`btn_menu ${MenuItem === 'orders' ? 'active' : ''}`}
              onClick={() => setMenuItem('orders')}
            >
              Мої замовлення <img src={arrow} alt="" className="arrow" />
            </li>
            <li
              className={`btn_menu ${MenuItem === 'myData' ? 'active' : ''}`}
              onClick={() => setMenuItem('myData')}
            >
              Персональні дані <img src={arrow} alt="" className="arrow" />
            </li>
            <li
              className={`btn_menu ${MenuItem === 'favorites' ? 'active' : ''}`}
              onClick={() => setMenuItem('favorites')}
            >
              Список обраного <img src={arrow} alt="" className="arrow" />
            </li>
            <li
              className={`btn_menu ${MenuItem === 'reviews' ? 'active' : ''}`}
              onClick={() => setMenuItem('reviews')}
            >
              Мої відгуки <img src={arrow} alt="" className="arrow" />
            </li>
            <li
              className={`btn_menu btn__logout`}
              onClick={() => {
                Cookies.remove('refreshToken');
                localStorage.clear();
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
