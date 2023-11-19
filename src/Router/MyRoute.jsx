import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layout/MainPage";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/Our menu/OurMenu";

const MyRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <OurMenu /> },
    ],
  },
]);

export default MyRoute;
