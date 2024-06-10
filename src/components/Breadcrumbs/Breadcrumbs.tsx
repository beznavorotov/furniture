import { Link } from 'react-router-dom';

const Breadcrumbs = ({ breadcrumbs = [] }) => {
  return (
    <div className="breadcrumbs">
      <Link to="/">Головна</Link>
      {breadcrumbs.map((item) => (
        <span key={crypto.randomUUID()}>
          <span className="breadcrumbs-devider">/</span>
          <span>{item}</span>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
