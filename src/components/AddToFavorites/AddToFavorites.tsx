import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '@/store/slices/favoritesSlice';
import { RootState } from '@/store';
import { COLOR } from '@/constants';
import { Heart } from 'lucide-react';

export const AddToFavorites = ({ props, id }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const isFavorite = favorites.some((favItem) => favItem.id === id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      const {
        id,
        title,
        photo,
        colour,
        price,
        discount,
        article_code,
        quantity,
      } = props;
      dispatch(
        addFavorite({
          id,
          title,
          photo,
          colour,
          price,
          discount,
          article_code,
          quantity,
        }),
      );
    }
  };

  return (
    <button onClick={toggleFavorite} className="button__favorites">
      {isFavorite ? (
        <Heart fill={COLOR.BLUE} color={COLOR.BLUE} size={24} />
      ) : (
        <Heart size={24} color={COLOR.BLUE} />
      )}
    </button>
  );
};
