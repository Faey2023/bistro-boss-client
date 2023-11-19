import Banner from "./banner/Banner";
import Featured from "./featured/Featured";
import PopularMenu from "./menu/PopularMenu";
import OrderOnline from "./order/OrderOnline";

const Home = () => {
  return (
    <div className="space-y-16">
      <Banner />
      <OrderOnline />
      <PopularMenu />
      <Featured />
    </div>
  );
};

export default Home;
