import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sionna from './pages/Sionna';
import Sionna0 from './pages/Sionna0';
import Sionna1 from './pages/Sionna1';
import Sionna2 from './pages/Sionna2';
import Sionna3 from './pages/Sionna3';
import Sionna4 from './pages/Sionna4';
import Sionna5 from './pages/Sionna5';
import Sionna6 from './pages/Sionna6';
import Sionna7 from './pages/Sionna7';
import Sionna8 from './pages/Sionna8';
import Sionna9 from './pages/Sionna9';
import Sionna9x from './pages/Sionna9x';

//import ScrollToTop from "./helpers/ScrollToTop";
//import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";

/*


*/

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sionna" element={<Sionna />} />
          <Route path="/Sionna/0" element={<Sionna0 />} />
          <Route path="/Sionna/1" element={<Sionna1 />} />
          <Route path="/Sionna/2" element={<Sionna2 />} />
          <Route path="/Sionna/3" element={<Sionna3 />} />
          <Route path="/Sionna/4" element={<Sionna4 />} />
          <Route path="/Sionna/5" element={<Sionna5 />} />
          <Route path="/Sionna/6" element={<Sionna6 />} />
          <Route path="/Sionna/7" element={<Sionna7 />} />
          <Route path="/Sionna/8" element={<Sionna8 />} />
          <Route path="/Sionna/9" element={<Sionna9 />} />
          <Route path="/Sionna/9x" element={<Sionna9x />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
