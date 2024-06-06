import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../../store/slices/roomsSlice';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';

export const CatalogMenu: React.FC = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state: RootState) => state.rooms.items);
  const roomStatus = useSelector((state: RootState) => state.rooms.status);
  const [isVisible, setIsVisible] = useState('');
  const categoryListRef = useRef(null);

  const toggleVisibility = (id) => {
    setIsVisible((prevState) => (prevState === id ? null : id));
  };

  useEffect(() => {
    if (roomStatus === 'idle') {
      dispatch(fetchRooms());
    }
  }, [roomStatus, dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoryListRef.current &&
        !categoryListRef.current.contains(event.target)
      ) {
        setIsVisible(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="catalog__menu" ref={categoryListRef}>
      <h1 className="catalog__menu--title">Каталог товарів</h1>
      <ul className="category-list">
        {rooms.map((room) => (
          <li
            key={room.id}
            className="category-list__item"
            onClick={() => toggleVisibility(room.id)}
          >
            <div
              className={`category-list__heading ${
                isVisible === room.id ? 'active' : ''
              }`}
            >
              <span className="category-list__number">0{room.id}</span>
              <span className="category-list__link">{room.title}</span>
              <span
                className={`category-list__direction-arrow ${
                  isVisible === room.id ? 'rotate' : ''
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
                  <path
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                  />
                </svg>
              </span>
            </div>

            <div
              className={`category-list__hidden-column ${
                isVisible === room.id ? 'show' : ''
              }`}
            >
              <ul className="subcategory-list">
                {room.categories.map((item) => (
                  <li key={room.id + '' + item.id}>
                    <Link
                      className="subcategory-list__link"
                      to={`/catalog/${item.id - 1}`}
                    >
                      {item.title}
                    </Link>
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
