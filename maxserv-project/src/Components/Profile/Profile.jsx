import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Profile() {
  const loggedIn = useSelector((state) => state.signin.signedin);

  const navigate = useNavigate();

  const accesToken = localStorage.getItem("acces");
  
useEffect(()=>{
   if (!accesToken) {
    navigate("/");
  } 
},[])
  

  return (
    <div>
      {accesToken && <div>Logged In</div>}
      {!accesToken && <div>Not Logged In</div>}
    </div>
  );
}
export default Profile;
