import { useLocation, useNavigate, NavLink } from 'react-router-dom';
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

  // Отримуємо firstName та email з userInfo
  const { firstName, email } = useSelector((state: RootState) => ({
    firstName: state.userInfo.data.first_name,
    email: state.userInfo.data.email,
  }));

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

  const NAV_LINKS_INFO = [
    {
      key: 'profileOrders',
      path: '/profile/orders',
      title: 'Мої замовлення',
    },
    {
      key: 'profileUserInfo',
      path: '/profile/userInfo',
      title: 'Персональні дані',
    },
    {
      key: 'profileFavorites',
      path: '/profile/favorites',
      title: 'Список обраного',
    },
    {
      key: 'profileReviews',
      path: '/profile/reviews',
      title: 'Мої відгуки',
    },
  ];

  return (
    <div className='container'>
      <div className='page'>
        <div className='sidebarMenu'>
          <div className='data'>
            <div className='photo'>
              <img src={photoUser} alt='icon user' className='icon_user' />
            </div>
            <div className='name'>
              <h2 className='name_user'>
                {isAuth ? `${firstName}` : 'Авторизуйтесь'}
              </h2>
              <span className='email'>{`${email}`}</span>
            </div>
          </div>

          <nav className='profile-navigation'>
            {NAV_LINKS_INFO.map(({ key, path, title }) => (
              <NavLink
                key={key}
                to={path}
                className={({ isActive }) =>
                  (isActive ? 'active' : '') + ' button_menu'
                }
              >
                {title} <img src={arrow} alt='arrow' className='arrow' />
              </NavLink>
            ))}
            <span className='button_menu button__logout' onClick={handleLogout}>
              Вихід
            </span>
          </nav>
        </div>
        <div className='content'>{renderComponent()}</div>
      </div>
    </div>
  );
};
