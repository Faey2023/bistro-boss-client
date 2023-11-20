import { Helmet } from "react-helmet";
import Featured from "./featured/Featured";
import PopularMenu from "./menu/PopularMenu";
import OrderOnline from "./order/OrderOnline";
import Testimonial from "./testimonial/Testimonial";
import HomeBanner from "./banner/HomeBanner";

const Home = () => {
  return (
    <div className="space-y-16">
      <Helmet>
        <title>Bistro Boss|Home</title>
      </Helmet>
      <HomeBanner />
      <OrderOnline />
      <PopularMenu />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
