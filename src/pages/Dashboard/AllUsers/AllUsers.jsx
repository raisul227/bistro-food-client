import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import { MdDelete } from "react-icons/md";
import { FaUsers } from 'react-icons/fa';
import Swal from "sweetalert2";


const AllUsers = () => {
    const secureAxios = useAxios();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await secureAxios.get('/users',);
            return res.data;
        }
    });
    const handleRole = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Make This user as Admin?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, do it!"
        }).then((result) => {
            if (result.isConfirmed) {
                secureAxios.patch(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Updated!",
                                text: `${user.name} is now Admin`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                secureAxios.delete(`/orders/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Item has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="md:max-w-3xl mx-auto">
            <div className="flex justify-between m-2" >
                <h2 className="text-lg md:text-3xl">All Users</h2>
                <h2 className="text-lg md:text-3xl">Total Users: {users.length}</h2>
            </div >

            <div className="overflow-x-auto">
                <table className="table table-zebra table-xs  md:table-lg">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'Admin' : <button onClick={() => handleRole(user)} className="btn btn-ghost btn-sm md:text-xl text-white bg-[#D1A054] hover:text-[#D1A054]">
                                        <FaUsers />
                                    </button>}
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-sm md:text-xl text-white bg-[#D1A054] hover:text-[#D1A054]">
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;