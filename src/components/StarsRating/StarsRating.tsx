import emptyStar from '../../assets/star_empty.svg';
import fullStar from '../../assets/star_full.svg';

export const StarsRating = ({ ratingNumber }) => {
  const emptyRating = [emptyStar, emptyStar, emptyStar, emptyStar, emptyStar];

  return (
    <div className="stars">
      {emptyRating.fill(fullStar, 0, Math.floor(ratingNumber)).map((item) => (
        <img key={crypto.randomUUID()} src={item} alt="stars rating" />
      ))}
    </div>
  );
};
