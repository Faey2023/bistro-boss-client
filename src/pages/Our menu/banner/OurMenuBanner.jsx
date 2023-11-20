import bannerImg from "../../../assets/menu/banner3.jpg";
import Cover from "../../Shared/section cover/Cover";

const OurMenuBanner = () => {
  return (
    <>
      <Cover
        img={bannerImg}
        heading={"Our menu"}
        text={
          "Explore Bistro Boss's menu—a symphony of flavors! From tempting starters to gourmet pizzas, savory soups, and indulgent desserts. Every dish is crafted to perfection for an unforgettable dining experience. Taste the extraordinary."
        }
      />
    </>
  );
};

export default OurMenuBanner;
