import React from 'react';
import './Content.css';


function Content (props) {
  return (
    <section className={`content content_type_${props.mix}`}>
        {props.children}
    </section>
  )
}

export default Content; 