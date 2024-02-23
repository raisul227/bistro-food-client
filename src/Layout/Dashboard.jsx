import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaList, FaSearch, FaUsers } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import { MdDashboard } from "react-icons/md";




const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-64 min-h-screen bg-[#D1A054] px-2 py-6">
                <div className="text-center my-6">
                    <h2 className="text-2xl font-Inter font-bold text-[#151515] uppercase mb-3">Bistro Food</h2>
                    <p className="text-xl tracking-[5px] uppercase font-custom">Resturant</p>
                </div>
                {
                    isAdmin ? <>
                        <div className="my-6">
                            <ul className="menu p-4 uppercase">
                                <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</NavLink> </li>
                                <li><NavLink to="/dashboard/addItems"><MdRestaurant></MdRestaurant>Add Items</NavLink></li>
                                <li><NavLink to="/dashboard/manageItems"><FaList></FaList>Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/allUsers'><FaUsers></FaUsers> All Users</NavLink></li>
                            </ul>
                            <div className="divider divide-amber-50"></div>
                        </div>
                    </> : <>

                    </>
                }
                <div>
                    <ul className="menu p-4 uppercase">
                        <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to="/dashboard/userHome"><MdDashboard /> User Activites</NavLink></li>
                        <li><NavLink to="/menu"><FaSearch></FaSearch>Menu</NavLink></li>
                        <li>
                            <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> My Cart
                                <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                            </NavLink>
                        </li>
                        <li><NavLink to="/dashboard/paymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="md:flex-1 py-12">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;