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
      <h1>Каталог товарів</h1>
      <ul className="category-list">
        {rooms.map((room) => (
          <li key={room.id} className="category-list__item">
            <a className="category-list__link" href="/">
              {room.title}
            </a>

            <div className="category-list__hidden-column">
              <ul className="subcategory-list">
                {room.categories.map((item) => (
                  <li key={room.id + '' + item.id}>
                    <a className="subcategory-list__link" href="/">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
