import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { IsLoading } from '../../../components/IsLoading/IsLoading';
import { STATUS_LOADING, STATUS_SUCCEEDED } from '../../../constants';
import scrollToTop from '../../../utils/scrollToTop';

export const CatalogContent = ({ data, type }) => {
  const { pathname } = useLocation();
  const ITEMS_PER_PAGE = 25;
  const categoryStatus = useSelector(
    (state: RootState) => state.catalog.status,
  );

  const searchStatus = useSelector((state: RootState) => state.search.status);
  const [currentPage, setCurrentPage] = useState(1);

  // pagination
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [pathname]);

  useEffect(() => {
    scrollToTop('smooth');
  }, [currentPage]);

  return (
    <div className="catalog-content">
      <div className="catalog-content__wrapper">
        {categoryStatus === STATUS_LOADING ||
        searchStatus === STATUS_LOADING ? (
          <IsLoading text="Заждіть секунду..." />
        ) : (
          currentItems?.map(
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
