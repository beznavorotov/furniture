import map from '../../assets/map.jpg';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import telegram from '../../assets/icons/telegram.png';

export const Contact = () => {
  return (
    <div className="container">
      <h1>Наші контакти</h1>
      <div className="contact">
        <div className="contact_info">
          <div className="item">
            <h3>Адреса:</h3>
            <p>місто Київ</p>
          </div>
          <div className="item">
            <h3>Контакти:</h3>
            <span>
              Телефон:<a href="tel:+380950000000">+38 095 000 00 00</a>
            </span>
            <span>
              Email:<a href="mailto:urbanhome@gmail.com">urbanhome@gmail.com</a>
            </span>
          </div>
          <div className="item">
            <h3>Графік роботи:</h3>
            <p>Пн-пт: 10:00-19:00</p>
            <p>Субота: 11:00-18:00</p>
            <p>Нд: 11:00-18:00</p>
          </div>
          <div className="item">
            <h3>Ми в соціальних мережах:</h3>
            <div className='icon'>
              <img src={telegram} alt="" />
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
        </div>
        <div className="map">
          <img src={map} alt="map" />
        </div>
      </div>
    </div>
  );
};
