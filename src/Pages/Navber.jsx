
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="">
      <div className="navbar fixed z-10 text-white px-4 md:px-32 bg-[#1f2937]">
        {/* Navbar for small devices */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow text-white bg-[#1f2937] font-lato font-bold rounded-box w-44"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/all-job"}>All Jobs</NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink to={"/applied-jobs"}>Applied Jobs</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/add-job"}>Add Job</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/my-job"}>My Jobs</NavLink>
                  </li>
                </>
              )}
              <li>
                <NavLink to={"/blogs"}>Blogs</NavLink>
              </li>

              {/* Show login/user in dropdown for small devices */}
              {user ? (
                <>
                  <li>
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img src={user?.photoURL} alt="User Avatar" />
                      </div>
                    </div>
                  </li>

                  <li>
                    <button onClick={logOut} className="text-white bg-green-500 text-center py-2 rounded-lg">
                      Log Out 
                    </button>
                  </li>
                  
                </>
              ) : (
                <li>
                  <Link to={"/login"}>
                    <button className="text-white bg-green-500 py-2 rounded-lg">
                      Login
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500" className="">
            <a className="btn btn-ghost text-xl uppercase text-white">CAREERNESTLE</a>
          </div>
        </div>

        {/* Navbar for larger devices */}
        <div data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500" className="navbar-center hidden lg:flex">
       
          <ul className="menu text-white font-lato font-bold menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/all-job"}>All Jobs</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to={"/applied-jobs"}>Applied Jobs</NavLink>
                </li>
                <li>
                  <NavLink to={"/add-job"}>Add Job</NavLink>
                </li>
                <li>
                  <NavLink to={"/my-job"}>My Jobs</NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink to={"/blogs"}>Blogs</NavLink>
            </li>
          </ul>
        </div>

        {/* Navbar end (Login/User section) */}
        <div data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500" className="navbar-end hidden lg:flex">
          {user ? (
            <div className="flex items-center gap-2">
              <div className="tooltip tooltip-left" data-tip={user.displayName}>
                <div className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt="User Avatar" />
                  </div>
                </div>
              </div>
              <button onClick={logOut} className="text-white bg-green-500 py-2 px-3 rounded-lg">
                Log Out
              </button>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="text-white bg-green-500 py-2 px-3 rounded-lg">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
