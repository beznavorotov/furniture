import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import { fetchBestsellers } from '../../store/slices/catalogSlice';

export const Bestsellers = () => {
  const dispatch = useDispatch();
  const bestsellers = useSelector(
    (state: RootState) => state.catalog.bestsellers,
  );
  const bestsellersStatus = useSelector(
    (state: RootState) => state.catalog.status,
  );

  useEffect(() => {
    if (bestsellersStatus === 'idle') {
      dispatch(fetchBestsellers());
    }
  }, [bestsellersStatus, dispatch]);

  return (
    <div className="bestsellers row">
      <div className="name section__heading">
        <h1 className="section__heading--title">Бестселери</h1>
        <Link to="/bestsellers" className="section__heading--link">
          Усі пропозиції
        </Link>
      </div>
      <div className="bestsellers--wrapper">
        {bestsellers.slice(0, 4).map((item) => (
          <ProductCard
            key={item.id}
            name={item.title}
            price={item.price}
            discountPrice={item.price}
            img={item.photo.find((item) => item.includes('photo_image_0'))}
            cardSize={null}
            id={item.article_code}
            stateType="bestsellers"
            // rating={null}
          />
        ))}
      </div>
    </div>
  );
};
