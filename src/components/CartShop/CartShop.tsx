import { useState } from 'react';
import sofa from '../../assets/seater-sofa.png';
import close from '../../assets/icons/close.svg';

const initialCartProducts = [
  {
    id: 1,
    name: 'Диван Софа',
    article: 12345,
    price: 25000,
    quantity: 1,
    image: sofa,
  },
  {
    id: 2,
    name: 'Диван Софа',
    article: 12346,
    price: 10000,
    quantity: 2,
    image: sofa,
  },
  {
    id: 3,
    name: 'Диван Софа',
    article: 12347,
    price: 20000,
    quantity: 3,
    image: sofa,
  },
];

export const CartShop = () => {
  const [cartProducts, setCartProducts] = useState(initialCartProducts);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [appliedPromoCode, setAppliedPromoCode] = useState('');

  const removeProduct = (id) => {
    setCartProducts(cartProducts.filter(product => product.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setCartProducts(cartProducts.map(product => product.id === id ? { ...product, quantity: parseInt(quantity) } : product));
  };

  const getTotalPrice = () => {
    return cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const applyPromoCode = () => {
    if (promoCode === 'DISCOUNT10') {
      setDiscount(0.1 * getTotalPrice());
      setAppliedPromoCode(promoCode);
    } else {
      setDiscount(0);
      setAppliedPromoCode('');
    }
  };

  const clearCart = () => {
    setCartProducts([]);
    setDiscount(0);
    setAppliedPromoCode('');
  };

  return (
    <div className="cart">
      <div className="title_cart">
        <h1>Кошик</h1>
        <button className="clear_cart" onClick={clearCart}>Очистити кошик</button>
      </div>
      <div className="cart_content">
        <div className="cart_details_block">
          {cartProducts.map(product => (
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
                      <span className='product_price'>{product.price} грн</span>  x <input type="number" min="1" value={product.quantity} onChange={(e) => handleQuantityChange(product.id, e.target.value)} />
                    </span>
                  </div>
                </div>
                <div className="order_price">
                  <span className="total_price">{product.price * product.quantity} грн</span>
                </div>
              </div>
              <div className="remove_product" onClick={() => removeProduct(product.id)}>
                <img src={close} alt="Remove" />
              </div>
            </div>
          ))}
        </div>
        <div className="cart_summary">
          <h2>Сума</h2>
          <div className="summary_details">
            <div className="summary_item">
              <span>Сума товарів:</span>
              <span>{getTotalPrice()} грн</span>
            </div>
            <div className="summary_item">
              <span>Промокод:</span>
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                disabled={!!appliedPromoCode}
              />
              <button onClick={applyPromoCode} disabled={!!appliedPromoCode}>Застосувати</button>
            </div>
            {appliedPromoCode && (
              <div className="summary_item">
                <span>Знижка:</span>
                <span>-{discount} грн</span>
              </div>
            )}
            <div className="summary_item total">
              <span>Загальна сума:</span>
              <span>{getTotalPrice() - discount} грн</span>
            </div>
          </div>
          <button className="button button__order">Замовити</button>
        </div>
      </div>
    </div>
  );
};
