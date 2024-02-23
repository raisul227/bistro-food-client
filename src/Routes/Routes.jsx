import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Authentication from "../Layout/Authentication";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../pages/Dashboard/UpdateItems/UpdateItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from './../pages/Dashboard/AdminHome/AdminHome';
import UserHome from "../pages/Dashboard/UserHome/UserHome";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <PrivateRoute><Order></Order></PrivateRoute>

            }
        ]
    },
    {
        path: 'authentication',
        element: <Authentication></Authentication>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'userHome',
                element: <PrivateRoute><UserHome></UserHome></PrivateRoute>
            },
            {
                path: 'cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: 'payment',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },
            {
                path: 'paymentHistory',
                element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
            },
            //all admin only routes
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'updateItems/:id',
                element: <AdminRoute><UpdateItems></UpdateItems></AdminRoute>,
                loader: ({ params }) => fetch(`https://bistro-food-server-raisul227.vercel.app/menu/${params.id}`)
            },
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            }
        ]
    }
])