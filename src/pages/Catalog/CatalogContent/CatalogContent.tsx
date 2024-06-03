import { useSelector } from 'react-redux';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { RootState } from '../../../store';

export const CatalogContent = () => {
  const category = useSelector((state: RootState) => state.catalog.category);
  const categoryStatus = useSelector(
    (state: RootState) => state.catalog.status,
  );

  return (
    <div className="catalog-content">
      {categoryStatus === 'loading' ? (
        <p>Loading</p>
      ) : (
        category.map((item) => (
          <ProductCard
            key={item.article_code}
            img={item.photo.find((item) => item.includes('photo_image_0'))}
            name={item.title}
            price={item.price}
            discountPrice={item.discount}
            cardSize="small"
            id={item.article_code}
            stateType="category"
            rating={item.review}
          />
        ))
      )}
    </div>
  );
};
