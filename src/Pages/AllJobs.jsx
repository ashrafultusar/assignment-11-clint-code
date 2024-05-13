import { useLoaderData } from "react-router-dom";
import JobCard from "../Home/JobCard";
// import { useState } from "react";

const AllJobs = () => {

    const jobs = useLoaderData();
    console.log(jobs)

// const [search,setSearch]=useState('')

//     const handelsearch = e => {
//         e.preventDefault()
//     }
    
    

    return (
        <div className="my-14 container mx-auto">

            <div>
                <h1 className="text-4xl">search :</h1>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {
              jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
              
            }
            </div>
        </div>
    );
};

export default AllJobs;