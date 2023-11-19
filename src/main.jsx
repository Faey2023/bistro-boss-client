import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyRoute from "./Router/MyRoute.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-7xl mx-auto">
      <HelmetProvider>
        <RouterProvider router={MyRoute} />
      </HelmetProvider>
    </div>
  </React.StrictMode>
);
