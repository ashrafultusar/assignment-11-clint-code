import { useContext, useState } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [deadlineDate, setDeadlineDate] = useState(new Date());
const navigate=useNavigate()
  const { user } = useContext(AuthContext);
  // console.log(user);

  const handelAddJob = async (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.image.value;
    const JobTitle = form.job_title.value;
    const email = user.email;
    const postedName = form.name.value;
    const minsalary = form.minsalary.value;
    const maxsalary = form.maxsalary.value;
    const JobCategory = form.category.value;
    const JobDescription = form.description.value;
    const JobPostingDate = startDate;
    const ApplicationDeadline = deadlineDate;

    const allInfo = {
      photo,
      JobTitle,
      email,
      JobCategory,
      JobDescription,
      JobPostingDate,
      ApplicationDeadline,
      minsalary,
      maxsalary,
      postedName,
    };

    // console.log(JobCategory)
    console.log(allInfo);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/addjob`,
        allInfo
      );
      console.log(data);
      toast.success("job added successfully");
      navigate('/my-job')
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container mx-auto text-center">
      <Helmet>
        <title>CAREERNESTLE - Add Job</title>
      </Helmet>

      <div className="pt-32 mb-3">
        <h2 className="text-4xl font-lato font-bold">Post a Job</h2>
      </div>
      <div className="mb-24">
        <div className="flex justify-center items-center  ">
          <section className=" p-2 md:p-6 mx-auto bg-white border border-solid rounded-md shadow-md ">
            <form onSubmit={handelAddJob}>
              <div>
                <label className="text-gray-700 " htmlFor="url">
                  Job URL
                </label>
                <input
                  id="url"
                  name="image"
                  placeholder="input image url"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="job_title">
                  Job Title
                </label>
                <input
                  id="job_title"
                  placeholder="write job title"
                  name="job_title"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label className="text-gray-700 " htmlFor="emailAddress">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 " htmlFor="emailAddress">
                    Name
                  </label>
                  <input
                    id="email"
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-gray-700 " htmlFor="min_price">
                    Minimum Salary
                  </label>
                  <input
                    id="min_price"
                    name="minsalary"
                    type="number"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 " htmlFor="min_price">
                    Maximum Range
                  </label>
                  <input
                    id="min_price"
                    name="maxsalary"
                    type="number"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>

                <div className="flex flex-col gap-2 ">
                  <label className="text-gray-700 " htmlFor="category">
                    Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="border p-2 rounded-md"
                  >
                    <option value="On-Site"> On-Site</option>
                    <option value="Remote">Remote</option>
                    <option value="Part-Time"> Part-Time</option>
                    <option value="Hybrid"> Hybrid</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-700 " htmlFor="min_price">
                    Job Description
                  </label>
                  <input
                    id="description"
                    name="description"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-gray-700 " htmlFor="posting_date">
                    Posting Date
                  </label>
                  <div>
                    <DatePicker
                      className="border p-2 rounded-md"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-700  " htmlFor="application_date">
                    Application Deadline
                  </label>
                  <div>
                    <DatePicker
                      className="border p-2 rounded-md"
                      selected={deadlineDate}
                      onChange={(date) => setDeadlineDate(date)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-green-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Add Job
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
