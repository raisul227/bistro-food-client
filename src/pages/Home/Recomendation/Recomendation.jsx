import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";

const Recomendation = () => {
    const [reqServices, setReqServices] = useState([]);
    useEffect(() => {
        fetch('https://bistro-food-server-raisul227.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                const recomendation = data.slice(0, 3);
                setReqServices(recomendation);
            })
    }, []);
    return (
        <div>
            <SectionTitle subHeading={"Should Try"} heading={"CHEF RECOMMENDS"}></SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 gap-y-16 place-items-center mb-12">
                {
                    reqServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Recomendation;