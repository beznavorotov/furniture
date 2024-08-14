import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { RootState } from '@/store';
import { Heart, ShoppingCart, SquareUserRound } from 'lucide-react';
import { getCartItems } from '@/store/slices/cartSlice';
import { getFavoriteItems } from '@/store/slices/favoritesSlice';
import { COLOR } from '@/constants';

export const UserActionsNav = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const favorites = useSelector((state: RootState) => state.favorites.items);
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

  useEffect(() => {
    if (isAuth && (cart.length === 0 || favorites.length === 0)) {
      dispatch(getCartItems());
      dispatch(getFavoriteItems());
    }
    // eslint-disable-next-line
  }, [isAuth]);

  return (
    <nav className="user__actions">
      <NavLink to="/cart" className="user__actions--cart">
        <ShoppingCart color={COLOR.BLUE} size={24} strokeWidth={1.5} />
        <span className="user__actions--counter">{totalCartItems}</span>
      </NavLink>
      <NavLink
        to={isAuth ? '/profile/favorites' : '/login'}
        className="user__actions--favorites"
      >
        <Heart color={COLOR.BLUE} strokeWidth={1.5} size={24} />
        <span className="user__actions--counter">{totalFavorites.length}</span>
      </NavLink>
      <NavLink to={isAuth ? '/profile' : '/login'} className={setLinkActive}>
        <SquareUserRound color={COLOR.BLUE} strokeWidth={1.25} />
      </NavLink>
    </nav>
  );
};
