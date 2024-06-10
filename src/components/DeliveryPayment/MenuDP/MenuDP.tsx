import { useState } from 'react';
import { Delivery } from '@/components/DeliveryPayment/Delivery/Delivery';
import { Payment } from '@/components/DeliveryPayment/Payment/Payment';
import arrow from '@/assets/arrow.svg';

export const MenuDP = () => {
  const [menuItem, setMenuItem] = useState('delivery');

  const renderComponent = () => {
    switch (menuItem) {
      case 'delivery':
        return <Delivery />;
      case 'payment':
        return <Payment />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="pageDP">
        <div className="sidebarMenu">
          <ul>
            <li
              className={`button_menu ${
                menuItem === 'delivery' ? 'active' : ''
              }`}
              onClick={() => setMenuItem('delivery')}
            >
              Умови доставки <img src={arrow} alt="" className="arrow" />
            </li>
            <li
              className={`button_menu ${
                menuItem === 'payment' ? 'active' : ''
              }`}
              onClick={() => setMenuItem('payment')}
            >
              Умови оплати <img src={arrow} alt="" className="arrow" />
            </li>
          </ul>
        </div>
        <div className="content">{renderComponent()}</div>
      </div>
    </div>
  );
};
