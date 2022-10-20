import React from "react";
// import axios from "../../axios";
import { useEffect, useState } from "react";
import "./style.css";

export default function StationList() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // axios.get("/stations");

    fetch(
      "https://5ca3-2a02-fe9-c1f-135a-38de-e045-11c1-b6b1.eu.ngrok.io/api/stations",
      { headers: { "Access-Control-Allow-Origin": "*" } }
    )
      .then((res) => {
        console.dir(res);
        res.json();
      })
      .then((result) => {
        setIsLoaded(true);
        setItems(result);
      });
  }, []);

  //   const items = [
  //     {
  //       name: "Amsterdam Centraal",
  //       stationCode: "Asd",
  //       landCode: "NL",
  //       facilities: "true",
  //     },
  //     {
  //       name: "Utrecht Centraal",
  //       stationCode: "Ut",
  //       landCode: "NL",
  //       facilities: "true",
  //     },
  //     {
  //       name: "Rotterdam Centraal",
  //       stationCode: "Rtd",
  //       landCode: "NL",
  //       facilities: "true",
  //     },
  //     {
  //       name: "Alkmaar",
  //       stationCode: "Amr",
  //       landCode: "NL",
  //       facilities: "true",
  //     },
  //     {
  //       name: "Amsterdam Centraal",
  //       stationCode: "Itr",
  //       landCode: "NL",
  //       facilities: "true",
  //     },
  //     {
  //       name: "Amsterdam Centraal",
  //       stationCode: "bra",
  //       landCode: "NL",
  //       facilities: "true",
  //     },
  //   ];

  return (
    <>
      {/* <header>Stations</header> */}
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
    </>
  );
}
