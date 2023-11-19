// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

//images
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import Title from "../../Shared/title/Title";
const OrderOnline = () => {
  return (
    <>
      
        <Title
          subHeading="---From
          11:00am to 10:00pm---"
          heading="Order Online"
        />
      <div className="my-5">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="uppercase text-3xl text-[#FFF] -mt-10 text-center">
              salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="uppercase text-3xl text-[#FFF] -mt-10 text-center">
              pizza
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="uppercase text-3xl text-[#FFF] -mt-10 text-center">
              soup
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="uppercase text-3xl text-[#FFF] -mt-10 text-center">
              dessert
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default OrderOnline;
