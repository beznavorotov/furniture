import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = ({ breadcrumbs = [] }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="breadcrumbs">
      <Link to="/">Головна</Link>
      {pathname.includes('search') ? (
        <span>
          <span className="breadcrumbs-devider">/</span>
          <span>Пошук</span>
        </span>
      ) : (
        breadcrumbs.map((item) => (
          <span key={crypto.randomUUID()}>
            <span className="breadcrumbs-devider">/</span>
            <span>{item}</span>
          </span>
        ))
      )}
    </div>
  );
};

export default Breadcrumbs;
