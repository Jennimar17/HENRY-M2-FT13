import React from "react";
import { Fragment } from "react";

const Card = ({name, max, min, img, onClose}) => 
  ( 
    <Fragment>
      <button onClick = {onClose}>X</button>
      <h4>Name: {name} </h4>
      <p>Min: {min} </p>
      <p>Max: {max}</p>
      <img src = {`http://openweathermap.org/img/wn/${img}@2x.png`} alt = 'img not found' />



    </Fragment>
   );

 
export default Card;
