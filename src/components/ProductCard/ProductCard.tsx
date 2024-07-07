import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StarsRating } from '@/components/StarsRating/StarsRating';
import { AddToFavorites } from '@/components/AddToFavorites/AddToFavorites';
import { setShowModal, setModalData } from '@/store/slices/modalSlice';
import iconsSprite from '@/assets/icons_sprite.svg';

const ProductCard = ({ props, cardSize }) => {
  const dispatch = useDispatch();
  const { title, price, discount, id, rating, photo } = props;

  return (
    <div className={`product-card ${cardSize}`}>
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
          {title?.length > 24 ? title.slice(0, 25) + '...' : title}
        </Link>
        <StarsRating ratingNumber={rating} />
        <div className="card_price">
          {price === discount ? (
            <span className="price">{price?.toFixed()} грн</span>
          ) : (
            <>
              <span className="price price--sale">{price?.toFixed()} грн</span>
              <span className="price price--new">
                {discount?.toFixed()} грн
              </span>
            </>
          )}
          <button
            className="button button__cart"
            onClick={() => {
              dispatch(setShowModal(true));
              dispatch(setModalData(props));
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use
                xlinkHref={`${iconsSprite}#cart`}
                className="icon__svg-cart"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
