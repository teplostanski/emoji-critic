import React from 'react';
import './GoBack.css';
import { useHistory } from 'react-router-dom'; 

function GoBack () {
	const history = useHistory(); 

  return (
    <button className="button button_type_back" onClick={() => history.goBack()}></button> 
  )
}

export default GoBack