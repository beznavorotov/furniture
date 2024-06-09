import { Link } from 'react-router-dom';

const Breadcrumbs = ({ breadcrumbs = [] }) => {
  return (
    <div className="breadcrumbs">
      <Link to="/">Головна</Link>
      {breadcrumbs.map((item) => (
        <>
          <span>/</span>
          <span>{item}</span>
        </>
      ))}
    </div>
  );
};

export default Breadcrumbs;
