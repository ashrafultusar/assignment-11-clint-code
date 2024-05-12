import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";
import { toast } from "react-toastify";

const Privateroute = ({ children }) => {

    const { user,loading } = useContext(AuthContext);
    const location = useLocation();
//   console.log(location)

    if (loading) {
      return <div className="text-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  }
  
  
    if (!user) {
        toast.error('You have to log in first to visited this page')
      return (
          <Navigate to={"/login"} state={location?.pathname || "/"}></Navigate>
          
      );
    }
  


    return <div>{children}</div>;
};

export default Privateroute;