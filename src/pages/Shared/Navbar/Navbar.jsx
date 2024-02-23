import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [orders] = useCart();
    const handleLogout = () => {
        logOut()
            .then(() => { })
    }

    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to={isAdmin ? `/dashboard/adminHome` : `/dashboard/userHome`}>DashBoard</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Our Order</Link></li>
        <li><Link to='/dashboard/cart' className="text-xl">
            <FaCartPlus />
            <div className="badge badge-secondary">+{orders.length}</div>
        </Link></li>
        {
            user?.email ? <li><button onClick={handleLogout}>Logout</button></li> : <li><Link to='/authentication/login'>Login</Link></li>
        }

    </>
    return (
        <>
            <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30  bg-black ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl text-white">Bistro Food</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <p className="md:mr-3 hidden md:block text-white">{user?.displayName}</p>
                    <Link to='/authentication/signup' className="btn  uppercase">Signup</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;