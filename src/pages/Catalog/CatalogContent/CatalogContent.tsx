import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { RootState } from '../../../store';
import { IsLoading } from '../../../components/IsLoading/IsLoading';
import ScrollToTop from '../../../utils/ScrollToTop';
import { useLocation } from 'react-router-dom';

export const CatalogContent = ({ data, type }) => {
  const { pathname } = useLocation();
  const categoryStatus = useSelector(
    (state: RootState) => state.catalog.status,
  );

  const searchStatus = useSelector((state: RootState) => state.search.status);

  const [itemsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  // pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  return (
    <div className="catalog-content">
      <ScrollToTop />
      <div className="catalog-content__wrapper">
        {categoryStatus === 'loading' || searchStatus === 'loading' ? (
          <IsLoading text="Заждіть секунду..." />
        ) : (
          currentItems?.map((item) => (
            <ProductCard
              key={item.article_code}
              img={item.photo.find((item) =>
                item.includes('MAIN_photo_image_'),
              )}
              name={item.title}
              price={item.price}
              discountPrice={item.discount}
              cardSize="small"
              id={item.article_code}
              stateType={type}
              rating={item.rating}
            />
          ))
        )}
      </div>

      <div
        className={`pagination ${
          categoryStatus === 'succeeded' || searchStatus === 'succeeded'
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
            key={index + 1}
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
