import { Helmet } from "react-helmet";
import Banner from "./Banner";
import TodayOffer from "./TodayOffer";

const OurMenu = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss|Our Menu</title>
      </Helmet>
      <Banner />
      <TodayOffer />
    </>
  );
};

export default OurMenu;
