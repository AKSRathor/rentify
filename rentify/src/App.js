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
import More from './Components/Homepage/More';

const host = "https://rentifybackend-git-main-aksrathors-projects.vercel.app/"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Authen host = {host} />} />
            <Route exact path="/post" element={<Home host = {host} />} />
            <Route exact path= "/post/:postid" element={<More host = {host} />}/>
          </Routes>
        </BrowserRouter>

      {/* <Home/> */}
    
    </div>
  );
}

export default App;
