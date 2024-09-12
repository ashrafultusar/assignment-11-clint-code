import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/Authprovider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  return (
    <div className="">
      <div className="navbar fixed z-10 rounded-lg text-white px-32 bg-[#1f2937]">
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
              className="menu menu-sm z-10 dropdown-content mt-3 p-2 shadow text-white bg-[#02251e]  font-lato font-bold rounded-box w-44"
            >
              <li>
                <NavLink to={"/"} activeClassName="active-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/all-job"}>All Jobs</NavLink>
              </li>

              {user && (
                <li>
                  <NavLink to={"/applied-jobs"}>Applied Jobs</NavLink>
                </li>
              )}

              {user && (
                <li>
                  <NavLink to={"/add-job"}>Add Job</NavLink>
                </li>
              )}
              {user && (
                <li>
                  <NavLink to={"/my-job"}>My Jobs</NavLink>
                </li>
              )}

              <li>
                <NavLink to={"/blogs"}>Blogs</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <a className="btn uppercase btn-ghost text-xl   text-white">
              CAREERNESTLE
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu text-white font-lato font-bold menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/all-job"}>All Jobs</NavLink>
            </li>

            {user && (
              <li>
                <NavLink to={"/applied-jobs"}>Applied Jobs</NavLink>
              </li>
            )}

            {user && (
              <li>
                <NavLink to={"/add-job"}>Add Job</NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink to={"/my-job"}>My Jobs</NavLink>
              </li>
            )}

            <li>
              <NavLink to={"/blogs"}>Blogs</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="flex justify-center items-center gap-1">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
                data-tip={user.displayName}
              >
                <div className="w-10 rounded-full ">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL || (
                        <img
                          alt="Tailwind CSS Navbar component"
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        />
                      )
                    }
                  />
                </div>
              </div>
              <button
                onClick={logOut}
                className="text-white font-lato font-semibold px-3 bg-green-500 py-2 rounded-lg"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="text-white font-lato font-semibold px-3 bg-green-500 py-2 rounded-lg">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
