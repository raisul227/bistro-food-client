
import { useState } from "react";
import Cover from "../../../Components/Cover/Cover";
import coverImg from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Order.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
    const categories = ['offered', 'salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const salad = menu.filter(pop => pop.category === "salad");
    const drinks = menu.filter(pop => pop.category === "drinks");
    const dessert = menu.filter(pop => pop.category === "dessert");
    const pizza = menu.filter(pop => pop.category === "pizza");
    const soup = menu.filter(pop => pop.category === "soup");
    const offered = menu.filter(pop => pop.category === "offered");
    return (
        <div className="space-y-10">
            <Helmet>
                <title>Bistro | Order</title>
            </Helmet>
            <Cover img={coverImg} title={"OUR SHOP"} text={"Would you like to try a dish?"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="flex flex-col items-center">
                <TabList>
                    <Tab>Offered</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={offered}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;