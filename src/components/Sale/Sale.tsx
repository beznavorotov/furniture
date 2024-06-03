import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import { fetchSale } from '../../store/slices/catalogSlice';

export const Sale = () => {
  const dispatch = useDispatch();
  const sale = useSelector((state: RootState) => state.catalog.sale);
  const saleStatus = useSelector((state: RootState) => state.catalog.status);

  useEffect(() => {
    if (saleStatus === 'idle') {
      dispatch(fetchSale());
    }
  }, [saleStatus, dispatch]);

  const shuffleArray = [...sale].sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <section className="sale row">
      <div className="name section__heading">
        <h1 className="section__heading--title">Розпродаж</h1>
      </div>
      <div className="sale--wrapper">
        {shuffleArray.map((item) => (
          <ProductCard
            key={item.id}
            name={item.title}
            price={item.price}
            discountPrice={item.discount}
            img={item.photo.find((item) => item.includes('photo_image_0'))}
            cardSize={null}
            id={item.article_code}
            stateType="sale"
            rating={item.review}
          />
        ))}
      </div>
    </section>
  );
};
