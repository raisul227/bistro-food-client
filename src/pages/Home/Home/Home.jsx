import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Bistro from "../Bistro/Bistro";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recomendation from "../Recomendation/Recomendation";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Bistro></Bistro>
            <PopularMenu></PopularMenu>
            <Recomendation></Recomendation>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;