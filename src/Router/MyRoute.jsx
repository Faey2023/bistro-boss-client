import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layout/MainPage";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/Our menu/OurMenu";
import ErrorPage from "../error/ErrorPage";
import Order from "../pages/order/Order";
import Login from "../pages/account/Login";
import Registration from "../pages/account/Registration";
import Dashboard from "../pages/Dashboard/Dashboard";
import CartItems from "../pages/Dashboard/cart item/CartItems";
import Admin from "../pages/Dashboard/admin/Admin";
import Contact from "../pages/Contact/Contact";

const MyRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/menu", element: <OurMenu /> },
      { path: "/order", element: <Order /> },
      { path: "/order/:category", element: <Order /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/regi",
    element: <Registration />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      // { path: "dashboard", element: <Admin /> },
      { path: "cart", element: <CartItems /> },
    ],
  },
]);

export default MyRoute;
