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

            <Link to="/">
              <div className="bg_cart">
                <img src={cartWhite} alt="cart icon" className="cart" />
              </div>

            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
