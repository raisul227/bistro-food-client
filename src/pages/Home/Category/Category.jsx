import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Category.css';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <section>
            <SectionTitle subHeading={"From 11:00am to 10:00pm"} heading={"ORDER ONLINE"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-16"
            >
                <SwiperSlide className='relative'>
                    <img src={slide1} alt="slide" />
                    <h3 className='absolute bottom-2 md:bottom-10 uppercase  text-white md:text-2xl font-custom'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="slide" />
                    <h3 className='absolute bottom-2 md:bottom-10 uppercase  text-white md:text-2xl font-custom'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="slide" />
                    <h3 className='absolute bottom-2 md:bottom-10 uppercase  text-white md:text-2xl font-custom'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="slide" />
                    <h3 className='absolute bottom-2 md:bottom-10 uppercase  text-white md:text-2xl font-custom'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="slide" />
                    <h3 className='absolute bottom-2 md:bottom-10 uppercase  text-white md:text-2xl font-custom'>Salad</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;