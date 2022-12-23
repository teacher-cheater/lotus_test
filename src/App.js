import Room from "./components/Room/Room";
import Home from "./components/Home/Home";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <nav className="navigation">
            <ul className="list">
              <li >
                <Link to="/"><span>Home</span></Link>
              </li>
              <li>
                <Link to="/room"><span>Room</span></Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/room' element={<Room />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
