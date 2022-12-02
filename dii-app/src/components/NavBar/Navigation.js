import './Navigation.css'
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <div className={"header"}>
      <h1>MOVIE-INFO</h1>
      <nav>
        <NavLink className={"NavLink"} to="/" end>
          Home
        </NavLink>
        <NavLink className={"NavLink"} to="/movies">Search</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
