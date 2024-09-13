import { Outlet, useLocation } from "react-router-dom";
import Navber from "../Pages/Navber";
import Footer from "../Pages/Footer";
import Home from "../Pages/Home";

const Main = () => {

  const location = useLocation();
  
  // Define the routes where you don't want to show the navbar and footer
  const hideNavbarFooter = ["/login", "/register"].includes(location.pathname);

  return (
    //   <div >
    //       <Navber></Navber>
          
    //       <div className="min-h-[calc(100vh-218px)]">
    //       <Outlet></Outlet>
    //   </div>
    //   <Footer></Footer>
    // </div>
    <div className="">
    {!hideNavbarFooter && <Navber />}
    
    <div className="min-h-screen">
      <Outlet />
    </div>
    
    {!hideNavbarFooter && <Footer />}
  </div>
  );
};

export default Main;
