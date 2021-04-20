import React, { useMemo } from 'react';
import StarIcon from './StarIcon';

function Stars({ index, rating, setRating, hoverRating, setHoverRating }) {
  const isFill = useMemo(() => {
    if (hoverRating >= index) {
      return true;
    } else if (!hoverRating && rating >= index) {
      return true;
    }
    return false;
  }, [rating, hoverRating, index]);

  return (
    <span
      className="card__rating"
      onMouseEnter={() => setHoverRating(index)}
      onMouseLeave={() => setHoverRating(0)}
      onClick={() => setRating(index)}
    >
      <StarIcon isActive={isFill} />
    </span>
  );
}

export default Stars;
