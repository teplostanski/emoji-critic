import React from 'react';
import './Review.css';

function Review (props) {
  return (
    <div className="review">
      <div className="review__item">
        <h3>Обзор:</h3>
        <p>Текст:</p>
        <p className="review__rating">Рейтинг:</p>
      </div>
    </div>
  );
}

export default Review;