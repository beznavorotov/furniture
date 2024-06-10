// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { IsLoading } from '@/components/IsLoading/IsLoading';

export const CatalogSidebar = () => {
  const categories = useSelector((state: RootState) => state.filter.categories);
  const rooms = useSelector((state: RootState) => state.filter.rooms);
  const manufacturers = useSelector(
    (state: RootState) => state.filter.manufacturers,
  );
  const collections = useSelector(
    (state: RootState) => state.filter.collections,
  );
  const сolor = useSelector((state: RootState) => state.filter.сolor);

  // const [tmpFilterData, setTmpFilterData] = useState([]);

  const handleChange = (arg) => {
    console.log('value: ', arg.value);
    console.log('isChecked: ', arg.checked);
    // setTmpFilterData((prevState) => [...prevState, arg.value]);
    // console.log(tmpFilterData);
  };

  return (
    <aside className="catalog-sidebar">
      {/* Ціна */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Ціна</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__input-range">
            <input
              type="range"
              name="priceRange"
              id="price"
              min="0"
              max="100000"
            />
            <div className="filter__input-wrapper">
              <input
                type="number"
                name="minPrice"
                id="minPrice"
                placeholder="0"
              />
              <input
                type="number"
                name="maxPrice"
                id="maxPrice"
                placeholder="100000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Кімнати */}

      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Кімнати</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__check-list">
            {!rooms ? (
              <IsLoading text="..." />
            ) : (
              rooms.map((item) => (
                <label key={crypto.randomUUID()}>
                  <input type="checkbox" name="rooms" value={item} />
                  {item}
                </label>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Категорії */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Категорії</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__check-list">
            {!categories ? (
              <IsLoading text="..." />
            ) : (
              categories.map((item) => (
                <label key={crypto.randomUUID()}>
                  <input
                    type="checkbox"
                    name="categories"
                    value={item}
                    onChange={(e) => {
                      handleChange(e.target);
                    }}
                  />
                  {item}
                </label>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Колекції */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Колекції</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__check-list">
            {!collections ? (
              <IsLoading text="..." />
            ) : (
              collections.map((item) => (
                <label key={crypto.randomUUID()}>
                  <input
                    type="checkbox"
                    name="collections"
                    value={item}
                    onChange={(e) => {
                      handleChange(e.target);
                    }}
                  />
                  {item}
                </label>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Виробник */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Виробник</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__check-list">
            {!manufacturers ? (
              <IsLoading text="..." />
            ) : (
              manufacturers.map((item) => (
                <label key={crypto.randomUUID()}>
                  <input type="checkbox" name="manufacturers" value={item} />
                  {item}
                </label>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Матеріал */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Колір</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__check-list">
            {!сolor ? (
              <IsLoading text="..." />
            ) : (
              сolor.map((item) => (
                <label key={crypto.randomUUID()}>
                  <input type="checkbox" name="colour" value={item} />
                  {item}
                </label>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Наявність */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Наявність</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__check-list">
            <label>
              <input type="checkbox" name="availability" />В наявності
            </label>
            <label>
              <input type="checkbox" name="availability" />
              Відсутні
            </label>
          </div>
        </div>
      </div>

      {/* Довжина */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Довжина</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__input-range">
            <input
              type="range"
              name="priceRange"
              id="price"
              min="0"
              max="100000"
            />
            <div className="filter__input-wrapper">
              <input
                type="number"
                name="minLength"
                id="minLength"
                placeholder="0"
              />
              <input
                type="number"
                name="maxLength"
                id="maxLength"
                placeholder="100000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ширина */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Ширина</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__input-range">
            <input
              type="range"
              name="priceRange"
              id="price"
              min="0"
              max="100000"
            />
            <div className="filter__input-wrapper">
              <input
                type="number"
                name="minWidth"
                id="minWidth"
                placeholder="0"
              />
              <input
                type="number"
                name="maxWidth"
                id="maxWidth"
                placeholder="100000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Висота */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Висота</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__input-range">
            <input
              type="range"
              name="priceRange"
              id="price"
              min="0"
              max="100000"
            />
            <div className="filter__input-wrapper">
              <input
                type="number"
                name="minHeight"
                id="minHeight"
                placeholder="0"
              />
              <input
                type="number"
                name="maxHeight"
                id="maxHeight"
                placeholder="100000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Захист від кігтів */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Захист від кігтів</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__check-list">
            <label>
              <input type="checkbox" name="checkbox-material" />
              Присутній
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};
