import React from "react";
import axios from "../../axios/axios";
import { useEffect, useState } from "react";
import "./style.css";

export default function StationList() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://stoplight.io/mocks/maja/rijsoverzicht/101174922/stations")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      });
  }, []);
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="station_li">
            <div className="fract">{item.station_name}</div>
            <div className="fract"> {item.station_code}</div>
            <div className="fract">{item.station_country}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
