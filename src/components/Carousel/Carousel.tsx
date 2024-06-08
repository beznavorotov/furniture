import furniture1 from '../../assets/1.webp';
import furniture2 from '../../assets/2.webp';
import furniture3 from '../../assets/3.webp';
import { Link } from 'react-router-dom';

export const Slider: React.FC = () => {
  const sliderItems = [
    { img: furniture1, text: 'Нове надходження', link: '/catalog/1' },
    { img: furniture2, text: 'Гарячий розпродаж', link: '/catalog/sale' },
    {
      img: furniture3,
      text: 'Дуже Дуже Гарячий розпродаж',
      link: '/catalog/bestsellers',
    },
  ];

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
      // data-bs-ride="true"
    >
      <div className="carousel-indicators">
        {sliderItems.map((_, index) => (
          <button
            key={crypto.randomUUID()}
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide-to={index}
            className={`indicator ${index === 0 ? 'active' : ''}`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {sliderItems.map((item, index) => (
          <div
            key={crypto.randomUUID()}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img
              src={item.img}
              className="img-fluid d-block w-100"
              alt="furniture"
            />
            <div className="carousel-caption">
              <h1 className="carousel-caption__title">{item.text}</h1>
              <Link className="button" to={item.link}>
                Переглянути
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
