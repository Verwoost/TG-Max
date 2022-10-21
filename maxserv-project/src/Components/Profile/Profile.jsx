import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { instance as axios } from "../../axios/axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
`;
const BodyC = styled.div`
  display:flex;
  margin-top:1rem;
`
const RouteContainer = styled.div`

  display:flex;
  flex-direction:column;
  margin:1rem;

`

function Profile() {
  const [routes, setRoutes] = useState();
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.signin.signedin);

  const accesToken = localStorage.getItem("acces");

  useEffect(() => {
    if (!accesToken) {
      navigate("/");
      return;
    }
    const fetchData = async () => {
      const routes = await axios.get("/route");
      setRoutes(routes.data);
      console.log(routes);
    };
    fetchData();
  }, []);

  const email = localStorage.getItem("email");
  let routeArr = [];
  routes?.forEach((route) => {
    if (route.email === email) {
      routeArr.push(route);

    }
  });
  return (
    <div>
      {accesToken && (
        <Container>
          <h1>Profile Page {email}</h1>
          <BodyC>
          {routeArr &&
              routeArr.map((routeMatch, index) => {
                return (
                  <RouteContainer key={index}>
                    <div>Start: {routeMatch.start_station}</div>
                    <div>Tussenstop: {routeMatch.stop_station}</div>
                    <div>Eind: {routeMatch.start_station}</div>
                    <div>User: {routeMatch.user}</div>
                  </RouteContainer>
                );
              })}
        </BodyC>
        </Container>
      )}
      {!accesToken && <Container>Not Logged In</Container>}
    </div>
  );
}
export default Profile;
