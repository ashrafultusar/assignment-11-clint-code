import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const JobCard = ({ job }) => {
  // console.log(job);

  const {_id,
    postedName,
    JobTitle,
    JobPostingDate,
    ApplicationDeadline,
    min = parseInt(job.minsalary),
    max = parseInt(job.maxsalary),
    JobApplicantsNumber,
  } = job || {};

  // console.log(job);
  return (
    <div className="my-6 ">
      
      <div className="w-full  bg-[#F4E1D9] max-w-sm px-4 py-3  rounded-md shadow-md hover:scale-[1.05] transition-all border border-b-orange-500">
        <div className="flex items-center justify-between">
          <span className="text-[16px] font-bold  text-gray-800 ">
            Deadline: {ApplicationDeadline}
          </span>
          <span className="px-3 py-1 text-[10px] text-blue-800 uppercase bg-green-200 rounded-full ">
            Serial: {JobApplicantsNumber}
          </span>
        </div>

        <div>
          <h1 className="mt-2 text-lg font-semibold text-gray-800 ">Title: {JobTitle}
          </h1>

          <p className="mt-2 text-sm text-gray-600 ">
            Post Date: {JobPostingDate}
          </p>

          <p className="mt-2 text-sm font-bold text-gray-600 ">
            Range: ${min } - ${max}
          </p>
          <div className="flex text-black justify-between items-center ">
            <p>Posted: {postedName}</p>
            <Link to={`/job/${_id}`}>
            <button className="bg-green-500 rounded-full px-2 text-sm font-bold font-lato py-1">View Details</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
