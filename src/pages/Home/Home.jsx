import Banner from "./banner/Banner";
import PopularMenu from "./menu/PopularMenu";
import OrderOnline from "./order/OrderOnline";

const Home = () => {
  return (
    <div>
      <Banner />
      <OrderOnline />
      <PopularMenu />
    </div>
  );
};

export default Home;
