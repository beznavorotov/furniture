import React, { useState } from 'react';
import furniture1 from '../../assets/1.webp';
import furniture2 from '../../assets/2.webp';
import furniture3 from '../../assets/3.webp';


interface ICarousel {
  img: string;
  text: string;
}

export const Slider: React.FC = () => {
  const [items] = useState<ICarousel[]>([
    { img: furniture1, text: 'Нове надходження' },
    { img: furniture2, text: 'Гарячий розпродаж' },
    { img: furniture3, text: 'Дуже Дуже Гарячий розпродаж' },
  ]);

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
      // data-bs-ride="true"
    >
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide-to={index}
            className={`indicator ${index === 0 ? 'active' : ''}`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img
              src={item.img}
              className="img-fluid d-block w-100"
              alt="furniture"
            />
            <div className="carousel-caption">
              <h1 className="carousel-caption__title">{item.text}</h1>
              <a className="btn" href="/">
                Переглянути
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
