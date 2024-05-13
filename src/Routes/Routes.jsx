import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import AllJobs from "../Pages/AllJobs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Blogs from "../Pages/Blogs";
import JobDetails from "../Home/JobDetails";
import Privateroute from "../PrivateRoute/Privateroute";
import AppliedJob from "../Pages/AppliedJob";
import AddJob from "../Pages/AddJob";
import MyJob from "../Pages/MyJob";
import UpdateJob from "../Pages/UpdateJob";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/jobs`)
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
        element: <AllJobs></AllJobs>,
        loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/jobs`)
      },
      {
        path: '/applied-jobs',
        element: <AppliedJob></AppliedJob>,
        loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/applyJob`)
      },
      {
        path: '/add-job',
        element:<AddJob></AddJob>
      },
      {
        path: '/my-job',
        element:<MyJob></MyJob>
    },
     
      {
        path: '/blogs',
        element:<Blogs></Blogs>
      },
      {
        path: '/job/:id',
        element: <Privateroute>
          <JobDetails></JobDetails>
        </Privateroute>,
        loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <UpdateJob></UpdateJob>,
        loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      }
      ]
    },
]);
  

export default router