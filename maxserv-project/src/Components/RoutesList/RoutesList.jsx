import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance as axios } from "../../axios/axios";

import styled from "styled-components";

const RoutesListContainer = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const StationList = styled.div`
  display: flex;
  flex-direction: column;
`;
const Station = styled.div`
  
`;
const RoutesContainer = styled.div`
 
`;
const RouteSingle = styled.div`
  padding:1rem;
`

function RoutesList() {
  const [stations, setStations] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [stationRoute, setStationRoutes] = useState([]);
  //check isLoggedIn
  const accesToken = localStorage.getItem("acces");
  useEffect(() => {
    if (!accesToken) {
      navigate("/");
      return;
    }
    const fetchData = async () => {
      const stationsRes = await axios.get("/stations");
      const routes = await axios.get("/route");
      setStations(stationsRes.data);
      setRoutes(routes.data);
    };

    fetchData();
  }, []);

  const handleOnClick = (station) => {
    let routeArr = [];
    routes.forEach((route) => {
      let start = route.start_station;
      let stops = [route.stop_station];
      let end = route.end_station;
      if (start === station || stops.includes(station) || end === station) {
        routeArr.push(route);
      }
    });
    setStationRoutes(routeArr);
  };
  useEffect(() => {
    console.log(stationRoute);
  }, [stationRoute]);

  return (
    <>
      {accesToken && (
        <RoutesListContainer>
          <StationList>
            {stations.map((station, index) => {
              return (
                <Station key={index}>
                  <button
                    onClick={() => {
                      handleOnClick(station.station_name);
                    }}
                  >
                    {station.station_name}
                  </button>
                </Station>
              );
            })}
          </StationList>
          <RoutesContainer>
            {stationRoute &&
              stationRoute.map((route, index) => {
                return (
                  <RouteSingle key={index}>
                    <div>Start: {route.start_station}</div>
                    <div>Tussenstop: {route.stop_station}</div>
                    <div>Eind: {route.start_station}</div>
                    <div>User: {route.user}</div>
                  </RouteSingle>
                );
              })}
          </RoutesContainer>
        </RoutesListContainer>
      )}
    </>
  );
}
export default RoutesList;
