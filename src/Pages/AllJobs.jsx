import { useLoaderData } from "react-router-dom";
import JobCard from "../Home/JobCard";

const AllJobs = () => {

    const jobs = useLoaderData();
    console.log(jobs)

    return (
        <div className="my-14 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {
              jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
              
            }
            </div>
        </div>
    );
};

export default AllJobs;