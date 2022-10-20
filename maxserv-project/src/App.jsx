import {Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
import RoutesList from './Components/RoutesList/RoutesList';

function App() {


  return <div className="App">
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/routes" element={<RoutesList/>}/>
    </Routes>
  </div>;
}

export default App;
