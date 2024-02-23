

const MenuItem = ({ item }) => {
    const { image, price, name, recipe } = item;
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start">
            <img style={{ borderRadius: "0px 200px 200px 200px" }} src={image} className="w-[120px] h-[100px] mb-6 md:mb-0" alt="menuimg" />
            <div className="mx-2">
                <h3 className=" text-xl uppercase font-custom mb-2">{name} ------------</h3>
                <p className="font-Inter">{recipe}</p>
            </div>
            <p className="text-yellow-500 text-lg">${price}</p>
        </div>
    );
};

export default MenuItem;