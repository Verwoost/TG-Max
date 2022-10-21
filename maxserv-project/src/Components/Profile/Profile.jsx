import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    alert("Logged Out!");
    navigate("/");
  };

  return (
    <div>
      {accesToken && (
        <Container>
          Profile Page
          <header> Welkom Terug</header>
        </Container>
      )}
      {!accesToken && <Container>Not Logged In</Container>}
    </div>
  );
}
export default Profile;
