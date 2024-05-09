import './bestsellers.scss';
import chair from '../../assets/chair.png';
import heart from '../../assets/heart.svg';
import starEmpty from '../../assets/star_empty.svg';
import starFull from '../../assets/star_full.svg';
import cart from '../../assets/icons/cart.svg';
import { Link } from 'react-router-dom';

export const Bestsellers = () => {
  return (
    <>
      <div className="bestsellers row">
        <div className="name">
          <h1>Бестселери</h1>
          <Link to="/">Усі пропозиції</Link>
        </div>

        <div className="col-12 col-md-3 bloc_card">
          <div className="card">
            <img src={chair} alt="" className="chair" />
            <img src={heart} alt="" className="heart" />
          </div>
          <p>Крісло Дюна</p>
          <span>
            <img src={starFull} alt="" />
            <img src={starFull} alt="" />
            <img src={starFull} alt="" />
            <img src={starFull} alt="" />
            <img src={starEmpty} alt="" />
          </span>
          <div>
            <span>3000 грн</span>
            <Link to="/">
              <img src={cart} alt="cart icon" />
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-3 bloc_card">
          <div className="card">
            <img src={chair} alt="chair" className="chair" />
            <img src={heart} alt="heart" className="heart" />
          </div>
          <p>Крісло Дюна</p>
          <span>
            <img src={starFull} alt="starFull" />
            <img src={starFull} alt="starFull" />
            <img src={starFull} alt="starFull" />
            <img src={starFull} alt="starFull" />
            <img src={starEmpty} alt="starEmpty" />
          </span>
          <div>
            <span>3000 грн</span>
            <Link to="/">
              <img src={cart} alt="cart icon" />
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-3 bloc_card">
          <div className="card">
            <img src={chair} alt="" className="chair" />
            <img src={heart} alt="" className="heart" />
          </div>
          <p>Крісло Дюна</p>
          <span>
            <img src={starFull} alt="" />
            <img src={starFull} alt="" />
            <img src={starFull} alt="" />
            <img src={starFull} alt="" />
            <img src={starEmpty} alt="" />
          </span>
          <div>
            <span>3000 грн</span>
            <Link to="/">
              <img src={cart} alt="cart icon" />
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-3 bloc_card">
          <div className="card">
            <img src={chair} alt="" className="chair" />
            <img src={heart} alt="" className="heart" />
          </div>
          <p>Крісло Дюна</p>
          <span>
            <img src={starFull} alt="" />
            <img src={starFull} alt="" />
            <img src={starFull} alt="" />
            <img src={starFull} alt="" />
            <img src={starEmpty} alt="" />
          </span>
          <div>
            <span>3000 грн</span>
            <Link to="/">
              <img src={cart} alt="cart icon" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
