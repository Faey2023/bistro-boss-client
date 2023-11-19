import { Helmet } from "react-helmet";
import Banner from "./Banner";
import TodayOffer from "./TodayOffer";
import Pizza from "./category/pizza/Pizza";
import Dessert from "./category/dessert/Dessert";

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
    </>
  );
};

export default OurMenu;
