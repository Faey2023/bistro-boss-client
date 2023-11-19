import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

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
