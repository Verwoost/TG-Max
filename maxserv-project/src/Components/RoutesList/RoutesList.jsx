import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance as axios} from "../../axios/axios"

import styled from "styled-components";

const RoutesListContainer = styled.div`
  margin: 0;
  padding: 0;
`;


const stations = [
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
    stationCode: "Itr",
    landCode: "NL",
    facilities: "true",
  },
  {
    name: "Amsterdam Centraal",
    stationCode: "bra",
    landCode: "NL",
    facilities: "true",
  },
];

function RoutesList() {
  const [data, setData] = useState([])
  //check isLoggedIn
  const accesToken = localStorage.getItem("acces");
  useEffect(() => {
    if (!accesToken) {
      navigate("/");
      return
    }
    const fetchData = async () => {
      const result = await axios.get("/routes")
      setData(result.data)
    }

    fetchData()

  }, []);



  return (
    <>
      {accesToken && (
        <RoutesListContainer>
          {stations.map((station) => {
            return <button>{station.name}</button>;
          })}
        </RoutesListContainer>
      )}
    </>
  );
}
export default RoutesList;
