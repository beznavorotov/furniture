import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import ProductCard from '@/components/ProductCard/ProductCard';
import { fetchSale } from '@/store/slices/catalogSlice';
import { STATUS } from '@/constants';

export const Sale = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const sale = useSelector((state: RootState) => state.catalog.sale);
  const saleStatus = useSelector((state: RootState) => state.catalog.status);

  useEffect(() => {
    if (saleStatus === STATUS.IDLE) {
      dispatch(fetchSale());
    }
  }, [saleStatus, dispatch, pathname]);

  const shuffleArray = [...sale].sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <section className="sale row">
      <div className="name section__heading">
        <h1 className="section__heading--title">Розпродаж</h1>
      </div>
      <div className="sale--wrapper">
        {shuffleArray.map((item) => (
          <ProductCard key={item.article_code} cardSize={null} props={item} />
        ))}
      </div>
    </section>
  );
};
