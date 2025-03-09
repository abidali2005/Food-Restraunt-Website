
import './App.css'
import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Myorderdata from './screens/Myorder'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom'
function App() {


  return (
    <Router>

      <Routes>
        < Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/myorder" element={< Myorderdata/>} />
      </Routes>
  
    </Router>
  )
}

export default App
