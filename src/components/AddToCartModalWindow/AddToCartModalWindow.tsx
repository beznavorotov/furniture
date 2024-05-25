import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../../store/slices/modalSlice';
import closeIcon from '../../assets/icons/close.svg';
import sofa from '../../assets/seater-sofa.png';
import { RootState } from '../../store';

export const AddToCartModalWindow = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.modal.showModal);

  return (
    <>
      <div className={`modal--overlay ${isModalOpen ? 'show' : 'hide'}`}></div>
      <section className={`add-to-cart-modal ${isModalOpen ? 'show' : 'hide'}`}>
        <div className="modal__heading">
          <h2 className="modal__title">Додати в кошик</h2>
          <span
            className="modal__close"
            onClick={() => dispatch(setShowModal(false))}
          >
            <img src={closeIcon} alt="close modal" />
          </span>
        </div>

        <div className="modal__content">
          <div className="modal__details">
            <div className="modal__media">
              <img src={sofa} alt="" />
            </div>

            <ul className="modal__details-list">
              <li className="details-list__item details-list__title">
                Диван Basic
              </li>
              <li className="details-list__item details-list__color">
                Колір: Червоний
              </li>
              <li className="details-list__item details-list__code">
                Код товару: 9567
              </li>
              <li className="details-list__item details-list__price">
                25 000 грн.
              </li>
            </ul>
          </div>
          <div className="modal__actions"></div>
          <div className="modal__total-info"></div>
        </div>
      </section>
    </>
  );
};
