import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyRoute from "./Router/MyRoute.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-7xl mx-auto">
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <HelmetProvider>
            <RouterProvider router={MyRoute} />
          </HelmetProvider>
        </QueryClientProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>
);
