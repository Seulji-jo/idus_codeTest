import { Link } from 'react-router-dom';
import StarIcon from './StarIcon';

function Card({ image, label, title, hilight, crossOut, rating, comment }) {
  const renderDetail = () => {
    if (rating || comment) {
      return (
        <div className="card__detail">
          {rating ? (
            <div className="card__rating">
              {[1, 2, 3, 4, 5].map((el, idx) => (
                <StarIcon
                  key={idx}
                  isActive={Boolean(rating && rating >= el)}
                />
              ))}
            </div>
          ) : null}
          {comment ? <p className="card__comment">{comment}</p> : null}
        </div>
      );
    }
  };
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__img">
          <Link to="/">
            <img src={image} alt={title} />
          </Link>
        </div>
        <div className="card__info">
          <div className="card__label">
            <Link to="/">{label}</Link>
          </div>
          <div className="card__title">
            <Link to="/">{title}</Link>
          </div>
          <span className="card__discount">{hilight}</span>
          <span className="card__principal">{crossOut}</span>
        </div>
        {renderDetail()}
      </div>
    </div>
  );
}

export default Card;
