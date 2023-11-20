import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layout/MainPage";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/Our menu/OurMenu";
import ErrorPage from "../error/ErrorPage";
import Order from "../pages/order/Order";

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
]);

export default MyRoute;
