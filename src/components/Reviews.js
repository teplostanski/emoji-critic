import React from 'react';
import { Link } from 'react-router-dom';
import './Reviews.css';
import GoBack from './GoBack';

function Reviews (props) {
  return (
    // необходимо изменить код внутри метода map
    <>
      <ul className="reviews">
        {props.reviews && props.reviews.map((review)=>{
          return <li key={review.id} className="reviews__item"><Link to={`/reviews/${review.id}`}>{review.title}</Link></li>
        })}
				<GoBack />
      </ul>
			
    </>
  )
}

export default Reviews;