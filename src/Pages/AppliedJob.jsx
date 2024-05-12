import { useLoaderData } from "react-router-dom";
import AppliedJobSingleCard from "./appliedJobSinglecard/AppliedJobSingleCard";

const AppliedJob = () => {
    const jobs = useLoaderData();
    const handelFilter = (e) => {
        if (e === "all") {
          setFilter(j);
        } else if (e === "Part-Time") {
          const yes = j.filter((user) => user.Category === "Part-Time");
          setFilter(yes);
        } else if (e === "no") {
          const no = j.filter((user) => user.Category === "No");
          setFilter(no);
        }
      };
    return (
        <div className="container mx-auto">
            
            <div>
            <div className="mb-24 mt-12 text-center">
        <details className="dropdown">
          <summary className="m-1 bg-green-500 btn text-xl font-bold">
            Customization
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-44  bg-green-500">
            <li
              className="text-[18px]  font-semibold"
              onClick={() => handelFilter("all")}
            >
              <a className="pl-14">All</a>
            </li>
            <li
              className="text-[18px] font-semibold"
              onClick={() => handelFilter("Part-Time")}
            >
              <a className="pl-14">Part-Time</a>
            </li>
            <li
              className="text-[18px] font-semibold"
              onClick={() => handelFilter("no")}
            >
              <a className="pl-14">No</a>
            </li>
          </ul>
        </details>
      </div>
</div>


            <div>
            {
              jobs.map(j => <AppliedJobSingleCard key={j._id} j={j}></AppliedJobSingleCard>
               
                
                )
     }
       </div>
          
    </div>
  );
};

export default AppliedJob;
