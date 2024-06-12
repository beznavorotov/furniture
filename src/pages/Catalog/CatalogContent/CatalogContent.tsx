import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import ProductCard from '@/components/ProductCard/ProductCard';
import { IsLoading } from '@/components/IsLoading/IsLoading';
import { resetFilters } from '@/store/slices/filterCatalogSlice';
import { STATUS_LOADING, STATUS_SUCCEEDED } from '@/constants';
import { scrollToTop } from '@/utils/scrollToTop';

export const CatalogContent = ({ data, type }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const ITEMS_PER_PAGE = 25;
  const categoryStatus = useSelector(
    (state: RootState) => state.catalog.status,
  );
  const categoriesFilters = useSelector(
    (state: RootState) => state.filter.categories,
  );
  const roomsFilters = useSelector((state: RootState) => state.filter.rooms);
  const manufacturersFilters = useSelector(
    (state: RootState) => state.filter.manufacturers,
  );
  const collectionsFilters = useSelector(
    (state: RootState) => state.filter.collections,
  );
  const colourFilters = useSelector((state: RootState) => state.filter.colour);
  const sortBy = useSelector((state: RootState) => state.filter.sortBy);

  const searchStatus = useSelector((state: RootState) => state.search.status);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCatalog = data.filter((item) => {
    const categoriesMatch =
      categoriesFilters.lenght === 0 ||
      categoriesFilters.includes(item.item_category);
    const roomsMatch =
      roomsFilters.lenght === 0 || roomsFilters.includes(item.room);
    const manufacturersMatch =
      manufacturersFilters.lenght === 0 ||
      manufacturersFilters.includes(item.manufacturer);
    const collectionsMatch =
      collectionsFilters.lenght === 0 ||
      collectionsFilters.includes(item.collection);
    const colourMatch =
      colourFilters.lenght === 0 || colourFilters.includes(item.colour);

    return (
      categoriesMatch ||
      roomsMatch ||
      manufacturersMatch ||
      collectionsMatch ||
      colourMatch
    );
  });

  // pagination
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems =
    filteredCatalog.length === 0
      ? data.slice(indexOfFirstItem, indexOfLastItem)
      : filteredCatalog.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages =
    filteredCatalog.length === 0
      ? Math.ceil(data.length / ITEMS_PER_PAGE)
      : Math.ceil(filteredCatalog.length / ITEMS_PER_PAGE);

  const sortCatalog = () => {
    const sorting = (a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }
      return 0;
    };

    if (sortBy === 'minMax') {
      return currentItems.sort((a, b) => sorting(a.discount, b.discount));
    } else if (sortBy === 'maxMin') {
      return currentItems.sort((a, b) => sorting(b.discount, a.discount));
    } else {
      return currentItems.sort((a, b) => b.rating - a.rating);
    }
  };

  const filteredAndSortedCatalog = sortCatalog();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
    dispatch(resetFilters());
    // eslint-disable-next-line
  }, [pathname]);

  useEffect(() => {
    scrollToTop('smooth');
    // eslint-disable-next-line
  }, [currentPage, sortBy]);

  return (
    <div className="catalog-content">
      <div className="catalog-content__wrapper">
        {categoryStatus === STATUS_LOADING ||
        searchStatus === STATUS_LOADING ? (
          <IsLoading text="Заждіть секунду..." />
        ) : (
          filteredAndSortedCatalog?.map(
            ({ article_code, photo, title, price, discount, rating }) => (
              <ProductCard
                key={article_code}
                img={photo.find((item) => item.includes('MAIN_photo_image_'))}
                name={title}
                price={price}
                discountPrice={discount}
                cardSize="small"
                id={article_code}
                stateType={type}
                rating={rating}
              />
            ),
          )
        )}
      </div>

      <div
        className={`pagination ${
          categoryStatus === STATUS_SUCCEEDED ||
          searchStatus === STATUS_SUCCEEDED
            ? 'show'
            : ''
        }`}
      >
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Попередня
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={crypto.randomUUID()}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Наступна
        </button>
      </div>
    </div>
  );
};
