import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import chair from '../../assets/chair.png';

export const Bestsellers = () => {
  const products = [
    { id: 0o11, name: 'Крісло Дюна', price: '3000 грн' },
    { id: 0o22, name: 'Крісло Месія Дюни', price: '3000 грн' },
    { id: 0o33, name: 'Крісло Діти Дюни', price: '3000 грн' },
    { id: 0o44, name: 'Крісло Бог Імператор Дюни', price: '3000 грн' },
  ];

  return (
    <div className="bestsellers row">
      <div className="name section__heading">
        <h1 className="section__heading--title">Бестселери</h1>
        <Link to="/sale" className="section__heading--link">
          Усі пропозиції
        </Link>
      </div>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          newPrice={''}
          img={chair}
          index={''}
        />
      ))}
    </div>
  );
};
