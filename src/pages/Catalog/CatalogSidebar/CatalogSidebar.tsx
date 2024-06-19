import { useState } from 'react';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import { useSelector, useDispatch } from 'react-redux';
import { CatalogSidebarSection } from './CatalogSidebarSection';
import { IsLoading } from '@/components/IsLoading/IsLoading';
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

export const CatalogSidebar = () => {
  const dispatch = useDispatch();
  const initialState = {
    minPrice: 2500,
    maxPrice: 27500,
    minLength: 50,
    maxLength: 450,
    minWidth: 50,
    maxWidth: 450,
    minHeight: 50,
    maxHeight: 450,
  };
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
  const [state, setState] = useState(initialState);

  const updateState = (key: string, value: number) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

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
      <button
        className="button button__white button__clear"
        onClick={() => {
          setState(initialState);
          dispatch(resetFilters());
        }}
      >
        Очистити фільтри
      </button>

      {/* Ціна */}
      <CatalogSidebarSection type="price" title="Ціна">
        <form
          className="filter filter__input-range"
          onSubmit={(e) =>
            handleSubmit(e, 'price', [state.minPrice, state.maxPrice])
          }
        >
          <MultiRangeSlider
            min={0}
            minValue={state.minPrice}
            maxValue={state.maxPrice}
            max={30000}
            step={5}
            ruler={false}
            label={false}
            onChange={(e: ChangeResult) => {
              updateState('minPrice', e.minValue);
              updateState('maxPrice', e.maxValue);
            }}
          />
          <div className="filter__input-wrapper">
            <input
              type="number"
              name="minPrice"
              id="minPrice"
              placeholder="0"
              value={state.minPrice}
              onChange={(e) => {
                updateState('minPrice', +e.target.value);
              }}
            />
            <input
              type="number"
              name="maxPrice"
              id="maxPrice"
              placeholder="50000"
              onChange={(e) => {
                +e.target.value < state.minPrice
                  ? updateState('maxPrice', state.minPrice + 1)
                  : updateState('maxPrice', +e.target.value);
              }}
              value={state.maxPrice}
            />
            <button className="button button__input-range" type="submit">
              ok
            </button>
          </div>
        </form>
      </CatalogSidebarSection>

      {/* Кімнати */}
      <CatalogSidebarSection type={rooms} title="Кімнати">
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
      </CatalogSidebarSection>

      {/* Категорії */}
      <CatalogSidebarSection type={categories} title="Категорії">
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
      </CatalogSidebarSection>

      {/* Колекції */}
      <CatalogSidebarSection type={collections} title="Колекції">
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
      </CatalogSidebarSection>

      {/* Виробник */}
      <CatalogSidebarSection type={manufacturers} title="Виробник">
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
      </CatalogSidebarSection>

      {/* Матеріал */}
      <CatalogSidebarSection type={colour} title="Колір">
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
      </CatalogSidebarSection>

      {/* Наявність */}
      <CatalogSidebarSection type={availability} title="Наявність">
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
      </CatalogSidebarSection>

      {/* Довжина */}
      <CatalogSidebarSection type={lengthData} title="Довжина">
        <form
          className="filter filter__input-range"
          onSubmit={(e) =>
            handleSubmit(e, 'length', [state.minLength, state.maxLength])
          }
        >
          <MultiRangeSlider
            min={0}
            minValue={state.minLength}
            maxValue={state.maxLength}
            max={500}
            step={5}
            ruler={false}
            label={false}
            onChange={(e: ChangeResult) => {
              updateState('minLength', e.minValue);
              updateState('maxLength', e.maxValue);
            }}
          />
          <div className="filter__input-wrapper">
            <input
              type="number"
              name="minLength"
              id="minLength"
              placeholder="0"
              value={state.minLength}
              onChange={(e) => {
                updateState('minLength', +e.target.value);
              }}
            />
            <input
              type="number"
              name="maxLength"
              id="maxLength"
              placeholder="500"
              onChange={(e) => {
                +e.target.value < state.minLength
                  ? updateState('maxLength', state.minLength + 1)
                  : updateState('maxLength', +e.target.value);
              }}
              value={state.maxLength}
            />
            <button className="button button__input-range" type="submit">
              ok
            </button>
          </div>
        </form>
      </CatalogSidebarSection>

      {/* Ширина */}
      <CatalogSidebarSection type={widthData} title="Ширина">
        <form
          onSubmit={(e) =>
            handleSubmit(e, 'width', [state.minWidth, state.maxWidth])
          }
          className="filter filter__input-range"
        >
          <MultiRangeSlider
            min={0}
            minValue={state.minWidth}
            maxValue={state.maxWidth}
            max={500}
            step={5}
            ruler={false}
            label={false}
            onChange={(e: ChangeResult) => {
              updateState('minWidth', e.minValue);
              updateState('maxWidth', e.maxValue);
            }}
          />
          <div className="filter__input-wrapper">
            <input
              type="number"
              name="minWidth"
              id="minWidth"
              placeholder="0"
              value={state.minWidth}
              onChange={(e) => {
                updateState('minWidth', +e.target.value);
              }}
            />
            <input
              type="number"
              name="maxWidth"
              id="maxWidth"
              placeholder="500"
              onChange={(e) => {
                +e.target.value < state.minWidth
                  ? updateState('maxWidth', state.minWidth + 1)
                  : updateState('maxWidth', +e.target.value);
              }}
              value={state.maxWidth}
            />
            <button className="button button__input-range" type="submit">
              ok
            </button>
          </div>
        </form>
      </CatalogSidebarSection>

      {/* Висота */}
      <CatalogSidebarSection type={heightData} title="Висота">
        <form
          className="filter filter__input-range"
          onSubmit={(e) =>
            handleSubmit(e, 'height', [state.minHeight, state.maxHeight])
          }
        >
          <MultiRangeSlider
            min={0}
            minValue={state.minHeight}
            maxValue={state.maxHeight}
            max={500}
            step={5}
            ruler={false}
            label={false}
            onChange={(e: ChangeResult) => {
              updateState('minHeight', e.minValue);
              updateState('maxHeight', e.maxValue);
            }}
          />
          <div className="filter__input-wrapper">
            <input
              type="number"
              name="minHeight"
              id="minHeight"
              placeholder="0"
              value={state.minHeight}
              onChange={(e) => {
                updateState('minHeight', +e.target.value);
              }}
            />
            <input
              type="number"
              name="maxHeight"
              id="maxHeight"
              placeholder="500"
              onChange={(e) => {
                +e.target.value < state.minHeight
                  ? updateState('maxHeight', state.minHeight + 1)
                  : updateState('maxHeight', +e.target.value);
              }}
              value={state.maxHeight}
            />
            <button className="button button__input-range" type="submit">
              ok
            </button>
          </div>
        </form>
      </CatalogSidebarSection>
    </aside>
  );
};
