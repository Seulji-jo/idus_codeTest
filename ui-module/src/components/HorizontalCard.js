import { useState } from 'react';
import { Link } from 'react-router-dom';
import Stars from './Stars';

function HorizontalCard({ image, title, comment, name }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  return (
    <div className="card horizontal">
      <div className="card__container">
        <div className="card__img">
          <Link to="/">
            <img src={image} alt={title} />
          </Link>
        </div>
        <div className="card__info">
          <div className="card__title">
            <Link to="/">{title}</Link>
          </div>
          <p className="card__comment">{comment}</p>
          <div className="card__rating-wrap">
            <span>
              {[1, 2, 3, 4, 5].map((idx) => {
                return (
                  <Stars
                    key={idx}
                    index={idx}
                    rating={rating}
                    setRating={setRating}
                    hoverRating={hoverRating}
                    setHoverRating={setHoverRating}
                  />
                );
              })}
            </span>
            <span className="name">&nbsp;| {name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
