import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StarsRating } from '@/components/StarsRating/StarsRating';
import { AddToFavorites } from '@/components/AddToFavorites/AddToFavorites';
import { setShowModal, setModalData } from '@/store/slices/modalSlice';
import { COLOR } from '@/constants';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ props, cardSize }) => {
  const dispatch = useDispatch();
  const { title, price, discount, id, rating, photo, availability } = props;
  const isAvailable = availability === false ? 'unavailable' : 'available';

  return (
    <div className={`product-card ${cardSize} ${isAvailable}`}>
      <AddToFavorites props={props} id={id} />
      <Link to={`/product/${id}`} className="product-card__img">
        <img
          src={photo.find((item) => item.includes('MAIN_photo_image_'))}
          alt={title}
          className="card-image"
          loading="lazy"
        />
      </Link>
      <div className="product-card__info">
        <Link to={`/product/${id}`} className="text_card">
          {title?.length > 24 ? title.slice(0, 20) + '...' : title}
        </Link>
        <StarsRating ratingNumber={rating} />
        <div className="card_price">
          {price === discount ? (
            <span className="price">{price?.toFixed()} грн</span>
          ) : (
            <div className="card_price--wrapper">
              <span className="price price--sale">{price?.toFixed()} грн</span>
              <span className="price price--new">
                {discount?.toFixed()} грн
              </span>
            </div>
          )}
          <button
            className="button button__cart"
            onClick={() => {
              dispatch(setShowModal(true));
              dispatch(setModalData(props));
            }}
          >
            <ShoppingCart color={COLOR.BLUE} size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
