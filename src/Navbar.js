import { Link } from "react-router-dom";

function Navbar () {
  return (
    <ul className={"navbar-container"}>
      <span className="navbar-span">
        <Link to="/" className={"navbar-element"}>Home</Link>
        <Link to="/reviews" className={"navbar-element"}>Reviews</Link>
        <Link to="/workout" className={"navbar-element"}>Workout</Link>
      </span>
      <div className="chatbot">AI Trainer</div>
    </ul>
  );
}

export default Navbar;