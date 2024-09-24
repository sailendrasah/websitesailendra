import Sdata from "./Sdata";
import img from "./web.jpeg";
import img2 from "./App.jpeg";
import img3 from "./software.jpeg";
import img4 from "./c++.png";
import img5 from "./c.jpeg";
import img6 from "./python.webp";

import "./Service.css";

function Service() {
  return (
    <div className="how">
      <h1>Course name</h1>
      <Sdata
        img={img}
        text="Web development involves  building and maintaining websites."
      />
      <Sdata
        img={img2}
        text="App development involves designing, coding, testing, and launching mobile."
      />
      <Sdata img={img3} text="problem solver,coder,architect,adaptable" />
      <Sdata img={img4} text="object oriented program,fast,compilied" />
      <Sdata img={img5} text="structed cidedfor efficient task automaton" />
    </div>
  );
}
export default Service;
