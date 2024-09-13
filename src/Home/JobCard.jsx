import { Link } from "react-router-dom";
import { FaHeart, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";

import { MdEmail } from "react-icons/md";

const JobCard = ({ job }) => {
  // console.log(job);

  const {
    _id,
    photo,
    postedName,
    JobCategory,
    JobDescription,
    JobTitle,
    email,
    JobPostingDate,
    ApplicationDeadline,
    min = parseInt(job.minsalary),
    max = parseInt(job.maxsalary),
    JobApplicantsNumber,
  } = job || {};

  console.log(job);
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
    >
  
      <div className="relative  transition-transform transform hover:scale-105 max-w-sm rounded-lg overflow-hidden shadow-xl border bg-white group">
        <div className="relative">
          <img className="w-full h-48 object-cover" src={photo} alt="" />
          <div className="absolute bottom-2 left-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded-full uppercase">
            Featured
          </div>
          <div className="absolute bottom-2 right-2 flex space-x-2">
            <button className="bg-white rounded-full p-2 text-blue-500 shadow-md hover:bg-gray-100">
            <FaHeart />
            </button>
            <button className="bg-white rounded-full p-2 text-red-500 shadow-md hover:bg-gray-100">
            <FaTimes />
            </button>
          </div>

          <Link to={`/job/${_id}`}>
            <button className="absolute bottom-16 right-32 bg-red-500 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100  hover:opacity-35  transition-opacity duration-300">
              Read More
            </button>
          </Link>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold">{JobTitle}</h2>
          <p className="text-gray-500">
            {JobDescription.length > 30
              ? `${JobDescription.substring(0, 30)}...`
              : JobDescription}
          </p>
          <div className="text-gray-600 text-sm mt-2">
            <p className="flex items-center">
              <div className="flex items-center space-x-2 mt-2 text-gray-600">
                <FaMapMarkerAlt />
                <p className="text-sm">43 Putnam Ave</p>
              </div>
            </p>
            <p>
              <div className="flex items-center space-x-2 mt-1 text-gray-600">
                <MdEmail />
                <p className="text-sm">{email ? email : "Unavailable"}</p>
              </div>
            </p>
          </div>
        </div>
        <div className="p-4 border-t">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <TbCategoryFilled className="text-blue-500" />
              {JobCategory}
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="text-green-500 font-bold text-sm flex items-center gap-1">
              <SlCalender />
              {new Date(ApplicationDeadline).toLocaleDateString()}
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex items-center">
              <span className="text-gray-500 ml-3"><p className="text-sm font-bold text-gray-500">
              ${min}-${max}
            </p></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
