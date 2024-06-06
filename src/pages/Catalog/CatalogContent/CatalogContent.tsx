import { useSelector } from 'react-redux';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { RootState } from '../../../store';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IsLoading } from '../../../components/IsLoading/IsLoading';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const CatalogContent = () => {
  const query = useQuery();
  const { pathname } = useLocation();
  const category = useSelector((state: RootState) => state.catalog.category);
  const search = useSelector((state: RootState) => state.search.searchResults);
  const categoryStatus = useSelector(
    (state: RootState) => state.catalog.status,
  );
  const searchStatus = useSelector((state: RootState) => state.search.status);
  const [properState, setProperState] = useState([]);
  const [properCardType, setProperCardType] = useState('');
  const [itemsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(query.get('query'));

  useEffect(() => {
    pathname.includes('/search')
      ? (setProperState(search), setProperCardType('search'))
      : (setProperState(category), setProperCardType('category'));
  }, [pathname, search, category]);

  // pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = properState.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(properState.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="catalog-content">
      <div className="catalog-content__wrapper">
        {categoryStatus === 'loading' || searchStatus === 'loading' ? (
          <IsLoading text="Заждіть секунду..." />
        ) : (
          currentItems?.map((item) => (
            <ProductCard
              key={item.article_code}
              img={item.photo.find((item) => item.includes('MAIN_photo_image_'))}
              name={item.title}
              price={item.price}
              discountPrice={item.discount}
              cardSize="small"
              id={item.article_code}
              stateType={properCardType}
              rating={item.review}
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
