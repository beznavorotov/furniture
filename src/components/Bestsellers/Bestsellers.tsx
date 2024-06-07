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
          <ProductCard
            key={item.id}
            name={item.title}
            price={item.price}
            discountPrice={item.price}
            img={item.photo.find((item) => item.includes('MAIN_photo_image_'))}
            cardSize={null}
            id={item.article_code}
            stateType="bestsellers"
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};
