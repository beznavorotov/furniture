import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export const Footer = () => {
  const catalogLinks = [
    { title: 'Передпокій', path: '/product' },
    { title: 'Вітальні', path: '/' },
    { title: 'Спальні', path: '/' },
    { title: 'Кухоні меблі', path: '/' },
    { title: 'Дитячі меблі', path: '/' },
    { title: 'Офісні меблі', path: '/' },
    { title: 'Ванна кімната', path: '/' },
    { title: 'Гардеробні', path: '/' },
  ];

  return (
    <div className="container">
      <footer className="footer row">
        <div className="col-12 col-md-3 logo">
          <Link to="/">
            <img src={logo} className="img-fluid d-block " alt="furniture" />
          </Link>
        </div>
        <div className="col-12 col-md-3 footer_groups">
          <h4>Інформація</h4>
          <Link to={'/promotions'} className="text">
            Акції
          </Link>
          <Link to={'/delivery'} className="text">
            Доставка і оплата
          </Link>
          <Link to={'/profile'} className="text">
            Кабінет (tmp)
          </Link>
        </div>
        <div className="col-12 col-md-3 footer_groups">
          <h4>Каталог</h4>
          {catalogLinks.map((link, index) => (
            <Link key={index} to={link.path} className="text">
              {link.title}
            </Link>
          ))}
        </div>
        <div className="col-12 col-md-3 footer_groups">
          <div className="phone">
            <h4>Контакти</h4>
            <a href="mailto:support@furniture.store" className="contacts">
              support@furniture.store
            </a>
            <a href="tel:+380991234567" className="contacts">
              +38 099 1234567
            </a>
          </div>
          <div className="social">
            <h4>Соціальні мережі</h4>
            <Link to={'/'} className="contacts">
              Instagram
            </Link>
            <Link to={'/'} className="contacts">
              Facebook
            </Link>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>
          © 2024 <Link to="/">UrbanHome</Link> - інтернет-магазин меблів. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};
