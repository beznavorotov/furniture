import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { RootState } from '@/store';
import iconsSprite from '@/assets/icons_sprite.svg';

export const UserActionsNav = () => {
  const { pathname } = useLocation();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const totalCartItems = useSelector(
    (state: RootState) => state.cart.totalCartItems,
  );
  const totalFavorites = useSelector(
    (state: RootState) => state.favorites.items,
  );

  const setLinkActive = () => {
    return ['/profile', '/login', '/reset', '/signup'].includes(pathname)
      ? 'active'
      : '';
  };

  return (
    <nav className="user__actions">
      <NavLink to="/cart" className="user__actions--cart">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use className="icon-cart" xlinkHref={`${iconsSprite}#cart`} />
        </svg>
        <span className="user__actions--counter">{totalCartItems}</span>
      </NavLink>
      <NavLink
        to={isAuth ? '/favorites' : '/login'}
        className="user__actions--favorites"
      >
        <svg
          width="24"
          height="24"
          viewBox="-1 -2 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use
            className="icon-favorites"
            xlinkHref={`${iconsSprite}#fillHearth`}
          />
        </svg>
        <span className="user__actions--counter">{totalFavorites.length}</span>
      </NavLink>
      <NavLink to={isAuth ? '/profile' : '/login'} className={setLinkActive}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use className="icon-profile" xlinkHref={`${iconsSprite}#profile`} />
        </svg>
      </NavLink>
    </nav>
  );
};
