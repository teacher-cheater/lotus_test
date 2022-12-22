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
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/room">Room</Link>
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
