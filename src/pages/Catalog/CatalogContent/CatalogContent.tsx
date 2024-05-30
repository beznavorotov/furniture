import { useEffect, useState } from 'react';
import { BACKEND_CATEGORIES_PRODUCTS_URL } from '../../../constants';
import ProductCard from '../../../components/ProductCard/ProductCard';

export const CatalogContent = () => {
  const [demoData, setDemoData] = useState([]);

  async function getDemoData() {
    try {
      const response = await fetch(`${BACKEND_CATEGORIES_PRODUCTS_URL}1`);
      const data = await response.json();
      setDemoData(data);
    } catch (error) {
      console.error('demoData: ', error);
    }
  }

  useEffect(() => {
    getDemoData();
  }, []);

  return (
    <div className="catalog-content">
      {demoData?.map((item) => (
        <ProductCard
          key={item.article_code}
          img={item.photo[0]}
          name={item.title}
          price={item.price}
          discountPrice={item.discount}
          cardSize="small"
          // rating={null}
        />
      ))}
    </div>
  );
};
