import { Link } from "react-router-dom";

function Navbar () {
  return (
    <ul className={"navbar-container"}>
      <span className="navbar-span">
        <Link to="/" className={"navbar-element"}><p><i className="fa-solid fa-user"></i>Home</p></Link>
        <Link to="/workout" className={"navbar-element"}><p><i className="fa-solid fa-dumbbell"></i>Workout</p></Link>
        {/* <Link to="/bmi" className={"navbar-element"}>BMI Calculator</Link> */}
        <a href="/gyms.html" className={"navbar-element"}><p><i className="fa-solid fa-map-pin"></i> Find Gyms</p></a>
        <a href="/reviews.html" className={"navbar-element"}><p><i className="fa-solid fa-heart"></i>Reviews</p></a>
        {/* <Link to="/reviews" className={"navbar-element"}><p><i className="fa-solid fa-heart"></i>Reviews</p></Link> */}
      </span>
    </ul>
  );
}

export default Navbar;