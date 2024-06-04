import { useSelector } from 'react-redux';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { RootState } from '../../../store';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
  // const [currentPage, setCurrentPage] = useState(1);

  console.log(query.get('query'));

  // pagination
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);
  // const totalPages = Math.ceil(searchResults.length / itemsPerPage);
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  useEffect(() => {
    pathname.includes('/search')
      ? (setProperState(search), setProperCardType('search'))
      : (setProperState(category), setProperCardType('category'));
  }, [pathname, search, category]);

  return (
    <div className="catalog-content">
      {categoryStatus === 'loading' || searchStatus == 'loading' ? (
        <p>Loading</p>
      ) : (
        properState?.map((item) => (
          <ProductCard
            key={item.article_code}
            img={item.photo.find((item) => item.includes('photo_image_0'))}
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

      {/* <div className="pagination">
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
      </div> */}
    </div>
  );
};
