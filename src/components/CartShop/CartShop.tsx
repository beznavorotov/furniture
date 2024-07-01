import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  getCartItems,
  removeFromCart,
  setCart,
  updateQuantity,
} from '@/store/slices/cartSlice';
import close from '../../assets/icons/close.svg';

export const CartShop = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cart);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [appliedPromoCode, setAppliedPromoCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const removeProduct = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: Math.max(1, quantity) }));
  };

  const incrementQuantity = (id) => {
    const product = cartProducts.find((product) => product.id === id);
    if (product) {
      handleQuantityChange(id, product.quantity + 1);
    }
  };

  const decrementQuantity = (id) => {
    const product = cartProducts.find((product) => product.id === id);
    if (product) {
      handleQuantityChange(id, product.quantity - 1);
    }
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
    dispatch(setCart([]));
    setDiscount(0);
    setAppliedPromoCode('');
  };

  const handleOrder = () => {
    const cartData = {
      cartProducts,
      totalQuantity: getTotalQuantity(),
      totalPrice: getTotalPrice() - discount,
    };
    navigate('/order', { state: { cartData } });
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
          <Link to="/" className="button button__white">
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
                      <img src={product.photo[0]} alt={product.title} />
                    </div>
                    <div className="name_product">
                      <h3>{product.title}</h3>
                      <span className="article_product">
                        Код товару: <span>{product.article_code}</span>
                      </span>
                      <span className="order_product_price">
                        <span className="product_price">
                          {product.price?.toFixed()} грн
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="quantity_controls">
                  <button onClick={() => decrementQuantity(product.id)}>
                    -
                  </button>
                  <span>{product.quantity || 1}</span>
                  <button onClick={() => incrementQuantity(product.id)}>
                    +
                  </button>
                </div>
                <div className="order_price">
                  <span className="total_price">
                    {(product.price * (product.quantity || 1)).toFixed()} грн
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
            <h2>Сума</h2>
            <div className="summary_details">
              <div className="summary_item">
                <span>Товари: </span>
                <span>{getTotalQuantity()}</span>
              </div>
              <div className="summary_item">
                <span>Сума товарів:</span>
                <span>{getTotalPrice().toFixed()} грн</span>
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
                  className="button button__white btn_discount"
                  onClick={applyPromoCode}
                  disabled={!!appliedPromoCode}
                >
                  Застосувати
                </button>
              </div>
              {appliedPromoCode && (
                <div className="summary_item">
                  <span>Знижка:</span>
                  <span>-{discount.toFixed()} грн</span>
                </div>
              )}
              <div className="summary_item total">
                <span>Всього:</span>
                <span>{(getTotalPrice() - discount).toFixed()} грн</span>
              </div>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
              <Link to="/">
                <button className="button button__white btn">
                  Продовжити покупки
                </button>
              </Link>

              <button
                className="button button__order btn"
                onClick={handleOrder}
              >
                Оформити замовлення
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
