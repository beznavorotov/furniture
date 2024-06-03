import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <Link to='/'>Головна</Link>
      <span>/</span>
      <span>Вітальні</span>
      <span>/</span>
      <span>Дивани</span>
      <span>/</span>
      <span>Диван</span>
    </div>
  );
};

export default Breadcrumbs;
