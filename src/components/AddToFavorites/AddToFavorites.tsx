import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoriteItem,
  delFavoriteItem,
} from '@/store/slices/favoritesSlice';
import { RootState } from '@/store';
import { COLOR } from '@/constants';
import { Heart } from 'lucide-react';

export const AddToFavorites = ({ id }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const isFavorite = favorites.some((favItem) => favItem.id === id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(delFavoriteItem(id));
    } else {
      dispatch(addFavoriteItem(id));
    }
  };

  return (
    <button onClick={toggleFavorite} className='button__favorites'>
      {isFavorite ? (
        <Heart fill={COLOR.BLUE} color={COLOR.BLUE} size={24} />
      ) : (
        <Heart size={24} color={COLOR.BLUE} />
      )}
    </button>
  );
};
