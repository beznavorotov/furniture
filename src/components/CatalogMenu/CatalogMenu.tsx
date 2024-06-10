import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '@/store';
import { fetchRooms } from '@/store/slices/roomsSlice';
import { STATUS_IDLE } from '@/constants';
import { handleClickOutside } from '@/utils/handleClickOutside';

export const CatalogMenu = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state: RootState) => state.rooms.items);
  const roomStatus = useSelector((state: RootState) => state.rooms.status);
  const [isVisible, setIsVisible] = useState('');
  const categoryListRef = useRef(null);

  const toggleVisibility = (id) => {
    setIsVisible((prevState) => (prevState === id ? null : id));
  };

  useEffect(() => {
    if (roomStatus === STATUS_IDLE) {
      dispatch(fetchRooms());
    }
  }, [roomStatus, dispatch]);

  useEffect(() => {
    const handleClick = handleClickOutside(categoryListRef, () => {
      setIsVisible(null);
    });

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="catalog__menu" ref={categoryListRef}>
      <h1 className="catalog__menu--title">Каталог товарів</h1>
      <ul className="category-list">
        {rooms.map(({ id, title, categories }) => (
          <li
            key={id}
            className="category-list__item"
            onClick={() => toggleVisibility(id)}
          >
            <div
              className={`category-list__heading ${
                isVisible === id ? 'active' : ''
              }`}
            >
              <span className="category-list__number">0{id}</span>
              <span className="category-list__link">{title}</span>
              <span
                className={`category-list__direction-arrow ${
                  isVisible === id ? 'rotate' : ''
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
                isVisible === id ? 'show' : ''
              }`}
            >
              <ul className="subcategory-list">
                {categories.map(({ id, title }) => (
                  <li key={crypto.randomUUID()}>
                    <Link
                      className="subcategory-list__link"
                      to={`/catalog/${id - 1}`}
                    >
                      {title}
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
