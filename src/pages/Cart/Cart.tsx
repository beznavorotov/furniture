import { CartShop } from '../../components/CartShop/CartShop';

export const Cart = () => {
  return (
    <div className="container">
      <CartShop />
    </div>
  );
};

// те саме <CartShop /> - це не компонент, це модуль з логікою All-inclusive, яку треба розділити на окремі компоненти
