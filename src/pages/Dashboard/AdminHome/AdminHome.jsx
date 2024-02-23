import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import { IoWalletSharp } from "react-icons/io5";
import { FaBookOpen, FaCartPlus, FaUsers } from 'react-icons/fa';

const AdminHome = () => {
    const { user } = useAuth();
    const secureAxios = useAxios();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await secureAxios.get('/admin-stats');
            return res.data;
        }
    })
    return (
        <div className="mx-4">
            <h2 className="text-3xl">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div className="flex justify-center my-12 ">
                <div className="stats stats-vertical lg:stats-horizontal shadow">
                    <div className="stat w-52 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex items-center">
                        <IoWalletSharp className="text-4xl" />
                        <div>
                            <div className="text-2xl">${stats?.revenue}</div>
                            <div className="text-lg">Revenue</div>
                        </div>
                    </div>
                    <div className="stat w-52 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0 ] flex items-center text-center">
                        <FaUsers className="text-4xl" />
                        <div>
                            <div className="text-2xl">{stats?.users}</div>
                            <div className="text-lg">Users</div>
                        </div>
                    </div>
                    <div className="stat w-52 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] flex items-center">
                        <FaBookOpen className="text-4xl" />
                        <div>
                            <div className="text-2xl">{stats?.menuItems}</div>
                            <div className="text-lg">Menu Items</div>
                        </div>
                    </div>
                    <div className="stat w-52 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] flex items-center">
                        <FaCartPlus className="text-4xl" />
                        <div>
                            <div className="text-2xl">${stats?.orders}</div>
                            <div className="text-lg">Orders</div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AdminHome;