const JobCard = ({ job }) => {
  console.log(job);

  const {
    postedName,
    JobTitle,
    JobPostingDate,
    ApplicationDeadline,
    Salaryrange,
    JobApplicantsNumber,
  } = job || {};

  console.log(job);
  return (
    <div>
      <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all">
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
            Dedline: {ApplicationDeadline}
          </p>

          <p className="mt-2 text-sm font-bold text-gray-600 ">
            Range: {Salaryrange}
          </p>
          <div className="flex justify-between items-center ">
            <p>Posted: {postedName}</p>
            <button className="bg-green-500 rounded-full px-2 text-sm font-bold font-lato py-1">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
