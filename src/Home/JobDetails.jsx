import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import { toast } from "react-toastify";


const JobDetails = () => {
  const [startDate, setStartDate] = useState(new Date());

  const job = useLoaderData();
  const { user } = useContext(AuthContext);
  // console.log(user);
  const {
    _id,
    photo,
    ApplicationDeadline,
    JobApplicantsNumber,
    JobCategory,
    JobDescription,
    JobPostingDate,
    JobTitle,
    maxsalary,
    minsalary,
    postedName,
  } = job;

  const handelSubmitJob = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.name;
    const email = user?.email;
    const PostingDate = JobPostingDate;
    const cv = form.cv.value;
    const applyDate = startDate;

if( new Date(applyDate)>new Date(ApplicationDeadline)) return toast.error("apply date is over");
    const jobId = _id;
    const phot = photo;
    const AppllyDeadline = ApplicationDeadline;
    const JobapplyNumber = JobApplicantsNumber;
    const Category = JobCategory;
    const Description = JobDescription;
    const Title = JobTitle;
    const postName = postedName;
    const min = minsalary;
    const max = maxsalary;
console.log(PostingDate,ApplicationDeadline)



    const info = {
      jobId,
      name,
      email,
      cv,
      applyDate,
      phot,
      AppllyDeadline,
      JobapplyNumber,
      Category,
      Description,
      PostingDate,
      Title,
      postName,
      min,
      max,
    };

    console.log(info);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/apply`,
        info
      );
      console.log(data);
      if (data?.insertedId) {
        toast.success("successfully apply");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center border border-solid p-6 rounded-xl shadow-xl  ">
        <div className="w-full lg:w-1/2 border border-solid p-6 rounded-xl ">
          <div className="lg:max-w-lg">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                  {JobTitle}
                </h1>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {JobDescription}
                </p>
              </div>
              <div className="bg-green-200 p-1 rounded-full font-bold font-lato">
                Applicant Number: {JobApplicantsNumber}
              </div>
            </div>

            <div className="divider"></div>
            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">PostingDate: {new Date(JobPostingDate).toLocaleDateString()}</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Deadline: {new Date(ApplicationDeadline).toLocaleDateString() }</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">
                  Salaryrange: ${minsalary} - ${maxsalary}
                </span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Job Category: {JobCategory}</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Posted Name: {postedName}</span>
              </div>

              <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Apply
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Job Title: {JobTitle}</h3>
                  <form onSubmit={handelSubmitJob}>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                      <input
                        type="text"
                        className="grow"
                        name="name"
                        defaultValue={user.displayName}
                      />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                      <input
                        type="text"
                        name="email"
                        className="grow"
                        defaultValue={user.email}
                      />
                    </label>
                    <label className="input input-bordered flex mt-4 items-center gap-2">
                      <input
                        type="text"
                        name="cv"
                        className=" grow"
                        placeholder="Resume link"
                      />
                    </label>
                    <div className=" my-4">
                      <p className="mb-1">Today date</p>
                      <span className="my-4 text-center">
                        <ReactDatePicker
                          className="border p-2 rounded-md"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </span>
                    </div>
                    <div className="ml-40 mt-4 ">
                      <div method="dialog">
                        <button
                          className="btn bg-green-500"
                          onClick={() => {
                            document.getElementById("my_modal_1").close();
                          }}
                        >
                          Submit
                        </button>
                        <Link to={"/all-job"}>
                          <button className="btn px-4 py-2 ml-4 bg-red-500">
                            Cancel
                          </button>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={photo}
            alt="glasses photo"
          />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
