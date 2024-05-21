import sofa from '../../../assets/seater-sofa.png';
import close from '../../../assets/icons/close.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const initialFavoriteProducts = [
  {
    id: 1,
    name: 'Диван Софа',
    color: 'чорний',
    price: 25000,
    code: '12345',
    image: sofa,
  },
  {
    id: 2,
    name: 'Диван Софа',
    color: 'червоний',
    price: 25000,
    code: '12345',
    image: sofa,
  },
  {
    id: 3,
    name: 'Диван Софа',
    color: 'білий',
    price: 25000,
    code: '12345',
    image: sofa,
  },
  {
    id: 4,
    name: 'Диван Софа',
    color: 'білий',
    price: 25000,
    code: '12345',
    image: sofa,
  },
];

export const Favorites = () => {
  const [favoriteProducts, setFavoriteProducts] = useState(initialFavoriteProducts);

  const removeProduct = (id) => {
    setFavoriteProducts(favoriteProducts.filter(product => product.id !== id));
  };

  return (
    <div className="favorites">
      <div className="title_favorites">
        <h1>Список обраного</h1>
      </div>
      <div className="favorites_details_blok">
        {favoriteProducts.map(product => (
          <div className="favorites_details" key={product.id}>
            <div className="product_details">
              <div className="img_name">
                <div className="icon_product">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="name_product">
                  <h3>{product.name}</h3>
                  <span className="color_product">
                    Колір: <span>{product.color}</span>
                  </span>
                  <span className="order_product_price">
                    <span>{product.price}</span> грн
                  </span>
                </div>
              </div>
              <div className="order_price">
                <span className="order_article">Код товару: {product.code}</span>
                <button className="button button__white  d-none d-md-block">Додати в кошик</button>
                <Link className="button button__cart d-block d-md-none" to="/">
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
            <div className="remove_product" onClick={() => removeProduct(product.id)}>
              <img src={close} alt="Remove" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
