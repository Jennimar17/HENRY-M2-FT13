import React, { useState } from "react";
import { Route, Switch, NavLink, HashRouter as Router } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards";

const apiKey = "0f204c3f796d726ae21fe12f03afa236";

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id != id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          var aux = cities.filter((ci) => ci.id !== ciudad.id);
          if (cities.length !== aux.length) {
            alert("Ciudad ya agregada");
          } else {
            setCities((oldCities) => [...oldCities, ciudad]);
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch} cities={cities} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}
export default App;
