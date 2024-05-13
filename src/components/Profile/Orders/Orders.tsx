import './orders.scss';
import { useState } from 'react';
import sofa from '../../../assets/seater-sofa.png';

export const Orders = () => {
  const ordersData = [
    {
      id: 1,
      number: 19857363,
      total: 24000,
      quantity: 4,
      status: 'Доставлений',
      date: '20/03/24',
      products: [
        {
          id: 1,
          name: 'Диван Basic',
          image: sofa,
          color: 'Чорний',
          quantity: 1,
          price: 25000,
        },
        {
          id: 2,
          name: 'Диван Basic',
          image: sofa,
          color: 'Чорний',
          quantity: 1,
          price: 25000,
        },
        {
          id: 3,
          name: 'Диван Basic',
          image: sofa,
          color: 'Чорний',
          quantity: 1,
          price: 25000,
        },
        {
          id: 4,
          name: 'Диван Basic',
          image: sofa,
          color: 'Чорний',
          quantity: 1,
          price: 25000,
        },
      ],
    },
    {
      id: 2,
      number: 19857364,
      total: 14000,
      quantity: 1,
      status: 'Скасовано',
      date: '22/03/24',
      products: [
        {
          id: 1,
          name: 'Диван Basic',
          image: sofa,
          color: 'Чорний',
          quantity: 1,
          price: 14000,
        },
      ],
    },
    {
      id: 3,
      number: 19857364,
      total: 14000,
      quantity: 3,
      status: 'У процесі',
      date: '22/03/24',
      products: [
        {
          id: 1,
          name: 'Диван Basic',
          image: sofa,
          color: 'Чорний',
          quantity: 1,
          price: 14000,
        },
        {
          id: 2,
          name: 'Диван Basic',
          image: sofa,
          color: 'Чорний',
          quantity: 1,
          price: 14000,
        },
        {
          id: 3,
          name: 'Диван Basic',
          image: sofa,
          color: 'Чорний',
          quantity: 1,
          price: 14000,
        },
      ],
    },
    {
      id: 4,
      number: 19857364,
      total: 14000,
      quantity: 1,
      status: 'Доставлений',
      date: '22/03/24',
      products: [
        {
          id: 1,
          name: 'Диван Basic',
          image: sofa,
          color: 'Чорний',
          quantity: 1,
          price: 14000,
        },
      ],
    },
  ];

  const [orders, setOrders] = useState(ordersData);
  const [selectedOrder, setSelectedOrder] = useState<any>(null); // Явно вказано тип для selectedOrder
  const [activeButton, setActiveButton] = useState<string>('Всі'); // Явно вказано тип для activeButton

  const sortOrdersByStatus = (status: string) => { // Явно вказано тип для параметра status
    setActiveButton(status);
    const sortedOrders =
      status === 'Всі'
        ? ordersData
        : ordersData.filter((order) => order.status === status); // Явно вказано тип для параметра order
    setOrders(sortedOrders);
  };

  const showOrderDetails = (order: any) => { // Явно вказано тип для параметра order
    setSelectedOrder(selectedOrder === order ? null : order);
  };

  return (
    <div className="orders">
      <h1>Мої замовлення</h1>
      <div className="state">
        <span
          className={`btn_state ${activeButton === 'Всі' ? 'active' : ''}`}
          onClick={() => sortOrdersByStatus('Всі')}
        >
          Всі
        </span>
        <span
          className={`btn_state ${
            activeButton === 'Доставлений' ? 'active' : ''
          }`}
          onClick={() => sortOrdersByStatus('Доставлений')}
        >
          Доставлені
        </span>
        <span
          className={`btn_state ${
            activeButton === 'У процесі' ? 'active' : ''
          }`}
          onClick={() => sortOrdersByStatus('У процесі')}
        >
          У процесі
        </span>
        <span
          className={`btn_state ${
            activeButton === 'Скасовано' ? 'active' : ''
          }`}
          onClick={() => sortOrdersByStatus('Скасовано')}
        >
          Скасовані
        </span>
      </div>
      <div className="orders_group">
        <div className="orders_list">
          {orders.map((order: any) => ( // Явно вказано тип для параметра order
            <div
              key={order.id}
              className="order"
              onClick={() => showOrderDetails(order)}
            >
              <div className="order_number">
                <span>Номер замовлення:</span> {order.number}
              </div>
              <div className="order_total">
                <span>Загальна сума:</span> {order.total}
              </div>
              <div className="order_quantity">
                <span>Кількість товарів:</span> {order.quantity}
              </div>
              <div className="order_status">
                <span>Статус:</span> {order.status}
              </div>
              <div className="order_date">
                <span>Дата замовлення:</span> {order.date}
              </div>
              {selectedOrder === order && (
                <div className="order_details">
                  <h2>Деталі замовлення</h2>
                  <div className="orders_details">
                    {order.products.map((product: any) => ( // Явно вказано тип для параметра product
                      <div key={product.id} className="product_details">
                        <div className="img_name">
                          <div className="icon_product">
                            <img src={product.image} alt="" />
                          </div>
                          <div className="name_product">
                            <h3>{product.name}</h3>
                            <span className="color_product">
                              Колір: <span>{product.color}</span>
                            </span>
                            <span className="quantity_ordered">
                              Кількість: <span>{product.quantity}</span>
                            </span>
                          </div>
                        </div>
                        <div className="order_price">
                          <span>{product.price} грн</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
