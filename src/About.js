import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h1>For more information contact us</h1>
      <Link to="/contact" className="btn">
        Contact us
      </Link>
    </>
  );
}
export default About;
