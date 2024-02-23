import ServiceCard from "../../Shared/ServiceCard/ServiceCard";

const OrderTab = ({ items }) => {
    return (
        <div className="grid md:grid-cols-3 gap-6 my-12 ">
            {
                items.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
        </div>
    );
};

export default OrderTab;