import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '@/store/slices/favoritesSlice';
import { RootState } from '@/store';
import iconsSVGSprite from '@/assets/icons_sprite.svg';

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
      <svg width="28" height="28" className="add-favorite">
        <use
          className={`${isFavorite ? 'heart heart__fill' : 'heart'}`}
          href={`${iconsSVGSprite}#fillHearth`}
        />
      </svg>
    </button>
  );
};
