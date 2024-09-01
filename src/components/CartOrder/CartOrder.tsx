import { useLocation } from 'react-router-dom';

export const CartOrder = () => {
  const location = useLocation();
  const { cartData } = location.state || {
    cartData: { cartProducts: [], totalQuantity: 0, totalPrice: 0 },
  };

  const { cartProducts, totalQuantity, totalPrice } = cartData;
  return (
    <div className='cart_summary'>
      {cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <div key={product.item_cart_id} className='product_details'>
            <div className='cart_details'>
              <span className='name_product'>{product.item.title}</span>
              <span className='article_product'>
                Код товару: {product.item.article_code}
              </span>
            </div>
            <div className='quantity_details'>
              <span className='quantity_product'>
                Кількість: {product.quantity}
              </span>
              <span className='product_price'>{product.item.price} грн</span>
            </div>
          </div>
        ))
      ) : (
        <p>Кошик порожній</p>
      )}
      <div className='basket_summary'>
        <div className='summary_details'>
          <div className='summary_item'>
            <span className='text'>Товарів: </span>
            <span className='text'>{totalQuantity}</span>
          </div>
          <div className='summary_item'>
            <span className='text'>Сума товарів:</span>
            <span className='text'>{totalPrice} грн</span>
          </div>
          <div className='summary_item'>
            <span className='text_all'>Всього:</span>
            <span className='text_all'>{totalPrice} грн</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartOrder;
