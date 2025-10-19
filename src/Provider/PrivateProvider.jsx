import { use } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../Pages/Loading";

const PrivateProvider = ({ children }) => {
    const {user, loading} = use(AuthContext)
    const location = useLocation()
    // console.log(location)

    if(loading) {
        return <Loading></Loading>
    }

    if(user && user?.email) {
        return children
    }
    else {
       return <Navigate to="/auth" state={location.pathname}></Navigate>
    }
};

export default PrivateProvider;
