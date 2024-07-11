import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import ProductCard from '@/components/ProductCard/ProductCard';
import { fetchBestsellers } from '@/store/slices/catalogSlice';
import { STATUS_IDLE } from '@/constants';

export const Bestsellers = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const bestsellers = useSelector(
    (state: RootState) => state.catalog.bestsellers,
  );
  const bestsellersStatus = useSelector(
    (state: RootState) => state.catalog.status,
  );

  useEffect(() => {
    if (bestsellersStatus === STATUS_IDLE) {
      dispatch(fetchBestsellers());
    }
  }, [bestsellersStatus, dispatch, pathname]);

  const shuffleArray = [...bestsellers]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <div className="bestsellers row">
      <div className="name section__heading">
        <h1 className="section__heading--title">Бестселери</h1>
      </div>
      <div className="bestsellers--wrapper">
        {shuffleArray.map((item) => (
          <ProductCard key={item.article_code} cardSize={null} props={item} />
        ))}
      </div>
    </div>
  );
};
