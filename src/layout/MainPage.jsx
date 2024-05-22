import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <div className="space-y-16">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
