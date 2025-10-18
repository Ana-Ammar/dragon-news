import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-base-200">
      <div className="w-11/12 mx-auto py-5 ">
        <Navbar></Navbar>
        <div className="flex justify-center items-center min-h-screen py-10">
            <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
 