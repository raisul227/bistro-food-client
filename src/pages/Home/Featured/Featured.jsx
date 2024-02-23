import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <section className="bg-featuredImg bg-fixed bg-center bg-no-repeat mb-8">
            <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
            <div className="md:flex justify-center items-center px-8 md:px-16 py-5 md:py-9">
                <div className="md:mr-16 mb-5 md:mb-0 md:w-1/2">
                    <img src={featuredImg} alt="featured" />
                </div>
                <div className="text-[#fff] space-y-2 text-lg md:w-1/2 font-Inter">
                    <p>March 20, 2023</p>
                    <p className="uppercase">
                        WHERE CAN I GET SOME?
                    </p>
                    <p>Bistro Bliss Salmon! Prepare your taste buds for an extraordinary culinary experience  as we present this exquisite creation, carefully crafted to captivate your senses.
                        Bistro Bliss Salmon is a symphony of flavors that begins with succulent, premium-grade salmon fillets, delicately seasoned and grilled to perfection. The result? A melt-in-your-mouth sensation that showcases the richness of the ocean, harmonized with a perfect blend of aromatic herbs and spices.
                    </p>
                    <button className="px-5 py-3 rounded-md uppercase  border-b-4 border-slate-100 hover:bg-slate-200 hover:text-black text-sm">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;