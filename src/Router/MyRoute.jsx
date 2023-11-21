import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layout/MainPage";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/Our menu/OurMenu";
import ErrorPage from "../error/ErrorPage";
import Order from "../pages/order/Order";
import Login from "../pages/account/Login";
import Registration from "../pages/account/Registration";

const MyRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <OurMenu /> },
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
]);

export default MyRoute;
