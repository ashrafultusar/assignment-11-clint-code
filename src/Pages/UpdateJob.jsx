import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

const UpdateJob = () => {
  const navigate = useNavigate();
  const job = useLoaderData();

  const [startDate, setStartDate] = useState(new Date());
  const [deadlineDate, setDeadlineDate] = useState(new Date());

  console.log(job);
  const {
    title,
    email,
    description,
    maxsalary,
    minsalary,
    name,
  } = job;

    
    
    
    
  return (
    <div>
      <h1 className="text-xl md:text-4xl text-center">
        Update Your Posted Job
      </h1>

      <div>
        <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
          <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
            <form>
              <div>
                <label className="text-gray-700 " htmlFor="url">
                  Job URL
                </label>
                <input
                  id="url"
                  name="image"
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
                  name="job_title"
                  type="text"
                  defaultValue={title}
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
                    defaultValue={email}
                    disabled
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 " htmlFor="emailAddress">
                    Name
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="name"
                    defaultValue={name}
                    disabled
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
                    defaultValue={minsalary}
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
                    defaultValue={maxsalary}
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
                    <option value="Web Development"> On-Site</option>
                    <option value="Graphics Design">Remote</option>
                    <option value="Digital Marketing"> Part-Time</option>
                    <option value="Digital Marketing"> Hybrid</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-700 " htmlFor="min_price">
                    Job Description
                  </label>
                  <input
                    id="min_price"
                    defaultValue={description}
                    name="description"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-gray-700 " htmlFor="min_price">
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
                  <label className="text-gray-700  " htmlFor="min_price">
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

export default UpdateJob;
