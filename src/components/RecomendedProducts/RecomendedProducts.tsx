import ProductCard from '../ProductCard/ProductCard';
import lamp from '../../assets/lamp.jpg';

export const RecomendedProducts = () => {
  const recomended = [
    {
      id: 0o01,
      name: 'Лампа чорна рекомендована',
      price: '1000 грн',
      action: '800 грн',
    },
    {
      id: 0o02,
      name: 'Лампа чорна, але виглядає як сіра',
      price: '1000 грн',
      action: '800 грн',
    },
    {
      id: 0o03,
      name: 'Лампа не така вже й чорна',
      price: '1000 грн',
      action: '800 грн',
    },
    {
      id: 0o04,
      name: 'Лампа чорна, але могла бути й чорніша',
      price: '1000 грн',
      action: '800 грн',
    },
  ];

  return (
    <section className="recomended-products">
      <div className="recomended-products__heading">
        <h1 className="recomended-products__title">Рекомендовані товари</h1>
      </div>
      <div className="recomended-products__list">
        {recomended.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            newPrice={''}
            img={lamp}
          />
        ))}
      </div>
    </section>
  );
};
