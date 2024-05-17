
import sofa from '../../../assets/seater-sofa.png';
import starEmpty from '../../../assets/star_empty.svg';
import starFull from '../../../assets/star_full.svg';

const reviewsData = [
  {
    id: 1,
    product: {
      name: 'Диван Sofa',
      image: sofa,
      color: 'Чорний',
      price: 25000,
      article: 12345,
    },
    rating: 4,
    date: '20/05/24',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus velit quasi eveniet harum possimus? Sapiente aspernatur velit quibusdam veritatis, nulla ut atque officia, quae eligendi exercitationem quia porro quidem adipisci.',
  },
  {
    id: 2,
    product: {
      name: 'Диван Sofa',
      image: sofa,
      color: 'Чорний',
      price: 25000,
      article: 12345,
    },
    rating: 4,
    date: '20/05/24',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus velit quasi eveniet harum possimus? Sapiente aspernatur velit quibusdam veritatis, nulla ut atque officia, quae eligendi exercitationem quia porro quidem adipisci.',
  },
  {
    id: 3,
    product: {
      name: 'Диван Sofa',
      image: sofa,
      color: 'Чорний',
      price: 25000,
      article: 12345,
    },
    rating: 4,
    date: '20/05/24',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus velit quasi eveniet harum possimus? Sapiente aspernatur velit quibusdam veritatis, nulla ut atque officia, quae eligendi exercitationem quia porro quidem adipisci.',
  },
];

const StarRating = ({ rating }) => {
  const stars = Array(5).fill(0).map((_, index) => (
    <img
      key={index}
      src={index < rating ? starFull : starEmpty}
      alt={index < rating ? 'starFull' : 'starEmpty'}
    />
  ));
  return <span className="stars">{stars}</span>;
};

const Review = ({ review }) => (
  <div className="reviews_details">
    <div className="reviews_info">
      <div className="img_name">
        <div className="icon_product">
          <img src={review.product.image} alt={review.product.name} />
        </div>
        <div className="name_product">
          <h3>{review.product.name}</h3>
          <span className="color_product">
            Колір: <span>{review.product.color}</span>
          </span>
          <span className="order_product_price">{review.product.price} грн</span>
        </div>
      </div>
      <div className="reviews_price">
        <span className="reviews_article">Код товару: {review.product.article}</span>
      </div>
    </div>
    <div className="feedback">
      <StarRating rating={review.rating} />
      <span className="feedback_date">{review.date}</span>
    </div>
    <div className="feedback_text">
      <p className="text">{review.text}</p>
    </div>
  </div>
);

export const Reviews = () => (
  <div className="reviews">
    <div className="title_reviews">
      <h1>Мої відгуки</h1>
    </div>
    {reviewsData.map((review) => (
      <Review key={review.id} review={review} />
    ))}
  </div>
);
