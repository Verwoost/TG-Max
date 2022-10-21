import React from "react";
import { instance as axios } from "../../axios/axios";
import { useEffect, useState } from "react";
import "./style.css";

export default function StationList() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const routes = await axios.get("/stations");

      setItems(routes.data);
      
    };
    fetchData();
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
