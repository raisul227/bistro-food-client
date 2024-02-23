import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="flex h-screen w-full justify-center items-center"><span className="loading loading-spinner text-success"></span>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/authentication/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;