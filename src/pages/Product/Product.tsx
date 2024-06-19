import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { PageSectionWrapper } from '@/components/PageSectionWrapper/PageSectionWrapper';
import { StarsRating } from '@/components/StarsRating/StarsRating';
import ProductCard from '@/components/ProductCard/ProductCard';
import { IsLoading } from '@/components/IsLoading/IsLoading';

interface ProductItemType {
  room: string;
  item_category: string;
  colour: string;
  height: number;
  width: number;
  length: number;
  form: string;
  collection: string;
  manufacturer: string;
  photo: [];
  title: string;
  article_code: number;
  avaliability: boolean;
  price: number;
  discount: number;
  description: string;
  rating: number;
  reviews: Review[];
  hard_body: BodyType[];
  soft_body: BodyType[];
}

interface Review {
  first_name: string;
  last_name: string;
  rating: number;
  id: number;
}

interface BodyType {
  material_type: string;
  manufacturer: string;
  title: string;
  colour: string;
  photo: string;
  filler: string;
  body_material: BodyMaterial[];
  tabletop_material: BodyMaterial[];
}

interface BodyMaterial {
  material_type: string;
  manufacturer: string;
  title: string;
  colour: string;
  photo: string;
}

export const Product = () => {
  const CATEGORY = 'category';
  const BESTSELLERS = 'bestsellers';
  const SALE = 'sale';
  const DESCRIPTION = 'description';
  const SPECS = 'specs';
  const REVIEWS = 'reviews';

  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const stateType = searchParams.get('from');

  const category = useSelector((state: RootState) => state.catalog.category);
  const bestsellers = useSelector(
    (state: RootState) => state.catalog.bestsellers,
  );
  const sale = useSelector((state: RootState) => state.catalog.sale);
  const search = useSelector((state: RootState) => state.search.searchResults);

  const [product, setProduct] = useState({} as ProductItemType);
  const {
    room,
    item_category,
    colour,
    height,
    width,
    length,
    form,
    collection,
    manufacturer,
    photo,
    title,
    article_code,
    avaliability,
    price,
    // discount,
    description,
    rating,
    reviews,
    // hard_body,
    // soft_body,
  } = product;
  const [recommended, setRecommended] = useState([]);
  const [galleryImgIndex, setGalleryImgIndex] = useState(0);

  const selectProductState = (type) => {
    if (type === CATEGORY) {
      setRecommended(category);
      return category.find((item) => item.article_code === +id);
    } else if (type === BESTSELLERS) {
      setRecommended(bestsellers);
      return bestsellers.find((item) => item.article_code === +id);
    } else if (type === SALE) {
      setRecommended(sale);
      return sale.find((item) => item.article_code === +id);
    } else {
      setRecommended(search);
      return search.find((item) => item.article_code === +id);
    }
  };

  useEffect(() => {
    const result = selectProductState(stateType);
    setProduct(result);
    // eslint-disable-next-line
  }, [id, stateType]);

  const [activeTab, setActiveTab] = useState(DESCRIPTION);
  // const [activeMaterial, setActiveMaterial] = useState(0);

  const handleTabClick = (tabName: string) => setActiveTab(tabName);
  const changeActiveTab = (tabName: string) => {
    return activeTab === tabName ? 'active' : null;
  };
  // const handleMaterialClick = (index: number) => setActiveMaterial(index);
  const handleGalleryImgClick = (index: number) => setGalleryImgIndex(index);

  const getDate = () => {
    const date = new Date();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const specTableData = [
    { Кімната: room },
    { 'Категорія товару': item_category },
    { Матеріал: colour },
    { Висота: height },
    { Ширина: width },
    { Глибина: length },
    { Форма: form },
    // 'Глибина сидіння': '90',
    // 'Захист від кігтів': 'Так',
    { Колекція: collection },
    { Виробник: manufacturer },
  ];
  const shuffleArray = [...recommended]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  if (!product || !photo || photo.length === 0) {
    return <IsLoading text="Заждіть секунду..." />;
  }

  return (
    <PageSectionWrapper
      title=""
      sort=""
      breadcrumbs={[room, item_category, title]}
    >
      <div className="product product--container">
        <div className="product__gallery">
          <div className="product__gallery--main">
            <img src={photo[galleryImgIndex]} alt="main img" />
          </div>
          <div className="product__gallery--collection">
            {photo.map((img, index) => (
              <div
                key={crypto.randomUUID()}
                onClick={() => handleGalleryImgClick(index)}
                className="product__gallery--item"
              >
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="product__order">
          <div className="product__heading">
            <h2 className="product__heading--title">{title}</h2>
            <span className="product__heading--code">
              Код товару: {article_code}
            </span>
          </div>

          <div className="product__rating">
            <div className="product__rating--stars">
              <StarsRating ratingNumber={rating} />
            </div>
            <div className="product__rating--reviews">
              <span className="product__rating--count">
                Відгуків: {reviews.length}
              </span>
              <span className="product__rating--devider">|</span>
              <span className="product__rating--add">Написати відгук</span>
            </div>
          </div>

          <div className="product__addition-info">
            <p>Колекція: {collection}</p>
            <p>Наявність: {avaliability ? 'В наявності' : 'Відсутні'}</p>
          </div>

          <div className="product__price">
            <div className="product__price--heading">
              <h3 className="product__price--price">{price.toFixed()} грн.</h3>
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
            <div className="product__price--buttons">
              <button className="button button__white">У кошик</button>
              <button className="button">Оплата частинами</button>
            </div>
          </div>

          <div className="product__materials">
            <p>Матеріал:</p>
            <div className="product__materials-samples">
              {/* f**k ts */}
              {/* {product?.hard_body?.map((item, index) => (
                <span
                  key={crypto.randomUUID()}
                  className={`material-sample ${
                    activeMaterial === index ? 'active' : ''
                  }`}
                  // onClick={() => handleMaterialClick(index)}
                >
                  {item.body_material.map((materialItem) => (
                    <img
                      key={crypto.randomUUID()}
                      src={materialItem.photo}
                      alt={materialItem.title}
                    />
                  ))}
                </span>
              ))} */}
            </div>
          </div>
        </div>

        <div className="product__info">
          <div className="product__info--tabs">
            <div className="tablist">
              <button
                onClick={() => handleTabClick(DESCRIPTION)}
                className={`tab tab__description ${changeActiveTab(
                  DESCRIPTION,
                )}`}
              >
                Опис товару
              </button>
              <button
                onClick={() => handleTabClick(SPECS)}
                className={`tab tab__specs ${changeActiveTab(SPECS)}`}
              >
                Характеристики
              </button>
              <button
                onClick={() => handleTabClick(REVIEWS)}
                className={`tab tab__reviews ${changeActiveTab(REVIEWS)}`}
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
                <p>{description}</p>
              </div>
            </div>
            <div
              className={`tab--content tab__specs--content ${changeActiveTab(
                SPECS,
              )}`}
            >
              <div className="tab__specs--table">
                <table>
                  <tbody>
                    {specTableData.map((element) => (
                      <tr key={crypto.randomUUID()}>
                        <th>{Object.keys(element)}</th>
                        <td>{Object.values(element)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className={`tab--content tab__reviews--content ${changeActiveTab(
                REVIEWS,
              )}`}
            >
              <ul className="reviews-list">
                {reviews?.map(({ first_name, last_name, rating }) => (
                  <li className="review" key={crypto.randomUUID()}>
                    <div className="review__heading">
                      <h3>
                        {first_name} {last_name}
                      </h3>
                      <span>{getDate()}</span>
                    </div>

                    <div className="product__rating">
                      <span className="product__rating--stars">
                        <StarsRating ratingNumber={rating} />
                      </span>
                    </div>
                  </li>
                ))}
                {/* <p className="review__text"></p>
                <div className="review__proscons">
                  <p className="review__pros"></p>
                  <p className="review__cons"></p>
                </div> */}
                <button type="button" className="button">
                  Написати відгук
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="recommended-products">
        <div className="recommended-products__heading">
          <h1 className="recommended-products__title">Рекомендовані товари</h1>
        </div>
        <div className="recommended-products__list">
          {shuffleArray.map(
            ({ article_code, title, price, discount, photo, rating }) => (
              <ProductCard
                key={article_code}
                name={title}
                price={price}
                discountPrice={discount}
                cardSize={null}
                img={photo.find((img) => img.includes('MAIN_photo_image_'))}
                stateType={stateType}
                id={article_code}
                rating={rating}
              />
            ),
          )}
        </div>
      </section>
    </PageSectionWrapper>
  );
};
