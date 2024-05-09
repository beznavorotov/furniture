import React, { useState } from "react";
import classNames from "classnames";
import furniture1 from "../../assets/1.png";
import furniture2 from "../../assets/2.png";
import furniture3 from "../../assets/3.png";

interface ICarousel {
  img: string;
}

const Slider: React.FC = () => {
  const [items, setItems] = useState<ICarousel[]>([
    { img: furniture1 },
    { img: furniture2 },
    { img: furniture3 },
  ]);

  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index.toString()}
              className={classNames({ active: index === 0 })}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {items.map((item, index) => (
            <div
              key={item.img}
              className={classNames("carousel-item", { active: index === 0 })}
            >
              <img
                src={item.img}
                className="img-fluid d-block w-100"
                alt="furniture"
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
