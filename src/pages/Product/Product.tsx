import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PageSectionWrapper } from '@/components/PageSectionWrapper/PageSectionWrapper';
import { StarsRating } from '@/components/StarsRating/StarsRating';
import ProductCard from '@/components/ProductCard/ProductCard';
import { IsLoading } from '@/components/IsLoading/IsLoading';
import { AddToFavorites } from '@/components/AddToFavorites/AddToFavorites';
import { addCartItems } from '@/store/slices/cartSlice';
import { BACKEND_SINGLE_PRODUCT_URL, MESSAGES } from '@/constants';
import { ProductItemType } from '@/utils/types';

const DESCRIPTION = 'description';
const SPECS = 'specs';
const REVIEWS = 'reviews';

export const Product = () => {
  const { id } = useParams();
  const newId = Number(id);
  const dispatch = useDispatch();

  const [product, setProduct] = useState<ProductItemType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [recommended, setRecommended] = useState([]);
  const [galleryImgIndex, setGalleryImgIndex] = useState(0);

  const handleFetch = async (productId: number) => {
    try {
      const response = await fetch(`${BACKEND_SINGLE_PRODUCT_URL}${productId}`);
      const data = await response.json();
      return data[0];
    } catch (error) {
      console.error('Помилка отримання данних по продукту: ', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const result = await handleFetch(newId);
      setProduct(result);

      // fetch recommended products
      const recommendedId = [newId + 1, newId + 2, newId + 3, newId + 4];
      const fetchPromises = recommendedId.map(handleFetch);
      const resultFromPromises = await Promise.all(fetchPromises);
      const validResults = resultFromPromises.filter((item) => item !== null);
      setRecommended(validResults);
      setIsLoading(false);
    };

    fetchProduct();
    // eslint-disable-next-line
  }, [id]);

  const [activeTab, setActiveTab] = useState(DESCRIPTION);
  const [activeMaterial, setActiveMaterial] = useState(0);
  const handleMaterialClick = (index: number) => setActiveMaterial(index);

  const handleTabClick = (tabName: string) => setActiveTab(tabName);
  const changeActiveTab = (tabName: string) => {
    return activeTab === tabName ? 'active' : null;
  };

  const getDate = () => {
    const date = new Date();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const galleryImgClickHandler = (index: number) => setGalleryImgIndex(index);
  const galleryArrowsClickHandler = (arg) => {
    setGalleryImgIndex((prevState) => {
      const photoArrLength = photo.length;
      let newIndex = prevState + Number(arg.dataset.action);

      if (newIndex < 0) {
        newIndex = photoArrLength - 1;
      } else if (newIndex >= photoArrLength) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  if (isLoading) {
    return <IsLoading text={MESSAGES.DATA_IS_LOADING} />;
  }

  if (!product || !product.photo || product.photo.length === 0) {
    return <IsLoading text={MESSAGES.DATA_IS_LOADING} />;
  }

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
    description,
    rating,
    reviews,
    hard_body,
    // soft_body,
  } = product;

  const specTableData = {
    Кімната: room,
    'Категорія товару': item_category,
    Матеріал: colour,
    Висота: height,
    Ширина: width,
    Глибина: length,
    Форма: form,
    Колекція: collection,
    Виробник: manufacturer,
  };

  const credentials = {
    related_item: newId,
    quantity: 1,
  };

  const addToCart = () => {
    dispatch(addCartItems(credentials));
  };

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
            <span
              className="product__gallery--arrow product__gallery--arrow-left"
              data-action="-1"
              onClick={(e) => galleryArrowsClickHandler(e.target)}
            >
              &lsaquo;
            </span>
            <span
              className="product__gallery--arrow product__gallery--arrow-right"
              data-action="1"
              onClick={(e) => galleryArrowsClickHandler(e.target)}
            >
              &rsaquo;
            </span>
          </div>
          <div className="product__gallery--collection">
            {photo?.map((img, index) => (
              <div
                key={crypto.randomUUID()}
                onClick={() => galleryImgClickHandler(index)}
                className={`product__gallery--item ${
                  galleryImgIndex === index ? 'active' : ''
                }`}
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

              <AddToFavorites props={product} id={newId} />
            </div>
            <div className="product__price--buttons">
              <button className="button button__white" onClick={addToCart}>
                У кошик
              </button>
              <button className="button">Оплата частинами</button>
            </div>
          </div>

          {hard_body.length !== 0 ? (
            <div className="product__materials">
              <p>Матеріал:</p>
              <div className="product__materials-samples">
                {hard_body?.map((item, index) => (
                  <span
                    key={crypto.randomUUID()}
                    className={`material-sample ${
                      activeMaterial === index ? 'active' : ''
                    }`}
                    onClick={() => handleMaterialClick(index)}
                  >
                    <img
                      key={crypto.randomUUID()}
                      src={item.body_material.photo}
                      alt={item.body_material.title}
                    />
                  </span>
                ))}
              </div>
            </div>
          ) : null}
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
                    {Object.entries(specTableData).map(([key, value]) => (
                      <tr key={crypto.randomUUID()}>
                        <th>{key}</th>
                        <td>{value}</td>
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
                <button type="button" className="button">
                  Написати відгук
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {recommended.length === 0 ? null : (
        <section className="recommended-products">
          <div className="recommended-products__heading">
            <h1 className="recommended-products__title">
              Рекомендовані товари
            </h1>
          </div>
          <div className="recommended-products__list">
            {recommended.map((item) => (
              <ProductCard
                key={item.article_code}
                props={item}
                cardSize={null}
              />
            ))}
          </div>
        </section>
      )}
    </PageSectionWrapper>
  );
};
