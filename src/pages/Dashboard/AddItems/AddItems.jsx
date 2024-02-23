import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_imgbbKey;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
    const publicAxios = useAxiosPublic();
    const secureAxios = useAxios();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        //upload to imgbb
        const imageFile = { image: data.file[0] };
        const res = await publicAxios.post(image_hosting_api, imageFile, {
            headers: { 'content-type': 'multipart/form-data' }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.recipe,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.details,
                image: res.data.data.display_url
            };
            //
            const menuRes = await secureAxios.post('/menu', menuItem);
            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Item Adeded Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
    return (
        <div className="w-full">
            <div className="text-center mt-5 mb-12 w-3/4 md:w-2/4 lg:w-1/4 mx-auto">
                <p className="text-yellow-600 mb-3">--- Whats new? ---</p>
                <h2 className="text-xl md:text-2xl border-y-4 py-4 font-Inter">ADD AN ITEM</h2>
            </div>
            <div className="lg:mx-4 md:w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-3xl mx-auto bg-[#E8E8E8] p-6">
                    <div className="form-control w-full mb-3">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            {...register("recipe", { required: true })}
                            placeholder="Recipe Name"
                            className="input input-bordered w-full " />
                    </div>
                    <div className="flex">
                        <div className="form-control w-1/2 mr-2">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select
                                defaultValue="default"
                                {...register("category", { required: true })} className="select select-bordered w-full">
                                <option disabled defaultValue="default">Select A Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="text"
                                {...register("price", { required: true })}
                                placeholder="Price"
                                className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control my-4">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea
                            {...register("details", { required: true })}
                            placeholder="Recipe Details"
                            className="textarea textarea-bordered textarea-lg w-full h-32 resize-none" ></textarea>
                    </div>
                    <div className="form-control">
                        <input {...register('file', { required: true })} type="file" className="file-input file-input-ghost w-full max-w-xs" />
                    </div>
                    <input className="btn btn-warning text-white mt-4 uppercase" type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;