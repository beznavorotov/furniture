import { useState } from 'react';
import sofa from '@/assets/seater-sofa.png';
import arrowDown from '@/assets/icons/arrow_down.svg';

export const Orders = () => {
  const ordersData = [
    {
      id: 1,
      number: 19857363,
      total: 100000,
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
          article: 9567,
          price: 25000,
        },
        {
          id: 2,
          name: 'Диван Basic',
          image: sofa,
          color: 'Чорний',
          quantity: 1,
          article: 9567,
          price: 25000,
        },
        {
          id: 3,
          name: 'Диван Basic',
          image: sofa,
          color: 'Чорний',
          quantity: 1,
          article: 9567,
          price: 25000,
        },
        {
          id: 4,
          name: 'Диван Basic',
          image: sofa,
          color: 'Чорний',
          quantity: 1,
          article: 9567,
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
          article: 9567,
          price: 14000,
        },
      ],
    },
    {
      id: 3,
      number: 19857364,
      total: 42000,
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
          article: 9567,
          price: 14000,
        },
        {
          id: 2,
          name: 'Диван Basic',
          image: sofa,
          color: 'Чорний',
          quantity: 1,
          article: 9567,
          price: 14000,
        },
        {
          id: 3,
          name: 'Диван Basic',
          image: sofa,
          color: 'Чорний',
          quantity: 1,
          article: 9567,
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
          article: 9567,
          price: 14000,
        },
      ],
    },
  ];

  const [orders, setOrders] = useState(ordersData);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [activeButton, setActiveButton] = useState<string>('Всі');

  const sortOrdersByStatus = (status: string) => {
    setActiveButton(status);
    const sortedOrders =
      status === 'Всі'
        ? ordersData
        : ordersData.filter((order) => order.status === status);
    setOrders(sortedOrders);
  };

  const showOrderDetails = (order: any) => {
    setSelectedOrder(selectedOrder === order ? null : order);
  };

  const getStatusColorClass = (status) => {
    switch (status.toLowerCase()) {
      case 'доставлений':
        return 'order-status-green';
      case 'у процесі':
        return 'order-status-yellow';
      case 'скасовано':
        return 'order-status-red';
      default:
        return 'order-status-black';
    }
  };

  return (
    <div className="orders">
      <h1>Мої замовлення</h1>
      <div className="state">
        <span
          className={`button_state ${activeButton === 'Всі' ? 'active' : ''}`}
          onClick={() => sortOrdersByStatus('Всі')}
        >
          Всі
        </span>
        <span
          className={`button_state ${
            activeButton === 'Доставлений' ? 'active' : ''
          }`}
          onClick={() => sortOrdersByStatus('Доставлений')}
        >
          Доставлені
        </span>
        <span
          className={`button_state ${
            activeButton === 'У процесі' ? 'active' : ''
          }`}
          onClick={() => sortOrdersByStatus('У процесі')}
        >
          У процесі
        </span>
        <span
          className={`button_state ${
            activeButton === 'Скасовано' ? 'active' : ''
          }`}
          onClick={() => sortOrdersByStatus('Скасовано')}
        >
          Скасовані
        </span>
      </div>
      <div className="header_orders">
        <div className="order_header">
          <span>Номер замовлення:</span>
        </div>
        <div className="order_header">
          <span>Сума замовлення:</span>
        </div>
        <div className="order_header">
          <span>Кількість товарів:</span>
        </div>
        <div className="order_header">
          <span>Статус замовлень:</span>
        </div>
        <div className="order_header">
          <span>Дата замовлення:</span>
        </div>
      </div>
      <div className="orders_group">
        <div className="orders_list">
          {orders.map((order: any) => (
            <div
              key={order.id}
              className="order"
              onClick={() => showOrderDetails(order)}
            >
              <div className="order_number">
                <span className="text_none">Номер замовлення:</span>
                <span className="order_bold">№ {order.number}</span>
              </div>
              <div className="order_total">
                <span className="text_none">Загальна сума:</span>
                <span className="order_bold">{order.total} грн</span>
              </div>
              <div className="order_quantity">
                <span className="text_none">Кількість товарів:</span>
                <span className="order_bold">{order.quantity} шт.</span>
              </div>
              <div className="order_status">
                <span className="text_none">Статус:</span>
                <span className={getStatusColorClass(order.status)}>
                  {order.status}
                </span>
              </div>
              <div className="order_date">
                <span className="text_none">Дата замовлення:</span>
                <span className="order_bold">{order.date}</span>
              </div>
              <div
                className="details_button"
                onClick={(e) => {
                  e.stopPropagation();
                  showOrderDetails(order);
                }}
              >
                Детальніше <img src={arrowDown} alt="arrowDown" />
              </div>
              {selectedOrder === order && (
                <div className="order_details">
                  <div className="orders_details">
                    {order.products.map((product: any) => (
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
                          <span className="order_article">
                            Код товару: {product.article}{' '}
                          </span>
                          <span className="order_product_price">
                            {product.price} грн
                          </span>
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
