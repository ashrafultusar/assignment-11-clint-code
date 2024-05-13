import { useLoaderData } from "react-router-dom";
import AppliedJobSingleCard from "./appliedJobSinglecard/AppliedJobSingleCard";
import { AuthContext } from "../Authprovider/Authprovider";
import { useContext, useState } from "react";

const AppliedJob = () => {
  const jobs = useLoaderData();
  console.log(jobs)
  const [filter, setFilter] = useState([]);
  const { user } = useContext(AuthContext) || {};

  const handelFilter = (e) => {
    if (e === "all") {
      setFilter(jobs);
    } else if (e === "Part-Time") {
      const yes = jobs.filter((user) => user.Category === "Part-Time");
      setFilter(yes);
    } else if (e === "On-Site Job") {
      const no = jobs.filter((user) => user.Category === "On-Site Job");
      setFilter(no);
    }
     else if (e === "Hybrid") {
      const Hybrid = jobs.filter((user) => user.Category === "Hybrid");
      setFilter(Hybrid);
    }
     else if (e === "Remote Job") {
      const RemoteJob = jobs.filter((user) => user.Category === "Remote Job");
      setFilter(RemoteJob);
    }

  };
  return (
    <div className="container mx-auto my-16">
      <div>
        <div className="mb-24 mt-12 text-center">
          <details className="dropdown">
            <summary className="m-1 bg-green-500 btn text-xl font-bold">
            Job Category
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-42  bg-green-500">
              <li
                className="text-[18px]  font-semibold"
                onClick={() => handelFilter("all")}
              >
                <a className="pl-16">All</a>
              </li>
              <li
                className="text-[18px] font-semibold"
                onClick={() => handelFilter("Part-Time")}
              >
                <a className="pl-10">Part-Time</a>
              </li>
              <li
                className="text-[18px] font-semibold"
                onClick={() => handelFilter("On-Site Job")}
              >
                <a className="pl-8">On-Site Job</a>
              </li>
              <li
                className="text-[18px] font-semibold"
                onClick={() => handelFilter("Hybrid")}
              >
                <a className="pl-12">Hybrid</a>
              </li>
              <li
                className="text-[18px] font-semibold"
                onClick={() => handelFilter("Remote Job")}
              >
                <a className="pl-8">Remote Job</a>
              </li>
            </ul>
          </details>
        </div>
      </div>

      <div className="space-y-6">
        {filter.map((j) => (
          <AppliedJobSingleCard key={j._id} j={j}></AppliedJobSingleCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
