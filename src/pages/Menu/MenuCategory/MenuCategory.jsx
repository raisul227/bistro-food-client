import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
    const category = items[0]?.category;
    return (
        <section className="flex flex-col items-center">
            <div className="grid md:grid-cols-2 gap-y-16  md:gap-12 mx-4 py-16">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="my-8">
                <Link to={`/order/${category}`}><button className="px-8 py-4  uppercase rounded-md text-[#000000]  border-b-4 border-[#000000] hover:bg-[#1F2937] hover:text-white hover:border-none">ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </section>
    );
};

export default MenuCategory;