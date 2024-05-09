import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export const Footer = () => {
  return (
    <div>
      <footer className="footer row">
        <div className="col-12 col-md-3 logo">
          <Link to="/">
            <img src={logo} className="img-fluid d-block " alt="furniture" />
          </Link>
        </div>
        <div className="col-12 col-md-3 footer_groups">
          <h4>Інформація</h4>
          <Link to={"/promotions"} className="text">Акції</Link>
          <Link to={"/delivery"} className="text">Доставка і оплата</Link>
        </div>
        <div className="col-12 col-md-3 footer_groups">
          <h4>Каталог</h4>
          <Link to={"/"} className="text">Передпокій</Link>
          <Link to={"/"} className="text">Вітальні</Link>
          <Link to={"/"} className="text">Спальні</Link>
          <Link to={"/"} className="text">Кухоні меблі</Link>
          <Link to={"/"} className="text">Дитячі меблі</Link>
          <Link to={"/"} className="text">Офісні меблі</Link>
          <Link to={"/"} className="text">Вана кімната</Link>
          <Link to={"/"} className="text">Гардеробні</Link>
        </div>
        <div className="col-12 col-md-3 footer_groups">
          <div className="phone">
            <h4>Контакти</h4>
            <Link to="support@furniture.store" className="text">support@furniture.store</Link>
            <Link to="+380991234567" className="text">+38 099 1234567</Link>
          </div>
          <div className="social">
            <h4>Соціальні мережі</h4>
            <Link to={"/"} className="text">Instagram</Link>
            <Link to={"/"} className="text">Facebook</Link>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>
          © 2024 <Link to="/">Furniture</Link> - інтернет-магазин меблів. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};
