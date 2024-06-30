import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '@/store/slices/modalSlice';
import { RootState } from '@/store';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const AddToCartModalWindow = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.modal.showModal);
  const modalData = useSelector((state: RootState) => state.modal.data);
  const { title, article_code, price, discount, colour, photo } = modalData;
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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const minValue = parseInt(value, 10);

    if (minValue >= 1) {
      setItemsQuantity(minValue);
    } else {
      setItemsQuantity(1);
    }
  };

  const newPrice = price === discount ? price?.toFixed() : discount?.toFixed();

  useEffect(() => {
    if (!isNaN(newPrice)) {
      setDemoTotalPrice(itemsQuantity * newPrice);
    }
  }, [itemsQuantity, newPrice]);

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
              <img
                src={photo?.find((item) => item.includes('MAIN_photo_image_'))}
                alt="product"
              />
            </div>

            <ul className="modal__details-list">
              <li className="details-list__item details-list__title">
                {title}
              </li>
              <li className="details-list__item details-list__color">
                Колір: {colour}
              </li>
              <li className="details-list__item details-list__code">
                Код товару: {article_code}
              </li>
              <li className="details-list__item details-list__price">
                <span>{newPrice}</span>
                грн.
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
            {/* <p className="modal__total-info--item">
              Доставка:<span>2 000</span>
            </p> */}
            <p className="modal__total-info--item modal__total-info--total-sum">
              Всього:<span>{demoTotalPrice}</span>
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
