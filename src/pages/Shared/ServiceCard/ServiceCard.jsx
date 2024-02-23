import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from './../../../hooks/useAxios';
import useCart from "../../../hooks/useCart";



const ServiceCard = ({ service }) => {
    const { image, name, recipe, price, _id } = service;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const secureAxios = useAxios();
    const handleAddToCart = () => {
        if (user && user.email) {
            //todo order will add
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            };
            secureAxios.post('/orders', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Order Add To cart",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })

        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add order",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/authentication/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card w-80 lg:w-96  h-[510px] bg-[##F3F3F3] rounded-none shadow-xl justify-between">
            <img src={image} alt="food" />
            <p className="absolute right-2 top-3 bg-slate-800 text-white px-3 py-2">${price}</p>
            <div className="px-4 py-8 text-center">
                <h2 className="font-Inter text-2xl font-semibold mb-3">
                    {name}
                </h2>
                <p className="text-md font-Inter text-justify">{recipe}</p>
            </div>
            <div className="card-actions justify-center mb-4"><button onClick={handleAddToCart} className="p-4 bg-[#E8E8E8] uppercase rounded-md text-[#BB8506]  border-b-4 border-[#BB8506] hover:bg-[#1F2937] hover:border-none">Add To Cart</button></div>
        </div>

    );
};

export default ServiceCard;