import React from "react";
// import axios from "../../axios";
import { useEffect, useState } from "react";
import "./style.css";

export default function StationList() {
  const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   // axios.get("/stations");

  //   fetch(
  //     "https://5ca3-2a02-fe9-c1f-135a-38de-e045-11c1-b6b1.eu.ngrok.io/api/stations",
  //     { mode: "no-cors" }
  //   )
  //     .then((res) => {
  //       console.dir(res);
  //       res.json();
  //     })
  //     .then((result) => {
  //       setIsLoaded(true);
  //       setItems(result);
  //     });
  // }, []);

  const items = [
    {
      name: "Amsterdam Centraal",
      stationCode: "Asd",
      landCode: "NL",
      facilities: "true",
    },
    {
      name: "Utrecht Centraal",
      stationCode: "Ut",
      landCode: "NL",
      facilities: "true",
    },
    {
      name: "Rotterdam Centraal",
      stationCode: "Rtd",
      landCode: "NL",
      facilities: "true",
    },
    {
      name: "Alkmaar",
      stationCode: "Amr",
      landCode: "NL",
      facilities: "true",
    },
    {
      name: "Amsterdam Centraal",
      stationCode: "Abc",
      landCode: "NL",
      facilities: "true",
    },
    {
      name: "Amsterdam Centraal",
      stationCode: "Bcd",
      landCode: "NL",
      facilities: "true",
    },
    {
      name: "Amsterdam Centraal",
      stationCode: "Cde",
      landCode: "NL",
      facilities: "true",
    },
    {
      name: "Amsterdam Centraal",
      stationCode: "Def",
      landCode: "NL",
      facilities: "true",
    },
    {
      name: "Amsterdam Centraal",
      stationCode: "Efg",
      landCode: "NL",
      facilities: "true",
    },
    {
      name: "Amsterdam Centraal",
      stationCode: "Fgh",
      landCode: "NL",
      facilities: "true",
    },
  ];

  function getStation(stationName) {
    const result = items.filter((item) => item.name === stationName);
    return result;
  }

  return (
    <>
      <div className="container">
        <header>Stations</header>
        <div className="container_ltr">
          <ul>
            {items.map((item) => (
              <li className="station_li" key={item.stationCode}>
                <div className="fract">{item.name}</div>
                <div className="fract"> {item.stationCode}</div>
                <div className="fract">{item.landCode}</div>
                <div className="fract">{item.facilities}</div>
              </li>
            ))}
          </ul>
          <ul>
            {items.map((item) => (
              <li className="station_li" key={item.stationCode}>
                <div className="fract">{item.name}</div>
                <div className="fract"> {item.stationCode}</div>
                <div className="fract">{item.landCode}</div>
                <div className="fract">{item.facilities}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul>
        {getStation("Amsterdam Centraal").map((item) => (
          <li>{item.stationCode}</li>
        ))}
      </ul>
    </>
  );
}
