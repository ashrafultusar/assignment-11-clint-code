import { useContext, useState } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  // const [deadlineDate, setDeadlineDate] = useState(new Date());

  const { user } = useContext(AuthContext);
  // console.log(user);


  const handelAddJob = async e => {
    e.preventDefault()
    const form = e.target
    const image= form.image.value
    const title= form.job_title.value
    const email= form.email.value
    // const salry= parseFloat(form.salary.value)
    const category= form.category.value
    const description= form.description.value
    const postingDate= form.startDate.value
    // const deadline= form.deadlineDate.value

    const allInfo = {
      image,title,email,category,description,postingDate,deadline
    }
    
    console.log(allInfo)

}


  return (
    <div className="container mx-auto text-center mt-7">
      <div>
        <h2 className="text-4xl font-lato font-bold">Post a Job</h2>
      </div>
      <div>
        <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
          <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
            <form onSubmit={handelAddJob}>
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

              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label className="text-gray-700 " htmlFor="job_title">
                    Job Title
                  </label>
                  <input
                    id="job_title"
                    name="job_title"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-gray-700 " htmlFor="emailAddress">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    defaultValue={user.email}
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
                    defaultValue={user.displayName}
                    disabled
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>

               
                <div>
                  <label className="text-gray-700 " htmlFor="min_price">
                   Salary Range
                  </label>
                  <input
                    id="min_price"
                    name="description"
                    type="text"
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
                  {/* <div>
                    <DatePicker
                      className="border p-2 rounded-md"
                      selected={startDate}
                      onChange={(date) => setDeadlineDate(date)}
                    />
                  </div> */}
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-green-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Add Job
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>

      {/* <div className="m-24 bg-base-200">
          <form >
            <div className="p-10">
              <div className="form-control md:w-full">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="photo"
                  placeholder="Image"
                  name="photo"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="md:flex gap-6">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Item Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Item Name"
                    name="itemName"
                    className="input input-bordered  w-full"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-6">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Subcategory Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Subcategory Name"
                    name="subcategoryName"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Short Description"
                    name="shortDescription"
                    className="input input-bordered  w-full"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-6">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="price"
                    name="price"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    placeholder="rating"
                    name="rating"
                    className="input input-bordered  w-full"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-6">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">
                      Customization (example- Yes, No)
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="customization "
                    name="customization"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Processing Time</span>
                  </label>
                  <input
                    type="text"
                    name="processingTime"
                    placeholder="processing-time"
                    className="input input-bordered  w-full"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-6">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">
                      StockStatus ( example- In stock, Made to Order )
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="stockStatus"
                    name="stockStatus"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="input input-bordered  w-full"
                    required
                  />
                </div>
              </div>

              <input
                type="submit"
                value="Add value"
                className="btn w-full bg-green-500 mt-4"
              />
            </div>
          </form>
        </div> */}
    </div>
  );
};

export default AddJob;
