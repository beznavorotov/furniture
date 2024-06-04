import { useSelector } from 'react-redux';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { RootState } from '../../../store';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const CatalogContent = () => {
  const { pathname } = useLocation();
  const category = useSelector((state: RootState) => state.catalog.category);
  const search = useSelector((state: RootState) => state.search.searchResults);
  const categoryStatus = useSelector(
    (state: RootState) => state.catalog.status,
  );
  const searchStatus = useSelector((state: RootState) => state.search.status);
  const [properState, setProperState] = useState([]);
  const [properCardType, setProperCardType] = useState('');

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
    </div>
  );
};
