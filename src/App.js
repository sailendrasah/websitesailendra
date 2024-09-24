// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Service from './Service'
import About from './About';
import Contact from './Contact';
// import {Route,Routes,Link} from 'react-router-dom'
// import { Route,Routes,Link } from "react-router-dom";
import { Route,Routes,Link } from 'react-router-dom';

function App() {


  return (
    <div>
      <nav>
        <h2>sailendra sah</h2>

        <div className="link">
          <Link to={"/"}>Home</Link>
          <Link to={"/Service"}>Service</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Contact"}>Contact</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
