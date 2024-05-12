import { useLoaderData } from "react-router-dom";
import AppliedJobSingleCard from "./appliedJobSinglecard/AppliedJobSingleCard";

const AppliedJob = () => {
  const jobs = useLoaderData();
    console.log(jobs);
    const { phot,Title} = jobs;

  return (
    <div className='space-y-6'>
      
          {
              jobs.map(j => <AppliedJobSingleCard key={j._id} j={j}></AppliedJobSingleCard>
               
                
                )
     }
          
    </div>
  );
};

export default AppliedJob;
