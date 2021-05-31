/*import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return <div>Search Bar Component</div>
};*/
import React, { Fragment } from "react";

const SearchaBar = ({onSearch}) => (
  <Fragment>
    <input type="text" placeholder ="Ciudad..."/>
    <button onClick={() => onSearch('Buscando...')}>Agregar</button>
  </Fragment>

);
 
export default SearchaBar;