import { IsLoading } from '../../../components/IsLoading/IsLoading';
import { RootState } from '../../../store';
import { useSelector } from 'react-redux';

export const CatalogSidebar = () => {
  const categories = useSelector((state: RootState) => state.filter.categories);
  const rooms = useSelector((state: RootState) => state.filter.rooms);
  const manufacturers = useSelector(
    (state: RootState) => state.filter.manufacturers,
  );
  const collections = useSelector(
    (state: RootState) => state.filter.collections,
  );

  console.log(rooms.length);

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
              rooms.map((item, index) => (
                <label key={index}>
                  <input type="checkbox" name="checkbox-rooms" />
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
              categories.map((item, index) => (
                <label key={index}>
                  <input type="checkbox" name="checkbox-categories" />
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
              collections.map((item, index) => (
                <label key={index}>
                  <input type="checkbox" name="checkbox-collections" />
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
              manufacturers.map((item, index) => (
                <label key={index}>
                  <input type="checkbox" name="checkbox-manufacturers" />
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
          <h4 className="catalog-sidebar__title">Матеріал</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__check-list">
            <label>
              <input type="checkbox" name="checkbox-material" />
              Ясен Шімо світлий
            </label>
            <label>
              <input type="checkbox" name="checkbox-material" />
              Ясен Шімо світлий
            </label>
            <label>
              <input type="checkbox" name="checkbox-material" />
              Ясен Шімо світлий
            </label>
            <label>
              <input type="checkbox" name="checkbox-material" />
              Ясен Шімо світлий
            </label>
            <label>
              <input type="checkbox" name="checkbox-material" />
              Ясен Шімо світлий
            </label>
            <label>
              <input type="checkbox" name="checkbox-material" />
              Ясен Шімо світлий
            </label>
            <label>
              <input type="checkbox" name="checkbox-material" />
              Ясен Шімо світлий
            </label>
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
              <input type="checkbox" name="checkbox-material" />В наявності
            </label>
            <label>
              <input type="checkbox" name="checkbox-material" />
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
