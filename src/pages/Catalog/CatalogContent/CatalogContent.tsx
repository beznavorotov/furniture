import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import ProductCard from '@/components/ProductCard/ProductCard';
import { IsLoading } from '@/components/IsLoading/IsLoading';
import { resetFilters } from '@/store/slices/filterCatalogSlice';
import {
  STATUS_LOADING,
  STATUS_SUCCEEDED,
  DATA_LOADING_MSG,
} from '@/constants';
import scrollToTop from '@/utils/scrollToTop';

export const CatalogContent = ({ data }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const ITEMS_PER_PAGE = 25;
  const catelogStatus = useSelector((state: RootState) => state.catalog.status);
  const filter = useSelector((state: RootState) => state.filter);
  const categoriesFilters = filter.categories;
  const roomsFilters = filter.rooms;
  const manufacturersFilters = filter.manufacturers;
  const collectionsFilters = filter.collections;
  const colourFilters = filter.colour;
  const lengthFilters = filter.length;
  const widthFilters = filter.width;
  const heightFilters = filter.height;
  const availabilityFilters = filter.availability;
  const priceFilters = filter.price;
  const sortBy = filter.sortBy;

  const searchStatus = useSelector((state: RootState) => state.search.status);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCatalog = data?.filter((item) => {
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
    const lengthMatch =
      lengthFilters.lenght === 0 || lengthFilters.includes(item.length);
    const widthMatch =
      widthFilters.lenght === 0 || widthFilters.includes(item.width);
    const heightMatch =
      heightFilters.lenght === 0 || heightFilters.includes(item.height);
    const availabilityMatch =
      availabilityFilters.lenght === 0 ||
      availabilityFilters.includes(item.availability);
    const priceMatch =
      priceFilters.lenght === 0 || priceFilters.includes(item.discount);

    return (
      categoriesMatch ||
      roomsMatch ||
      manufacturersMatch ||
      collectionsMatch ||
      colourMatch ||
      lengthMatch ||
      widthMatch ||
      heightMatch ||
      availabilityMatch ||
      priceMatch
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
        {catelogStatus === STATUS_LOADING || searchStatus === STATUS_LOADING ? (
          <IsLoading text={DATA_LOADING_MSG} />
        ) : (
          filteredAndSortedCatalog?.map((item) => (
            <ProductCard
              key={item.article_code}
              cardSize="small"
              props={item}
            />
          ))
        )}
      </div>

      <div
        className={`pagination ${
          catelogStatus === STATUS_SUCCEEDED ||
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
