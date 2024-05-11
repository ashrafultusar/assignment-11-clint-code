import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import AllJobs from "../Pages/AllJobs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Blogs from "../Pages/Blogs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/all-job',
        element:<AllJobs></AllJobs>
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs>
      }
      ]
    },
]);
  

export default router