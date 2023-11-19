import { Helmet } from "react-helmet";
import Banner from "./Banner";
import TodayOffer from "./TodayOffer";
import Pizza from "./category/pizza/Pizza";

const OurMenu = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss|Our Menu</title>
      </Helmet>
      <Banner />
      <TodayOffer />
      <Pizza />
    </>
  );
};

export default OurMenu;
