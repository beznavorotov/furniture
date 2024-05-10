import './sale.scss';
import lamp from '../../assets/lamp.jpg';
import heart from '../../assets/heart.svg';
import starEmpty from '../../assets/star_empty.svg';
import starFull from '../../assets/star_full.svg';
import cart from '../../assets/icons/cart.svg';
import { Link } from 'react-router-dom';

export const Sale = () => {
  const products = [
    { name: 'Лампа чорна', price: '1000 грн', action: '800 грн' },
    { name: 'Лампа чорна', price: '1000 грн', action: '800 грн' },
    { name: 'Лампа чорна', price: '1000 грн', action: '800 грн' },
    { name: 'Лампа чорна', price: '1000 грн', action: '800 грн' },
  ];

  return (
    <div className="sale row">
      <div className="name">
        <h1>Розпродаж</h1>
        <Link to="/" className="link">
          Усі пропозиції
        </Link>
      </div>

      {products.map((product, index) => (
        <div key={index} className="col-12 col-md-3 bloc_card">
          <div className="card">
            <img src={lamp} alt="chair" className="chair" />
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
            <span className="action">{product.action}</span>
            <Link to="/">
              <img src={cart} alt="cart icon" className="cart" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
