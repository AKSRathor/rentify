import logo from './logo.svg';
import './App.css';
import Authen from './Components/Authen';
import Home from './Components/Homepage/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Authen />} />
            <Route exact path="/post" element={<Home />} />
          </Routes>
        </BrowserRouter>

      {/* <Home/> */}
    
    </div>
  );
}

export default App;
