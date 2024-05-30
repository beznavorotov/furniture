import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import lamp from '../../assets/lamp.jpg';

export const Sale = () => {
  const products = [
    { id: 0o1, name: 'Лампа чорна', price: '1000', action: '800' },
    { id: 0o2, name: 'Лампа дуже чорна', price: '1000', action: '800' },
    {
      id: 0o3,
      name: 'Лампа не така вже й чорна',
      price: '1000',
      action: '800',
    },
    {
      id: 0o4,
      name: 'Лампа чорна, але могла бути й чорніша',
      price: '1000',
      action: '800',
    },
  ];

  return (
    <section className="sale row">
      <div className="name section__heading">
        <h1 className="section__heading--title">Розпродаж</h1>
        <Link to="/sale" className="section__heading--link">
          Усі пропозиції
        </Link>
      </div>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          newPrice={product.action}
          img={lamp}
          cardSize={null}
          // rating={null}
        />
      ))}
    </section>
  );
};
