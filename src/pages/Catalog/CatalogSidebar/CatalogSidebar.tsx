import { useSelector, useDispatch } from 'react-redux';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import { RootState } from '@/store';
import {
  toggleFilter,
  setInputRangeData,
  resetFilters,
  selectCategories,
  selectRooms,
  selectManufacturers,
  selectCollections,
  selectColour,
  selectAvailability,
} from '@/store/slices/filterCatalogSlice';
import { IsLoading } from '@/components/IsLoading/IsLoading';
import { useState } from 'react';

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
  const availability = uniqueValues.availability;
  const price = uniqueValues.price;
  const lengthData = uniqueValues.length;
  const widthData = uniqueValues.width;
  const heightData = uniqueValues.height;

  const selectCategory: string[] = useSelector(selectCategories);
  const selectRoom: string[] = useSelector(selectRooms);
  const selectManufacturer: string[] = useSelector(selectManufacturers);
  const selectCollection: string[] = useSelector(selectCollections);
  const selectColor: string[] = useSelector(selectColour);
  const selectProdAvailability: boolean[] = useSelector(selectAvailability);
  const [minPrice, setMinPrice] = useState(2500);
  const [maxPrice, setMaxPrice] = useState(27500);
  const [minLength, setMinLength] = useState(50);
  const [maxLength, setMaxLength] = useState(450);
  const [minWidth, setMinWidth] = useState(50);
  const [maxWidth, setMaxWidth] = useState(450);
  const [minHeight, setMinHeight] = useState(50);
  const [maxHeight, setMaxHeight] = useState(450);

  const handleChange = (category: string, value: string | boolean) => {
    dispatch(toggleFilter({ category, value }));
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    type: string,
    data: number[],
  ) => {
    e.preventDefault();

    const dataMap: { [key: string]: number[] } = {
      price: price,
      length: lengthData,
      width: widthData,
      height: heightData,
    };

    if (dataMap[type]) {
      const value = dataMap[type].filter(
        (item) => item >= data[0] && item <= data[1],
      );
      dispatch(setInputRangeData({ type, value }));
    }
  };

  return (
    <aside className="catalog-sidebar">
      {/* Ціна */}
      <div className="catalog-sidebar__section">
        <button
          className="button button__white button__clear"
          onClick={() => {
            setMinPrice(2500);
            setMaxPrice(27500);
            setMinLength(50);
            setMaxLength(450);
            setMinWidth(50);
            setMaxWidth(450);
            setMinHeight(50);
            setMaxHeight(450);
            dispatch(resetFilters());
          }}
        >
          Очистити фільтри
        </button>
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Ціна</h4>
        </div>
        <div className="catalog-sidebar__content">
          <form
            onSubmit={(e) => handleSubmit(e, 'price', [minPrice, maxPrice])}
            className="filter filter__input-range"
          >
            <MultiRangeSlider
              min={0}
              minValue={minPrice}
              maxValue={maxPrice}
              max={30000}
              step={5}
              ruler={false}
              label={false}
              onChange={(e: ChangeResult) => {
                setMinPrice(e.minValue);
                setMaxPrice(e.maxValue);
              }}
            />
            <div className="filter__input-wrapper">
              <input
                type="number"
                name="minPrice"
                id="minPrice"
                placeholder="0"
                value={minPrice}
                onChange={(e) => {
                  setMinPrice(+e.target.value);
                }}
              />
              <input
                type="number"
                name="maxPrice"
                id="maxPrice"
                placeholder="50000"
                onChange={(e) => {
                  +e.target.value < minPrice
                    ? setMaxPrice(minPrice + 1)
                    : setMaxPrice(+e.target.value);
                }}
                value={maxPrice}
              />
              <button className="button button__input-range" type="submit">
                ok
              </button>
            </div>
          </form>
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
            {!availability ? (
              <IsLoading text="..." />
            ) : (
              availability.map((item) => (
                <label key={crypto.randomUUID()}>
                  <input
                    type="checkbox"
                    name="availability"
                    value={item.toString()}
                    checked={selectProdAvailability.includes(item)}
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
          <form
            onSubmit={(e) => handleSubmit(e, 'length', [minLength, maxLength])}
            className="filter filter__input-range"
          >
            <MultiRangeSlider
              min={0}
              minValue={minLength}
              maxValue={maxLength}
              max={500}
              step={5}
              ruler={false}
              label={false}
              onChange={(e: ChangeResult) => {
                setMinLength(e.minValue);
                setMaxLength(e.maxValue);
              }}
            />
            <div className="filter__input-wrapper">
              <input
                type="number"
                name="minLength"
                id="minLength"
                placeholder="0"
                value={minLength}
                onChange={(e) => {
                  setMinLength(+e.target.value);
                }}
              />
              <input
                type="number"
                name="maxLength"
                id="maxLength"
                placeholder="500"
                onChange={(e) => {
                  +e.target.value < minLength
                    ? setMaxLength(minLength + 1)
                    : setMaxLength(+e.target.value);
                }}
                value={maxLength}
              />
              <button className="button button__input-range" type="submit">
                ok
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Ширина */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Ширина</h4>
        </div>
        <div className="catalog-sidebar__content">
          <form
            onSubmit={(e) => handleSubmit(e, 'width', [minWidth, maxWidth])}
            className="filter filter__input-range"
          >
            <MultiRangeSlider
              min={0}
              minValue={minWidth}
              maxValue={maxWidth}
              max={500}
              step={5}
              ruler={false}
              label={false}
              onChange={(e: ChangeResult) => {
                setMinWidth(e.minValue);
                setMaxWidth(e.maxValue);
              }}
            />
            <div className="filter__input-wrapper">
              <input
                type="number"
                name="minWidth"
                id="minWidth"
                placeholder="0"
                value={minWidth}
                onChange={(e) => {
                  setMinWidth(+e.target.value);
                }}
              />
              <input
                type="number"
                name="maxWidth"
                id="maxWidth"
                placeholder="500"
                onChange={(e) => {
                  +e.target.value < minWidth
                    ? setMaxWidth(minWidth + 1)
                    : setMaxWidth(+e.target.value);
                }}
                value={maxWidth}
              />
              <button className="button button__input-range" type="submit">
                ok
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Висота */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Висота</h4>
        </div>
        <div className="catalog-sidebar__content">
          <form
            onSubmit={(e) => handleSubmit(e, 'height', [minHeight, maxHeight])}
            className="filter filter__input-range"
          >
            <MultiRangeSlider
              min={0}
              minValue={minHeight}
              maxValue={maxHeight}
              max={500}
              step={5}
              ruler={false}
              label={false}
              onChange={(e: ChangeResult) => {
                setMinHeight(e.minValue);
                setMaxHeight(e.maxValue);
              }}
            />
            <div className="filter__input-wrapper">
              <input
                type="number"
                name="minHeight"
                id="minHeight"
                placeholder="0"
                value={minHeight}
                onChange={(e) => {
                  setMinHeight(+e.target.value);
                }}
              />
              <input
                type="number"
                name="maxHeight"
                id="maxHeight"
                placeholder="500"
                onChange={(e) => {
                  +e.target.value < minHeight
                    ? setMaxHeight(minHeight + 1)
                    : setMaxHeight(+e.target.value);
                }}
                value={maxHeight}
              />
              <button className="button button__input-range" type="submit">
                ok
              </button>
            </div>
          </form>
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
