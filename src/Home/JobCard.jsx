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
    <div>
      <Link to={`/job/${_id}`} data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000" className="max-w-sm h-96 rounded-xl overflow-hidden shadow-lg bg-white">
        {/* Image */}
        <div className="relative">
          <img
            className="w-full h-50 object-cover"
            src={photo} // Replace with your image URL
            alt="photo"
          />
          <div className="absolute bottom-2 left-2 bg-yellow-400 text-black text-xs font-bold rounded-full px-2 py-1">
            FEATURED
          </div>
          {/* Heart and Close icons */}
          <div className="absolute bottom-2 right-2 flex space-x-2">
            <button className="p-1 bg-white rounded-full shadow-md text-blue-500 hover:text-blue-700">
              <FaHeart />
            </button>
            <button className="p-1 bg-white rounded-full shadow-md text-red-500 hover:text-red-700">
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div className="px-4 py-3">
          <h3 className="font-bold text-lg">{JobTitle}</h3>
          {/* <p className="text-sm text-gray-500">{ JobDescription}</p> */}
          <p className="text-sm text-gray-500">
            {JobDescription.length > 30
              ? `${JobDescription.substring(0, 30)}...`
              : JobDescription}
          </p>

          {/* Address and Phone */}
          <div className="flex items-center space-x-2 mt-2 text-gray-600">
            <FaMapMarkerAlt />
            <p className="text-sm">43 Putnam Ave</p>
          </div>
          <div className="flex items-center space-x-2 mt-1 text-gray-600">
            <MdEmail />
            <p className="text-sm">{email ? `${email}` : "Unavailable"}</p>
          </div>

          {/* Rating, Status, and Price */}
          <div className="flex justify-between items-center mt-4 border-t pt-2">
            <div className="flex items-center gap-1">
              <TbCategoryFilled tar className="text-blue-500" />
              {JobCategory}
            </div>
            <div className="divider divider-horizontal"></div>
            <p className="text-green-500 font-bold text-sm flex items-center gap-1">
              <SlCalender />
              {new Date(ApplicationDeadline).toLocaleDateString()}
            </p>
            <div className="divider divider-horizontal"></div>
            <p className="text-sm font-bold text-gray-500">
              ${min}-${max}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default JobCard;
