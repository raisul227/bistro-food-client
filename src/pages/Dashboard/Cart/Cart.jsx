import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { MdDelete } from "react-icons/md";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart, refetch] = useCart();
    const secureAxios = useAxios();
    const totalPrice = cart.reduce((prev, current) => {
        return prev + current.price;
    }, 0);

    const handleDelete = (id) => {
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
                secureAxios.delete(`/orders/${id}`)
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
        <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl uppercase">Total Items: {cart.length}</h2>
                <div className="flex  items-center">
                    <h2 className="mr-8 uppercase text-3xl">Total Price: ${totalPrice.toFixed(2)}</h2>
                    {cart.length ? <Link to='/dashboard/payment'><button className="btn btn-sm btn-outline btn-error">Pay</button></Link> :
                        <button disabled className="btn btn-sm btn-outline btn-error">Pay</button>
                    }
                </div>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="bistro order Image" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="uppercase">{item.name}</div>
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-sm text-xl text-white bg-[#D1A054] hover:text-[#D1A054]"><MdDelete />
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;