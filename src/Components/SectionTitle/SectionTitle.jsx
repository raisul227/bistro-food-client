const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="text-center my-14 md:my-20 py-6 md:py-12 w-3/4 md:w-2/4 lg:w-1/4 mx-auto">
            <p className="text-yellow-600 mb-3">---{subHeading}---</p>
            <h2 className="text-2xl md:text-3xl border-y-4 py-4 font-Inter">{heading}</h2>
        </div>
    );
};

export default SectionTitle;