import { useEffect, useState } from 'react';
import { BACKEND_CATEGORIES_PRODUCTS_URL } from '../../../constants';
import ProductCard from '../../../components/ProductCard/ProductCard';
import fetchData from '../../../utils/fetchData';

export const CatalogContent = ({ pageId = 1 }) => {
  const [demoData, setDemoData] = useState([]);

  async function getDemoData() {
    try {
      const result = await fetchData(
        `${BACKEND_CATEGORIES_PRODUCTS_URL}${pageId}`,
      );
      setDemoData(result);
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
