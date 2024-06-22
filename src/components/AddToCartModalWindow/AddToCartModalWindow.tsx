import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '@/store/slices/modalSlice';
import { RootState } from '@/store';
import sofa from '@/assets/sofa_beige.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const AddToCartModalWindow = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.modal.showModal);
  const isOverlayOpen = useSelector(
    (state: RootState) => state.modal.showOverlay,
  );
  const [itemsQuantity, setItemsQuantity] = useState(1);
  const [demoTotalPrice, setDemoTotalPrice] = useState(0);

  const closeModal = () => {
    dispatch(setShowModal(false));
    setItemsQuantity(1);
    setDemoTotalPrice(0);
  };

  const incrementQuantity = () => {
    setItemsQuantity((prevState) => prevState + 1);
  };
  const decrementQuantity = () => {
    setItemsQuantity((prevState) => (prevState - 1 ? prevState - 1 : 1));
  };
  const handleInputChange = (e) => {
    const minValue = parseInt(e.target.value, 10);

    if (minValue >= 1) {
      setItemsQuantity(minValue);
    } else {
      setItemsQuantity(1);
    }
  };

  useEffect(() => {
    setDemoTotalPrice(itemsQuantity * 25000);
  }, [itemsQuantity]);

  return (
    <>
      <div
        className={`modal--overlay ${
          isModalOpen || isOverlayOpen ? 'show' : ''
        }`}
        onClick={closeModal}
      ></div>
      <section className={`add-to-cart-modal ${isModalOpen ? 'show' : ''}`}>
        <div className="modal__heading">
          <h2 className="modal__title">Додати в кошик</h2>
          <span className="modal__close" onClick={closeModal}>
            &times;
          </span>
        </div>

        <div className="modal__content">
          <div className="modal__details">
            <div className="modal__media">
              <img src={sofa} alt="product" />
            </div>

            <ul className="modal__details-list">
              <li className="details-list__item details-list__title">
                Диван not Basic Red шкіра ретро вінтаж MKII страус
              </li>
              <li className="details-list__item details-list__color">
                Колір: Червоний
              </li>
              <li className="details-list__item details-list__code">
                Код товару: 9567
              </li>
              <li className="details-list__item details-list__price">
                <span>25 000</span>грн.
              </li>
            </ul>
          </div>
          <div className="modal__actions">
            <button onClick={incrementQuantity}>+</button>
            <input
              type="text"
              name="counter"
              value={itemsQuantity}
              onChange={handleInputChange}
              min={1}
            />
            <button onClick={decrementQuantity}>-</button>
          </div>
          <div className="modal__total-info">
            <p className="modal__total-info--item">
              Загальна сума:<span>{demoTotalPrice}</span>
            </p>
            <p className="modal__total-info--item">
              Доставка:<span>2 000</span>
            </p>
            <p className="modal__total-info--item modal__total-info--total-sum">
              Всього:<span>{demoTotalPrice + 2000}</span>
            </p>
            <Link className="button" to="/cart" onClick={closeModal}>
              Перейти до кошика
            </Link>
            <button className="button button__white" onClick={closeModal}>
              Продовжити покупки
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
