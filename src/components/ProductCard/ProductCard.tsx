import heart from '../../assets/heart.svg';
import starEmpty from '../../assets/star_empty.svg';
import starFull from '../../assets/star_full.svg';
import { Link } from 'react-router-dom';

const ProductCard = ({ index, img, name, price, newPrice }) => {
  return (
    <div className="col-12 col-md-3 product-card">
      <img src={heart} alt="heart" className="heart" />
      <div className="product-card__img">
        <img src={img} alt="chair" className="chair" />
      </div>

      <div className="product-card__info">
        <p className="text_card">{name}</p>
        <span className="stars">
          <img src={starFull} alt="starFull" />
          <img src={starFull} alt="starFull" />
          <img src={starFull} alt="starFull" />
          <img src={starFull} alt="starFull" />
          <img src={starEmpty} alt="starEmpty" />
        </span>
        <div className="card_price">
          {newPrice === '' ? (
            <span className="price">{price}</span>
          ) : (
            <span className="price price--sale">{price}</span>
          )}

          <span className="price price--new">{newPrice}</span>

          <Link className="btn btn__cart" to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="icon__svg-cart"
                d="M21 19.65V18H6.9L7.8 16.35L21.6 15L24 6H5.55L4.5 1.5H0V3H3.3L6.45 15.6L4.5 19.5V21.75C4.5 22.95 5.55 24 6.75 24C7.95 24 9 22.95 9 21.75C9 20.55 7.95 19.5 6.75 19.5H18V21.75C18 22.95 19.05 24 20.25 24C21.45 24 22.5 22.95 22.5 21.75C22.5 20.7 21.9 19.95 21 19.65ZM6 7.5H22.05L20.4 13.5L7.8 14.85L6 7.5Z"
                fill=""
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;