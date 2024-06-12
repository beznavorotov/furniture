import { useState, useEffect } from 'react';
import sofa from '@/assets/seater-sofa.png';

export const CartOrder = () => {
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [appliedPromoCode, setAppliedPromoCode] = useState('');

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartData = [
          {
            article_code: '12345',
            photo: [sofa],
            title: 'Диван Софа',
            price: 10000,
            quantity: 2,
          },
          {
            article_code: '12346',
            photo: [sofa],
            title: 'Диван Софа',
            price: 20000,
            quantity: 1,
          },
        ];
        setCartItems(cartData);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
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

  return (
    <div className="cart_summary">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.article_code} className="product_details">
            <img
              src={item.photo[0]}
              alt={item.title}
              className="icon_product"
            />
            <div className="cart_details">
              <span className="name_product">{item.title}</span>
              <span className="article_product">
                Артикул: {item.article_code}
              </span>
            </div>
            <div className="quantity_details">
              <span className="quantity_product">
                Кількість: {item.quantity}
              </span>
              <span className="product_price">{item.price} грн</span>
            </div>
          </div>
        ))
      ) : (
        <p>Кошик порожній</p>
      )}
      <div className="basket_summary">
        <div className="summary_details">
          <div className="summary_item">
            <span className="text">Товарів: </span>
            <span className="text">{getTotalQuantity()}</span>
          </div>
          <div className="summary_item">
            <span className="text">Сума товарів:</span>
            <span className="text">{getTotalPrice()} грн</span>
          </div>

          <div className="summary_item">
            <input
              className="discount"
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              disabled={!!appliedPromoCode}
              placeholder="DISCOUNT10"
            />
            <button
              className="button button__white btn"
              onClick={applyPromoCode}
              disabled={!!appliedPromoCode}
            >
              Застосувати
            </button>
          </div>
          {appliedPromoCode && (
            <div className="summary_item">
              <span className="text">Знижка:</span>
              <span className="text">-{discount} грн</span>
            </div>
          )}
          <div className="summary_item">
            <span className="text_all">Всього:</span>
            <span className="text_all">{getTotalPrice() - discount} грн</span>
          </div>
        </div>
        <div className="order">
          <button className="button button__order">Оформити замовлення</button>
        </div>
      </div>
    </div>
  );
};
