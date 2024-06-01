import { useSelector } from 'react-redux';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { RootState } from '../../../store';

export const CatalogContent = () => {
  const category = useSelector((state: RootState) => state.catalog.category);

  return (
    <div className="catalog-content">
      {category.map((item) => (
        <ProductCard
          key={item.article_code}
          img={item.photo[0]}
          name={item.title}
          price={item.price}
          discountPrice={item.discount}
          cardSize="small"
          id={item.article_code}
          // rating={null}
        />
      ))}
    </div>
  );
};
