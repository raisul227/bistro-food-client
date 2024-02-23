import { MdDelete } from "react-icons/md";
import useMenu from "../../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const secureAxios = useAxios();
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await secureAxios.delete(`/menu/${item._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }

            }
        });
    }
    return (
        <div>
            <div className="text-center mt-5 mb-12 w-3/4 md:w-2/4 lg:w-1/4 mx-auto">
                <p className="text-yellow-600 mb-3">--- Hurry Up! ---</p>
                <h2 className="text-2xl md:text-2xl border-y-4 py-4 font-Inter">Manage All Items</h2>
            </div>

            <div className="mx-4">
                <div className="overflow-x-auto">
                    <table className="table table-xs md:table-lg">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Item Image" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>{item.name}</span>
                                    </td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Link to={`/dashboard/updateItems/${item._id}`}><button className="btn btn-ghost btn-sm md:text-xl text-white bg-[#D1A054] hover:text-[#D1A054]">
                                            <FaEdit></FaEdit>
                                        </button></Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-sm md:text-xl text-white bg-[#D1A054] hover:text-[#D1A054]"><MdDelete />
                                        </button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;