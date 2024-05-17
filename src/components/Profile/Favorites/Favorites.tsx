import ProductCard from '../../ProductCard/ProductCard';
import lamp from '../../../assets/lamp.jpg';

export const Favorites = () => {
  const products = [
    { id: 1, name: 'Лампа чорна', price: '1000 грн', action: '800 грн' },

    {
      id: 2,
      name: 'Лампа не така вже й чорна',
      price: '1000 грн',
      action: '800 грн',
    },
    {
      id: 3,
      name: 'Лампа чорна, але могла бути й чорніша',
      price: '1000 грн',
      action: '800 грн',
    },
  ];

  return (
    <div className="favorites">
      <div className="title_favorites">
        <h1>Список обраного </h1>
      </div>
      <div className="favorites_product col-md-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            newPrice={product.action}
            img={lamp}
          />
        ))}
      </div>
    </div>
  );
};
