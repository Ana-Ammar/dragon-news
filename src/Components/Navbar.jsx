import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-accent">
      <div className="flex-1"></div>
      <div className="flex gap-4 flex-1">
        <NavLink to="/" className="btn bg-base-100 border-0 shadow-none">
          Home
        </NavLink>
        <NavLink to="/about" className="btn bg-base-100 border-0 shadow-none">
          About
        </NavLink>
        <NavLink to="/career" className="btn bg-base-100 border-0 shadow-none">
          Career
        </NavLink>
      </div>
      <div className="flex items-center gap-2">
        <img src={user} className="" />
        <button className="btn btn-primary text-base-100 !px-8 !rounded-none">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
