import React from "react";
import { Fragment } from "react";
import "./App.css";
import MyCard from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
//import SearchBar from "./components/SearchBar.jsx";
import data, { Cairns } from "./data.js";
import AsideSection from './components/AsideSection';

const App = () => (
  <Fragment>
    <AsideSection />    

    <MyCard
      max={Cairns.main.temp_max}
      min={Cairns.main.temp_min}
      name={Cairns.name}
      img={Cairns.weather[0].icon}
      onClose={() => alert(Cairns.name)}
    />

    <Cards cities={data} />
  </Fragment>
);

export default App;
