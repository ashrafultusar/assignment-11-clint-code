import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import Authprovider from "./Authprovider/Authprovider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init();

const queryClint = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="overflow-x-hidden overflow-y-hidden">
      <Authprovider>
        <QueryClientProvider client={queryClint}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        <ToastContainer />
      </Authprovider>
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
