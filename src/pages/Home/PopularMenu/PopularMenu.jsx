import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(pop => pop.category === "popular");
    return (
        <section className="mb-12 flex flex-col items-center">
            <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-y-16  md:gap-12 mx-4">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="mt-8">
                <Link to='/menu'><button className="px-8 py-4  uppercase rounded-md text-[#000000]  border-b-4 border-[#000000] hover:bg-[#1F2937] hover:text-white hover:border-none">View Full Menu</button></Link>
            </div>
        </section>
    );
};

export default PopularMenu;