import { Link } from 'react-router-dom';
import { CatalogSidebar } from '../CatalogSidebar/CatalogSidebar';

export const Catalog = () => {
  return (
    <div className="container">
      <CatalogSidebar />
      <div className="row">
        <Link to="/product/1">Картка 1</Link>
        <Link to="/product/2">Картка 2</Link>
        <Link to="/product/3">Картка 3</Link>
        <Link to="/product/4">Картка 4</Link>
        <Link to="/product/5">Картка 5</Link>
        <Link to="/product/6">Картка 6</Link>
        <Link to="/product/7">Картка 7</Link>
      </div>
    </div>
  );
};
