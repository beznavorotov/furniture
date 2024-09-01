import { Link } from 'react-router-dom';
import logo from '@/assets/logo.webp';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import scrollToTop from '@/utils/scrollToTop';
export const Footer = () => {
  const rooms = useSelector((state: RootState) => state.rooms.items);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  return (
    <div className="container">
      <footer className="footer row">
        <div className="col-12 col-md-3 logo">
          <Link
            to="/"
            className="footer-logo"
            onClick={() => {
              scrollToTop('instant');
            }}
          >
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

          <Link to={isAuth ? '/profile' : '/login'} className="text">
            Кабінет
          </Link>
        </div>
        <div className="col-12 col-md-3 footer_groups">
          {/* <h4>Каталог</h4>
          {rooms.map((link) => (
            <Link key={crypto.randomUUID()} to={link.path} className="text">
              {link.title}
            </Link>
          ))} */}
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
            <a
              href="https://www.instagram.com/"
              className="contacts"
              target="_blank"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/"
              className="contacts"
              target="_blank"
            >
              Facebook
            </a>
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
