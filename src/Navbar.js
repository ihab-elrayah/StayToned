import { Link } from "react-router-dom";

function Navbar () {
  return (
    <ul className={"navbar-container"}>
      <span className="navbar-span">
        <Link to="/" className={"navbar-element"}><p><i class="fa-solid fa-user"></i>Home</p></Link>
        <Link to="/workout" className={"navbar-element"}><p><i class="fa-solid fa-dumbbell"></i>Workout</p></Link>
        {/* <Link to="/bmi" className={"navbar-element"}>BMI Calculator</Link> */}
        <Link to="/gyms" className={"navbar-element"}><p><i class="fa-solid fa-map-pin"></i> Find Gyms</p></Link>
        <Link to="/reviews" className={"navbar-element"}><p><i class="fa-solid fa-heart"></i>Reviews</p></Link>
      </span>
    </ul>
  );
}

export default Navbar;