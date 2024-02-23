const Cover = ({ img, title, text }) => {
    return (
        <section>
            <div className="hero h-[500px] md:h-[700px]" style={{ backgroundImage: `url(${img})` }}>
                <div className="md:w-1/2">
                    <div className="w-full hero-overlay bg-opacity-50 shadow-xl md:mx-3">
                        <div className="w-full text-white px-4 py-12">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-custom mb-4 text-center">{title}</h2>
                            <p className="text-lg text-center font-custom">
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cover;