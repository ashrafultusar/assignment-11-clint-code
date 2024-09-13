import { useLoaderData } from "react-router-dom";
import JobCard from "../Home/JobCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useState } from "react";

const AllJobs = () => {
  // const jobs = useLoaderData();
  // console.log(jobs);

  // const [itemPage, setItempage] = useState(3);
  // const [count, setCount] = useState(0);
  // const [jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
  //     setJobs(data);
  //     setCount(data.length)
  //   };
  //   getData();
  // }, []);
  // console.log(count)
  // console.log(jobs)

  // const pages = [...Array(count/itemPage).keys()].map((e) => e + 1);
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/jobs?search=${search}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [search]);

  // console.log(jobs);

  const handelSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    // console.log(searchText)
    setSearch(searchText);
  };

  const handelReset = () => {
    setSearch('')
  }

  return (
    <div className="pt-32 mb-24 container mx-auto">
      <Helmet>
        <title>CAREERNESTLE - All Jobs</title>
      </Helmet>

      

      <div data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500" className=" text-center">
        <form onSubmit={handelSearch}>
          <input
            name="search"
            type="text"
            placeholder="search.."
            className="input input-bordered w-full max-w-xs"
          />
          <input type="submit" value="Search" className="bg-green-500 btn" />
          <button onClick={handelReset} className="btn bg-green-500 lg:ml-24">Reset</button>
        </form>
      </div>
      <div className="divider mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>

      {/* paignation */}

      {/* <div className="my-12 text-center">
        <button className="btn mr-3 bg-green-500">Previous</button>

        {pages.map((btnN) => (
          <button key={btnN} className="btn bg-slate-400 mr-3">
            {btnN}
          </button>
        ))}

        <button className="bg-green-500 btn">Next</button>
      </div> */}
    </div>
  );
};

export default AllJobs;
