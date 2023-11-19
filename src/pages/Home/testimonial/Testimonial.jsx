import Title from "../../Shared/title/Title";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

//ratings
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
//icons
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <>
      <Title subHeading="What Our Clients Say" heading="testimonials" />
      <div className="">
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col justify-center items-center mb-5">
                <div className="flex">
                  <Rating
                    style={{ width: "150px" }}
                    value={review.rating}
                    readOnly
                  ></Rating>
                </div>
                <FaQuoteLeft className="h-24 w-24" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-xl">🌟 {review.details}</p>
                <h1 className="uppercase text-3xl text-[#CD9003] font-medium">
                  {review.name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
