import { Helmet } from 'react-helmet-async';
import Cover from '../../../Components/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';
import desertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';

const Menu = () => {
    const [menu] = useMenu();
    const salad = menu.filter(pop => pop.category === "salad");
    const offered = menu.filter(pop => pop.category === "offered");
    const dessert = menu.filter(pop => pop.category === "dessert");
    const pizza = menu.filter(pop => pop.category === "pizza");
    const soup = menu.filter(pop => pop.category === "soup");
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"OUR MENU"} text={"Would you like to try a dish?"}></Cover>
            <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <Cover img={desertImg} title={"DESSERTS"} text={"In the vast expanse of arid landscapes and shifting sands, the desert stands as a testament to nature's resilience and austere beauty."}></Cover>
            <MenuCategory items={dessert}></MenuCategory>
            <Cover img={pizzaImg} title={"Pizza"} text={"Pizza, a culinary marvel born from the heart of Italy, has transcended borders to become a global icon of comfort and indulgence."}></Cover>
            <MenuCategory items={pizza}></MenuCategory>
            <Cover img={saladImg} title={"Salad"} text={"Salads, the verdant symphony of freshness and flavors, offer a vibrant journey into the world of wholesome and nourishing cuisine."}></Cover>
            <MenuCategory items={salad}></MenuCategory>
            <Cover img={soupImg} title={"Soups"} text={"Soups, the comforting elixirs that warm the soul and enfold us in a nurturing embrace, are a culinary tradition that transcends cultures and spans the seasons."}></Cover>
            <MenuCategory items={soup}></MenuCategory>
        </div >
    );
};

export default Menu;