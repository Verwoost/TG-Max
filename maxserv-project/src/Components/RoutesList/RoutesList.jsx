import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

function RoutesList() {
  //check isLoggedIn
  const accesToken = localStorage.getItem("acces");
  useEffect(() => {
    if (!accesToken) {
      navigate("/");
    }
  }, []);
  return <div>{accesToken && <div>Logged In Routes</div>}</div>;
}
export default RoutesList;
