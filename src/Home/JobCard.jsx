import { Link } from "react-router-dom";

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
      <div className="w-full bg-[#e2e8ff] bg-amber-50  max-w-sm px-4 py-3  rounded-md shadow-md hover:scale-[1.05] transition-all">
        <div className="flex items-center justify-between">
          <span className="text-xs font-light text-gray-800 ">
            Deadline: {ApplicationDeadline}
          </span>
          <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full ">
            Serial: {JobApplicantsNumber}
          </span>
        </div>

        <div>
          <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
            {JobTitle}
          </h1>

          <p className="mt-2 text-sm text-gray-600 ">
            Post Date: {JobPostingDate}
          </p>

          <p className="mt-2 text-sm font-bold text-gray-600 ">
            Range: ${min } - ${max}
          </p>
          <div className="flex justify-between items-center ">
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
