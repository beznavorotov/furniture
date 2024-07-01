import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { StarsRating } from '@/components/StarsRating/StarsRating';
import { setShowModal, setModalData } from '@/store/slices/modalSlice';
import { addFavorite, removeFavorite } from '@/store/slices/favoritesSlice';
import heart from '@/assets/heart.svg';
import heartBlue from '@/assets/heart_blue.png';

const ProductCard = ({ props, stateType, cardSize }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const { title, price, discount, id, rating, photo } = props;

  const isFavorite = favorites.some(favItem => favItem.id === id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      const { id, title, photo, colour, price, discount, article_code, quantity } = props;
      dispatch(addFavorite({ id, title, photo, colour, price, discount, article_code, quantity }));
    }
  };

  const heartIcon = isFavorite ? heartBlue : heart;

  return (
    <div className={`product-card ${cardSize}`}>
      <button onClick={toggleFavorite} className="heart-button">
        <img src={heartIcon} alt="heart" className="heart" />
      </button>
      <Link to={`/product/${id}?from=${stateType}`} className="product-card__img">
        <img src={photo.find((item) => item.includes('MAIN_photo_image_'))} alt={title} className="card-image" loading="lazy" />
      </Link>
      <div className="product-card__info">
        <Link to={`/product/${id}?from=${stateType}`} className="text_card">
          {title?.length > 24 ? title.slice(0, 25) + '...' : title}
        </Link>
        <StarsRating ratingNumber={rating} />
        <div className="card_price">
          {price === discount ? (
            <span className="price">{price?.toFixed()} грн</span>
          ) : (
            <>
              <span className="price price--sale">{price?.toFixed()} грн</span>
              <span className="price price--new">{discount?.toFixed()} грн</span>
            </>
          )}
          <button className="button button__cart" onClick={() => {
            dispatch(setShowModal(true));
            dispatch(setModalData(props));
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="icon__svg-cart" d="M21 19.65V18H6.9L7.8 16.35L21.6 15L24 6H5.55L4.5 1.5H0V3H3.3L6.45 15.6L4.5 19.5V21.75C4.5 22.95 5.55 24 6.75 24C7.95 24 9 22.95 9 21.75C9 20.55 7.95 19.5 6.75 19.5H18V21.75C18 22.95 19.05 24 20.25 24C21.45 24 22.5 22.95 22.5 21.75C22.5 20.7 21.9 19.95 21 19.65ZM6 7.5H22.05L20.4 13.5L7.8 14.85L6 7.5Z" fill="" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
