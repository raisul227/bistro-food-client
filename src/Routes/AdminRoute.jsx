import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();
    if (loading || isAdminLoading) {
        return <div className="flex h-screen w-full justify-center items-center"><span className="loading loading-spinner text-success"></span>
        </div>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/authentication/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;