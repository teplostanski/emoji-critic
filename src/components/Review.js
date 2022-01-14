import React from 'react';
import './Review.css';
import { useParams } from 'react-router-dom';
import GoBack from './GoBack';

function Review (props) {
  let { reviews } = props;
  let { id } = useParams();
  // the object keys start with 0, but the IDs in the API begin at 1
  id = id - 1;
  
  return (
    <div className="review">
      {
        reviews &&
          <div className="review__item">
            <h3>{reviews[id].title}</h3>
            <p>{reviews[id].text}</p>
            <p>Рейтинг: {reviews[id].rating}/5</p>
          </div>
      }
		<GoBack />
    </div>
  );
}

export default Review;
