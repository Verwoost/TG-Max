import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import RoutesList from "./Components/RoutesList/RoutesList";
import StationList from "./Components/stationList/StationList";
import GlobalStyle from "./Globalstyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/routes" element={<RoutesList />} />
        <Route path="/stationlist" element={<StationList />} />
      </Routes>
    </div>
  );
}

export default App;
