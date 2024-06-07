import { useState, useEffect } from 'react';
import sofa from '../../../assets/seater-sofa.png';

export const CartOrder = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [promoCode, setPromoCode] = useState('');

  useEffect(() => {
    // Сюди по ідеї логіка для отримання даних кошика
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

        const total = cartData.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        );
        setTotalPrice(total);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleOrderSubmit = () => {
    // Логіка для обробки замовлення
    console.log('Замовлення відправлено');
  };

  return (
    <div className="cart-summary">
      <h2>Ваше замовлення</h2>
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
              <span className="product_price">{item.price} грн</span>
              <span>Кількість: {item.quantity}</span>
              <span className="article_product">
                Артикул: {item.article_code}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p>Кошик порожній</p>
      )}
      <div className="cart-total">
        <span>Загальна сума: {totalPrice} грн</span>
      </div>
      <div className="discount">
        <input
          type="text"
          className="input"
          placeholder="Промокод"
          value={promoCode}
          onChange={handlePromoCodeChange}
        />
      </div>
      <button className="button" onClick={handleOrderSubmit}>
        Замовити
      </button>
    </div>
  );
};
