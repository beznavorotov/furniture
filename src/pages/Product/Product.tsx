import { RecommendedProducts } from '../../components/RecommendedProducts/RecommendedProducts';
import emptyStar from '../../assets/star_empty.svg';
import { useState } from 'react';

export const Product = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [activeMaterial, setActiveMaterial] = useState(0);

  const handleTabClick = (tabName: string) => setActiveTab(tabName);
  const changeActiveTab = (tabName: string) => {
    return activeTab === tabName ? 'active' : null;
  };

  const handleMaterialClick = (index) => setActiveMaterial(index);

  const getDate = () => {
    const date = new Date();

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const tableTmpData = [
    ['Наповнення', 'ППУ'],
    ['Щільність набивки', '345'],
    ['Висота', '60'],
    ['Ширина', '270'],
    ['Глибина', '100'],
    ['Висота посадки', '50'],
    ['Глибина сидіння', '90'],
    ['Захист від кігтів', 'Так'],
    ['Колекція', 'Базова'],
    ['Виробник', 'Super'],
  ];

  return (
    <section className="page-section container">
      <div className="page-section__breadcrumbs">
        <span>Головна</span>
        <span>/</span>
        <span>Вітальні</span>
        <span>/</span>
        <span>Дивани</span>
        <span>/</span>
        <span>Диван</span>
      </div>

      {/* блок на майбутнє для інших сторінок */}
      {/* <div className="page-section__heading">
				<h1 className="page-section--title">Умовний Кошик</h1>
			</div> */}

      <div className="product product--container">
        <div className="product__gallery">
          <img
            className="product__gallery--item1"
            src="https://picsum.photos/715/447"
            alt=""
          />
          <img
            className="product__gallery--item2"
            src="https://picsum.photos/400/271"
            alt=""
          />
          <img
            className="product__gallery--item3"
            src="https://picsum.photos/295/271"
            alt=""
          />
        </div>

        <div className="product__order">
          <div className="product__heading">
            <h2 className="product__heading--title">Диван Basic</h2>
            <span className="product__heading--code">Код товару: 9567</span>
          </div>

          <div className="product__rating">
            <span className="product__rating--stars">
              <img src={emptyStar} alt="empty star" />
              <img src={emptyStar} alt="empty star" />
              <img src={emptyStar} alt="empty star" />
              <img src={emptyStar} alt="empty star" />
              <img src={emptyStar} alt="empty star" />
            </span>
            <span className="product__rating--count">0 відгуків</span>
            <span className="product__rating--devider">|</span>
            <span className="product__rating--add">Написати відгук</span>
          </div>

          <div className="product__addition-info">
            <p>Колекція: Базова</p>
            <p>Наявність: В наявності</p>
          </div>

          <div className="product__price">
            <h3 className="product__price--price">25 000 грн.</h3>
            <div className="product__price--buttons">
              <button className="button button__white">У кошик</button>
              <button className="button">Оплата частинами</button>
              <span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0821 7.89609C13.8664 6.67464 12.2154 5.98597 10.4921 5.98147C8.76875 5.97697 7.11418 6.65701 5.89211 7.87209C4.67703 9.09416 3.99699 10.7487 4.00149 12.4721C4.00599 14.1954 4.69466 15.8464 5.91611 17.0621L15.3301 26.4781C15.5176 26.6656 15.7719 26.7709 16.0371 26.7709C16.3023 26.7709 16.5566 26.6656 16.7441 26.4781L26.1101 17.1181C27.3246 15.8961 28.0042 14.242 27.9997 12.5191C27.9952 10.7963 27.3069 9.14571 26.0861 7.93009C25.4839 7.32349 24.768 6.84161 23.9794 6.51205C23.1907 6.18248 22.3448 6.01169 21.4901 6.00946C20.6353 6.00723 19.7886 6.17361 18.9982 6.49905C18.2079 6.8245 17.4894 7.30264 16.8841 7.90609L15.9901 8.80209L15.0821 7.89609ZM24.6921 15.7061L16.0401 24.3561L7.33011 15.6481C6.48421 14.8075 6.00655 13.6656 6.00205 12.4731C5.99755 11.2805 6.46658 10.135 7.30611 9.28809C8.15259 8.44742 9.29825 7.97729 10.4912 7.98104C11.6842 7.98479 12.8269 8.46212 13.6681 9.30809L15.2881 10.9281C15.3823 11.0223 15.4944 11.0967 15.6177 11.147C15.7411 11.1973 15.8733 11.2225 16.0065 11.221C16.1397 11.2195 16.2713 11.1914 16.3935 11.1384C16.5157 11.0853 16.626 11.0084 16.7181 10.9121L18.2981 9.32009C18.7177 8.90259 19.2155 8.57197 19.7631 8.34717C20.3106 8.12237 20.8972 8.0078 21.4891 8.01003C22.081 8.01226 22.6666 8.13124 23.2125 8.36016C23.7584 8.58908 24.2537 8.92344 24.6701 9.34409C25.5163 10.185 25.994 11.3275 25.9982 12.5205C26.0023 13.7135 25.5325 14.8593 24.6921 15.7061Z"
                    fill="#003CA6"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="product__materials">
            <p>Матеріал:</p>
            <div className="product__materials-samples">
              {[
                'wood',
                'gold',
                'silver',
                'titanium',
                'stone',
                'cloth',
                'leather',
              ].map((item, index) => (
                <span
                  key={index}
                  className={`material-sample ${
                    activeMaterial === index ? 'active' : null
                  }`}
                  onClick={() => {
                    handleMaterialClick(index);
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="product__info">
          <div className="product__info--tabs">
            <div className="tablist">
              <button
                onClick={() => handleTabClick('description')}
                className={`tab tab__description ${changeActiveTab(
                  'description',
                )}`}
              >
                Опис товару
              </button>
              <button
                onClick={() => handleTabClick('specs')}
                className={`tab tab__specs ${changeActiveTab('specs')}`}
              >
                Характеристики
              </button>
              <button
                onClick={() => handleTabClick('reviews')}
                className={`tab tab__reviews ${changeActiveTab('reviews')}`}
              >
                Відгуки
              </button>
            </div>

            <div
              className={`tab--content tab__description--content ${changeActiveTab(
                'description',
              )}`}
            >
              <div className="tab__description--text">
                <p>
                  Диван-ліжко 3-х і 2-х місний розмір з водо- та
                  брудовідштовхувальної тканини. Диван EDGAR доступний у
                  багатьох кольорах і різних розмірах, щоб задовольнити всі
                  потреби простору та дизайну. Диван-ліжко 100% Made in Italy.
                </p>
                <p>
                  З його сучасними лініями, які ніколи не залишаються поза
                  часом, він оснащений брудовідштовхувальним водонепроникним
                  чохлом, який також можна прати при 30°.
                </p>
                <p>
                  Оснащений відділенням для подушок у спинці, ніжки дивана
                  заввишки 13 см і оптимальні пропорції підлокітників пропонують
                  поєднання легкості та елегантності. Ідеально підходить не
                  тільки для сучасних і сучасних інтер’єрів, але також для
                  житлових приміщень, де переважає природне натхнення
                </p>
              </div>
            </div>
            <div
              className={`tab--content tab__specs--content ${changeActiveTab(
                'specs',
              )}`}
            >
              <div className="tab__specs--table">
                <table>
                  <tbody>
                    {tableTmpData.map((element, index) => (
                      <tr key={index}>
                        <th>{element[0]}</th>
                        <td>{element[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className={`tab--content tab__reviews--content ${changeActiveTab(
                'reviews',
              )}`}
            >
              <ul className="reviews-list">
                <li className="review">
                  <div className="review__heading">
                    <h3>Софія</h3>
                    <span>{getDate()}</span>
                  </div>

                  <div className="product__rating">
                    <span className="product__rating--stars">
                      <img src={emptyStar} alt="empty star" />
                      <img src={emptyStar} alt="empty star" />
                      <img src={emptyStar} alt="empty star" />
                      <img src={emptyStar} alt="empty star" />
                      <img src={emptyStar} alt="empty star" />
                    </span>
                  </div>
                  <p className="review__text">
                    Lorem ipsum dolor sit amet consectetur. Scelerisque lorem
                    sit id bibendum elit duis viverra purus. Commodo sed
                    adipiscing velit non curabitur vestibulum.
                  </p>
                  <div className="review__proscons">
                    <p className="review__pros">
                      Переваги: <span>відсутні ;(</span>
                    </p>
                    <p className="review__cons">
                      Недоліки: <span>також відсутні :)</span>
                    </p>
                  </div>
                </li>
                <button type="button" className="button">
                  Написати відгук
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <RecommendedProducts />
    </section>
  );
};
