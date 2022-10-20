import { useState } from "react";
import reactLogo from "./assets/react.svg";
import StationList from "./components/stationList/StationList";
import StationGet from "./components/stationList/StationGet";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <StationList></StationList>
      <StationGet></StationGet>
    </div>
  );
}

export default App;
