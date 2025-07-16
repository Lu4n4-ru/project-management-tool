import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/projects">
        <button>Project list</button>
      </NavLink>
      <NavLink to="/projects/create">
        <button>Create project</button>
      </NavLink>
    </>
  );
}

export default Navbar;
