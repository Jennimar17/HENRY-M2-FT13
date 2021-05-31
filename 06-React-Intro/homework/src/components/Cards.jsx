/*import React from 'react';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return <div>Cards Component</div>
};*/

import React, { Fragment } from "react";
import Card from "./Card.jsx";

const Cards = ({cities}) => 
(
  <Fragment>
    
    {cities.map((city) => (
      <Card
        max={city.main.temp_max}
        min={city.main.temp_min}
        name={city.name}
        img={city.weather[0].icon}
        onClose={() => alert(city.name)}
      />
    ))}
  </Fragment>
);

export default Cards;
