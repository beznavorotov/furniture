import ProductCard from '../ProductCard/ProductCard';
import lamp from '../../assets/lamp.jpg';

export const RecommendedProducts = () => {
  const recommended = [
    {
      id: 0o01,
      name: 'Лампа чорна рекомендована',
      price: '1000',
      action: '800',
    },
    {
      id: 0o02,
      name: 'Лампа чорна, але виглядає як сіра',
      price: '1000',
      action: '800',
    },
    {
      id: 0o03,
      name: 'Лампа не така вже й чорна',
      price: '1000',
      action: '800',
    },
    {
      id: 0o04,
      name: 'Лампа чорна, але могла бути й чорніша',
      price: '1000',
      action: '800',
    },
  ];

  return (
    <section className="recommended-products">
      <div className="recommended-products__heading">
        <h1 className="recommended-products__title">Рекомендовані товари</h1>
      </div>
      <div className="recommended-products__list">
        {recommended.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            newPrice={null}
            cardSize={null}
            img={lamp}
            // rating={null}
          />
        ))}
      </div>
    </section>
  );
};
