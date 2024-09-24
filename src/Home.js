import "./Home.css";
import { Link } from "react-router-dom";
// import Service from './Service';
import pic from "./Snapchat-796638355.jpg";
function Home() {
  return (
    <div className="home">
      <div className="ln">
        <h1>Grow your knowledge with sailendra sah</h1>
        <p>Here you found all course computer science related</p>
        <Link to="/Service" className="btn">
          Get started
        </Link>
      </div>
      <div className="img">
        <img src={pic} className="pic" alt="" />
      </div>
    </div>
  );
}
export default Home;
