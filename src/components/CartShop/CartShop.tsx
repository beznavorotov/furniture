import { useState } from 'react';
import { Link } from 'react-router-dom';
import sofaGreen from '@/assets/sofa_green.jpg';
import close from '@/assets/icons/close.svg';

const CartProducts = [
  {
    id: 1,
    name: 'Диван Софа',
    article: 12345,
    price: 25000,
    quantity: 1,
    image: sofaGreen,
  },
  {
    id: 2,
    name: 'Диван Софа',
    article: 12346,
    price: 10000,
    quantity: 2,
    image: sofaGreen,
  },
  {
    id: 3,
    name: 'Диван Софа',
    article: 12347,
    price: 20000,
    quantity: 3,
    image: sofaGreen,
  },
];

export const CartShop = () => {
  const [cartProducts, setCartProducts] = useState(CartProducts);

  const [discount, setDiscount] = useState(0);

  const removeProduct = (id) => {
    setCartProducts(cartProducts.filter((product) => product.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setCartProducts(
      cartProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, parseInt(quantity)) }
          : product,
      ),
    );
  };

  const incrementQuantity = (id) => {
    handleQuantityChange(
      id,
      cartProducts.find((product) => product.id === id).quantity + 1,
    );
  };

  const decrementQuantity = (id) => {
    handleQuantityChange(
      id,
      cartProducts.find((product) => product.id === id).quantity - 1,
    );
  };

  const getTotalPrice = () => {
    return cartProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
  };

  const getTotalQuantity = () => {
    return cartProducts.reduce((total, product) => total + product.quantity, 0);
  };


  const clearCart = () => {
    setCartProducts([]);
    setDiscount(0);
  };

  return (
    <div className="cart">
      <div className="title_cart">
        <h1>Кошик</h1>
        {cartProducts.length > 0 && (
          <button className="clear_cart" onClick={clearCart}>
            Очистити кошик
          </button>
        )}
      </div>
      {cartProducts.length === 0 ? (
        <div className="empty_cart_message">
          <h1>Ваш кошик порожній</h1>
          <Link to="/" className="button">
            До покупок
          </Link>
        </div>
      ) : (
        <div className="cart_content">
          <div className="cart_details_block">
            {cartProducts.map((product) => (
              <div className="cart_details" key={product.id}>
                <div className="product_details">
                  <div className="img_name">
                    <div className="icon_product">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="name_product">
                      <h3>{product.name}</h3>
                      <span className="article_product">
                        Код товару: <span>{product.article}</span>
                      </span>
                      <span className="order_product_price">
                        <span className="product_price">
                          {product.price} грн
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="quantity_controls">
                  <button onClick={() => decrementQuantity(product.id)}>
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button onClick={() => incrementQuantity(product.id)}>
                    +
                  </button>
                </div>
                <div className="order_price">
                  <span className="total_price">
                    {product.price * product.quantity} грн
                  </span>
                </div>
                <div
                  className="remove_product"
                  onClick={() => removeProduct(product.id)}
                >
                  <img src={close} alt="Remove" />
                </div>
              </div>
            ))}
          </div>
          <div className="cart_summary">
            <h2 className="title">Сума</h2>
            <div className="summary_details">
              <div className="summary_item">
                <span>Товари: </span>
                <span>{getTotalQuantity()}</span>
              </div>
              <div className="summary_item total">
                <span>Всього:</span>
                <span>{getTotalPrice() - discount} грн</span>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center align-self-center flex-column ">
              <Link to="/">
                <button className="button button__white ">
                  Продовжити покупки
                </button>
              </Link>
              <Link to="/order">
              <button className="button button__order ">
                Оформити замовлення
              </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
