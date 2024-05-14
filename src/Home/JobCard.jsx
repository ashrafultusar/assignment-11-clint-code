import { Link } from "react-router-dom";


const JobCard = ({ job }) => {
  // console.log(job);

  const {
    _id,
    photo,
    postedName,JobCategory,
    JobDescription,
    JobTitle,
    JobPostingDate,
    ApplicationDeadline,
    min = parseInt(job.minsalary),
    max = parseInt(job.maxsalary),
    JobApplicantsNumber,
  } = job || {};

  // console.log(job);
  return (
    <div  >
      <div className="w-full  max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img src={photo} alt="img" />

        <div className="px-6 py-4">
          <div className="flex items-center justify-around ">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {JobTitle}
          </h1>
          <p className="bg-green-300 rounded-full text-center p-1 text-sm font-semibold">Apply: { JobApplicantsNumber}</p>
        </div>

          <p className="py-2 text-gray-700 dark:text-gray-400">
            {JobDescription}
          </p>

          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
         

            <h1 className="px-2 font-bold">Category: { JobCategory}</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
         

            <h1 className="px-2 font-bold">Posted: { postedName}</h1>
          </div>
            
   <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
           

            <h1 className="px-2 font-bold">Salary: ${min} - ${ max}</h1>
          </div>

          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            

            <h1 className="px-2 text-sm">Deadline: { new Date(ApplicationDeadline).toLocaleDateString()}</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            

            <h1 className="px-2 text-sm">Posting Date: {  new Date(JobPostingDate).toLocaleDateString()}</h1>
          </div>
          <Link to={`/job/${_id}`}>
            <button className="bg-green-500 rounded-full px-2 text-sm font-bold font-lato py-1 mt-4 w-full">View Details</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
