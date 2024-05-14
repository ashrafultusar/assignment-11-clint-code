import { useLoaderData } from "react-router-dom";
import JobCard from "../Home/JobCard";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useState } from "react";

const AllJobs = () => {
  const jobs = useLoaderData();
  console.log(jobs);
//   const [search, setSearch] = useState("");
//   const [job, setJob] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       const { data } = await axios(
//         `${import.meta.env.VITE_API_URL}/jobs?&search=${search}`
//       )setJob(data)
//     }
//     getData();
//   });

//   const handelSearch = (e) => {
//     e.preventDefault();
//     const text = e.target.search.value;
//     setSearch(text);
//   };
//   console.log(search);

  return (
    <div className="my-14 container mx-auto">
      {/* <form onSubmit={handelSearch} className="">
        <input
          name="search"
          type="text"
          placeholder="search.."
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn bg-green-500">Search</button>
      </form> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
