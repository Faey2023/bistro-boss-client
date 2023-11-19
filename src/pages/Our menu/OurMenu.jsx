import { Helmet } from "react-helmet";
import Banner from "./Banner";
// import TodayOffer from "./TodayOffer";
import Pizza from "./category/pizza/Pizza";
import Dessert from "./category/dessert/Dessert";
import Soup from "./category/soup/Soup";

const OurMenu = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss|Our Menu</title>
      </Helmet>
      <Banner />
      {/* <TodayOffer /> */}
      <Dessert />
      <Pizza />
      <Soup />
    </>
  );
};

export default OurMenu;
