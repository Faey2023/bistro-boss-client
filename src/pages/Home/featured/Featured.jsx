import Title from "../../Shared/title/Title";

import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <>
      <div
        className="text-white my-10"
        style={{
          backgroundImage: `url(${featuredImg})`,
          backgroundAttachment: "fixed",
        }}
      >
        <Title subHeading="Check it out" heading="from our menu" />
        <div className="md:flex gap-16 max-w-6xl mx-auto h-96 my-auto pb-20 px-36 pt-10 ">
          <div className="flex-1">
            <img src={featuredImg} alt="" />
          </div>
          <div className="flex-1">
            <p>
              March 20, 2023 WHERE CAN I GET SOME? To experience the culinary
              delights of our Featured Selections, visit our restaurant located
              at Bistro Boss. Our skilled chefs have meticulously
              prepared each dish to perfection, ensuring a gastronomic journey
              like no other. If you prefer the convenience of dining at home,
              you can also order through our website or app for a delightful
              meal delivered right to your doorstep. Join us in savoring the
              extraordinary flavors of our carefully curated menu. Your culinary
              adventure awaits! 🌟
            </p>

            <button className="text-white border-b-4 rounded-lg btn btn-outline mt-3">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
