import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  height: 5rem;
  justify-content:space-around;
  width:100vw;
  top:0;
`;
function Navbar() {
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.signin.signedin);

  const accesToken = localStorage.getItem("acces");
  const handleLogOut = () => {
    localStorage.removeItem("acces");
    alert("Logged Out!");
    navigate("/");
  };

  return (
    <>
      {accesToken && (
        <NavbarContainer>
          <button onClick={() => navigate("/stationlist")}>StationList</button>
          <button onClick={() => navigate("/routes")}>Routes</button>
          <button onClick={() =>navigate("/profile")}>Profile</button>
          <button onClick={handleLogOut}>Log Out</button>
        </NavbarContainer>
      )}
      {!accesToken && <NavbarContainer>Not Logged In. Please Login</NavbarContainer>}
    </>
  );
}
export default Navbar;
