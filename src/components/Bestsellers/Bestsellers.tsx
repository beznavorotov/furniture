import './bestsellers.scss';
import chair from '../../assets/chair.png';
import heart from '../../assets/heart.svg';
import starEmpty from '../../assets/star_empty.svg';
import starFull from '../../assets/star_full.svg';
import cartWhite from '../../assets/icons/cart_white.svg';
import { Link } from 'react-router-dom';

export const Bestsellers = () => {
  const products = [
    { name: 'Крісло Дюна', price: '3000 грн' },
    { name: 'Крісло Месія Дюни', price: '3000 грн' },
    { name: 'Крісло Діти Дюни', price: '3000 грн' },
    { name: 'Крісло Бог Імператор Дюни', price: '3000 грн' },
  ];

  return (
    <div className="bestsellers row">
      <div className="name">
        <h1>Бестселери</h1>
        <Link to="/" className="link">
          Усі пропозиції
        </Link>
      </div>

      {products.map((product, index) => (
        <div key={index} className="col-12 col-md-3 bloc_card">
          <div className="card">
            <img src={chair} alt="chair" className="chair" />
            <img src={heart} alt="heart" className="heart" />
          </div>
          <p className="text_card">{product.name}</p>
          <span className="stars">
            <img src={starFull} alt="starFull" />
            <img src={starFull} alt="starFull" />
            <img src={starFull} alt="starFull" />
            <img src={starFull} alt="starFull" />
            <img src={starEmpty} alt="starEmpty" />
          </span>
          <div className="card_price">
            <span className="price">{product.price}</span>
<<<<<<< HEAD
            <Link to="/">
              <div className="bg_cart">
                <img src={cartWhite} alt="cart icon" className="cart" />
              </div>
              {/* <img src={cartBlue} alt="cart icon" className="cart" /> */}
=======
            <Link to="/" className="btn btn__cart">
              <svg
                className="icon__svg icon__svg-cart"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 19.65V18H6.9L7.8 16.35L21.6 15L24 6H5.55L4.5 1.5H0V3H3.3L6.45 15.6L4.5 19.5V21.75C4.5 22.95 5.55 24 6.75 24C7.95 24 9 22.95 9 21.75C9 20.55 7.95 19.5 6.75 19.5H18V21.75C18 22.95 19.05 24 20.25 24C21.45 24 22.5 22.95 22.5 21.75C22.5 20.7 21.9 19.95 21 19.65ZM6 7.5H22.05L20.4 13.5L7.8 14.85L6 7.5Z"
                  fill="#003CA6"
                />
              </svg>
>>>>>>> b170dad3f092a58d057aa226a07198dc4a55dc1b
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
