import { Helmet } from "react-helmet";
import TodayOffer from "./TodayOffer";
import Pizza from "./category/pizza/Pizza";
import Dessert from "./category/dessert/Dessert";
import Soup from "./category/soup/Soup";
import Salad from "./category/salad/Salad";
import OurMenuBanner from "./banner/OurMenuBanner";

const OurMenu = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss|Our Menu</title>
      </Helmet>
      <OurMenuBanner />
      <TodayOffer />
      <Dessert />
      <Pizza />
      <Salad />
      <Soup />
    </>
  );
};

export default OurMenu;
