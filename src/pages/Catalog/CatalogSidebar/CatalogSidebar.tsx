import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import {
  toggleFilter,
  resetFilters,
  selectCategories,
  selectRooms,
  selectManufacturers,
  selectCollections,
  selectColour,
  selectAvaliability,
  // selectLength,
  // selectWidth,
  // selectHeight,
  // selectPrice,
} from '@/store/slices/filterCatalogSlice';
import { IsLoading } from '@/components/IsLoading/IsLoading';

export const CatalogSidebar = () => {
  const dispatch = useDispatch();

  const uniqueValues = useSelector(
    (state: RootState) => state.catalog.uniqueValues,
  );
  const categories = uniqueValues.categories;
  const rooms = uniqueValues.rooms;
  const manufacturers = uniqueValues.manufacturers;
  const collections = uniqueValues.collections;
  const colour = uniqueValues.colour;
  const avaliability = uniqueValues.avaliability;
  // const length = uniqueValues.length;
  // const width = uniqueValues.width;
  // const height = uniqueValues.height;
  // const price = uniqueValues.price;

  const selectCategory: string[] = useSelector(selectCategories);
  const selectRoom: string[] = useSelector(selectRooms);
  const selectManufacturer: string[] = useSelector(selectManufacturers);
  const selectCollection: string[] = useSelector(selectCollections);
  const selectColor: string[] = useSelector(selectColour);
  const selectProdAvaliability: boolean[] = useSelector(selectAvaliability);
  // const selectProdLength: number[] = useSelector(selectLength);
  // const selectProdWidth: number[] = useSelector(selectWidth);
  // const selectProdHeight: number[] = useSelector(selectHeight);
  // const selectProdPrice: number[] = useSelector(selectPrice);
  const handleChange = (category, value) => {
    dispatch(toggleFilter({ category, value }));
  };

  return (
    <aside className="catalog-sidebar">
      {/* Ціна */}
      <div className="catalog-sidebar__section">
        <button
          className="button button__white button__clear"
          onClick={() => dispatch(resetFilters())}
        >
          Очистити фільтри
        </button>
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

      <div
        className={`catalog-sidebar__section ${
          rooms.length <= 1 ? 'hide' : ''
        }`}
      >
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
                  <input
                    type="checkbox"
                    name="rooms"
                    value={item}
                    checked={selectRoom.includes(item)}
                    onChange={(e) => {
                      handleChange(e.target.name, !e.target.value);
                    }}
                  />
                  {item}
                </label>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Категорії */}
      <div
        className={`catalog-sidebar__section ${
          categories.length <= 1 ? 'hide' : ''
        }`}
      >
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
                    checked={selectCategory.includes(item)}
                    onChange={(e) => {
                      handleChange(e.target.name, e.target.value);
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
                    checked={selectCollection.includes(item)}
                    onChange={(e) => {
                      handleChange(e.target.name, e.target.value);
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
                  <input
                    type="checkbox"
                    name="manufacturers"
                    value={item}
                    checked={selectManufacturer.includes(item)}
                    onChange={(e) => {
                      handleChange(e.target.name, e.target.value);
                    }}
                  />
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
            {!colour ? (
              <IsLoading text="..." />
            ) : (
              colour.map((item) => (
                <label key={crypto.randomUUID()}>
                  <input
                    type="checkbox"
                    name="colour"
                    value={item}
                    checked={selectColor.includes(item)}
                    onChange={(e) => {
                      handleChange(e.target.name, e.target.value);
                    }}
                  />
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
            {!avaliability ? (
              <IsLoading text="..." />
            ) : (
              avaliability.map((item) => (
                <label key={crypto.randomUUID()}>
                  <input
                    type="checkbox"
                    name="avaliability"
                    value={item.toString()}
                    checked={selectProdAvaliability.includes(item)}
                    onChange={(e) => {
                      handleChange(e.target.name, e.target.value === 'true');
                    }}
                  />
                  {item ? 'В наявності' : 'Відсутні'}
                </label>
              ))
            )}
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
      {/* <div className="catalog-sidebar__section">
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
      </div> */}
    </aside>
  );
};
