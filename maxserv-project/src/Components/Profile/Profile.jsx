import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justfiy-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
`;

function Profile() {
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.signin.signedin);

  const accesToken = localStorage.getItem("acces");

  useEffect(() => {
    if (!accesToken) {
      navigate("/");
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("acces");
    alert("Logged Out!");
    navigate("/");
  };

  return (
    <div>
      {accesToken && (
        <Container>
          Logged In<button onClick={handleLogOut}>LogOut</button>
          <button onClick={()=> navigate('/routes')}>Routes</button>
          <button onClick={()=> navigate('/stationlist')}>StationList</button>
        </Container>
      )}
      {!accesToken && <Container>Not Logged In</Container>}
    </div>
  );
}
export default Profile;
