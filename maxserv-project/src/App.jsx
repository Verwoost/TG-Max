import {Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'

function App() {


  return <div className="App">
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  </div>;
}

export default App;
