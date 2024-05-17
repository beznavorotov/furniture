import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../../store/slices/roomsSlice';
import { RootState } from '../../store'; 

export const CatalogMenu: React.FC = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state: RootState) => state.rooms.items);
  const roomStatus = useSelector((state: RootState) => state.rooms.status);

  useEffect(() => {
    if (roomStatus === 'idle') {
      dispatch(fetchRooms());
    }
  }, [roomStatus, dispatch]);

  return (
    <div className="catalog__menu">
      {rooms.map((item) => console.log(item))}
      <h1>Каталог товарів</h1>
      <ul className="category-list">
        <li className="category-list__item">
          <a className="category-list__link" href="/">
            Передпокій
          </a>
          <div className="category-list__hidden-column">
            <ul className="subcategory-list">
              <li>
                <a className="subcategory-list__link" href="/">
                  Гардероб
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Дзеркала
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Стінки і гарнітури
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Шафи
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="category-list__item">
          <a className="category-list__link" href="/">
            Вітальня
          </a>
          <div className="category-list__hidden-column">
            <ul className="subcategory-list">
              <li>
                <a className="subcategory-list__link" href="/">
                  Дивани
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Крісла
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Стелажі, пенали, полиці
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Столи
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="category-list__item">
          <a className="category-list__link" href="/">
            Спальня
          </a>
          <div className="category-list__hidden-column">
            <ul className="subcategory-list">
              <li>
                <a className="subcategory-list__link" href="/">
                  Комоди
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Ліжка
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Матраци і аксесуари
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Тумби
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="category-list__item">
          <a className="category-list__link" href="/">
            Кухонні меблі
          </a>
          <div className="category-list__hidden-column">
            <ul className="subcategory-list">
              <li>
                <a className="subcategory-list__link" href="/">
                  Стільці
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Столи
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="category-list__item">
          <a className="category-list__link" href="/">
            Дитяча кімната
          </a>
          <div className="category-list__hidden-column">
            <ul className="subcategory-list">
              <li>
                <a className="subcategory-list__link" href="/">
                  Ліжка
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Комоди
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Матраци і аксесуари
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="category-list__item">
          <a className="category-list__link" href="/">
            Офісні меблі
          </a>
          <div className="category-list__hidden-column">
            <ul className="subcategory-list">
              <li>
                <a className="subcategory-list__link" href="/">
                  Дивани
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Крісла
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Столи
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Шафи
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="category-list__item">
          <a className="category-list__link" href="/">
            Ванна кімната
          </a>
          <div className="category-list__hidden-column">
            <ul className="subcategory-list">
              <li>
                <a className="subcategory-list__link" href="/">
                  Дзеркала
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Тумби
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Шафи
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li className="category-list__item">
          <a className="category-list__link" href="/">
            Усі категорії
          </a>
          <div className="category-list__hidden-column">
            <ul className="subcategory-list">
              <li>
                <a className="subcategory-list__link" href="/">
                  Гардероб
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Дзеркала
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Стінки і гарнітури
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Шафи
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Дивани
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Крісла
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Стелажі, пенали, полиці
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Столи
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Комоди
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Ліжка
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Матраци і аксесуари
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Тумби
                </a>
              </li>
              <li>
                <a className="subcategory-list__link" href="/">
                  Стільці
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};
