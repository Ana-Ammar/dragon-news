import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthContext";
import { use } from "react";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOutBtn = () => {
    signOutUser()
      .then(() => {
        alert("Sign out succesfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  

  return (
    <div className="flex items-center justify-between text-accent">
      <div className="flex-1">{user && user.email}</div>
      <div className="flex gap-4 flex-1">
        <NavLink to="/" className="">
          Home
        </NavLink>
        <NavLink to="/about" className="">
          About
        </NavLink>
        <NavLink to="/career" className="">
          Career
        </NavLink>
      </div>
      <div className="flex items-center gap-2">
        <img src={userIcon} className="" />
        {user ? (
          <button
            onClick={handleSignOutBtn}
            className="btn btn-primary text-base-100 !px-8 !rounded-none"
          >
            Log out
          </button>
        ) : (
          <Link
            to="/auth"
            className="btn btn-primary text-base-100 !px-8 !rounded-none"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
