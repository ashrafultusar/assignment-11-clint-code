import { Outlet } from "react-router-dom";
import Navber from "../Pages/Navber";
import Footer from "../Pages/Footer";
import Home from "../Pages/Home";

const Main = () => {
  return (
      <div className="container mx-auto">
          <Navber></Navber>
          <Home></Home>
          <div className="min-h-[calc(100vh-268px)]">
          <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
