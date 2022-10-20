import React, { useEffect } from "react";
import styled from "styled-components";
import { auth } from "../../firebase/firebase";
import { setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setSignedIn } from "./signinSlice";
import { useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width:100vw;
  height:100vh;
  form {
    display: flex;
    flex-direction: column;
    justify-content:center;
  }
`;

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accesToken = localStorage.getItem("acces");
  useEffect(()=>{
    if (accesToken) {
     navigate("/profile");
   } 
 },[])

  const handleSubmit = async (event) => {
    event.preventDefault();



    const email = event.currentTarget.email.value;
    const pass = event.currentTarget.password.value;
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, pass);
      localStorage.setItem("acces", userCred.user.accessToken);
      dispatch(
        setSignedIn({
          signedin: true,
          userEmail: userCred.user.email,
          accessToken: userCred.user.accessToken,
        })
      );
      navigate("/profile");
    } catch (error) {}
  };

  return (
    <Container>
      Login:
      <form onSubmit={handleSubmit}>
        <label>E-mail :</label>
        <input type="text" name="email" id="email" />
        <label>Password :</label>
        <input type="password" name="password" id="password" />
        <input type="submit" />
      </form>
    </Container>
  );
}

export default Login;
