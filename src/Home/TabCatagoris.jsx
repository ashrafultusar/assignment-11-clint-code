import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios from "axios";

const TabCatagoris = ( ) => {


  const [jobs, setJobs] = useState([])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
      setJobs(data)
    }
    getData()
  },[])
  // console.log(jobs)

  return (
    <div>
      <Tabs>
        <div className="container mx-auto my-12">
          <h1 className="text-4xl font-lato font-bold text-center pb-1">
            Browse Job by category
          </h1>
          <p className="text-center font-lato font-bold mb-6">
            Four Category available for the time being.Browse them by clicking
            on the tabs bellow
          </p>
          <div className="flex justify-center items-center">
            <TabList>
              <Tab>On-Site Job</Tab>
              <Tab>Remote Job</Tab>
              <Tab>Hybrid</Tab>
              <Tab>Part Time</Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {
              jobs.filter(j => j.JobCategory === 'On-Site').map(job => <JobCard key={job._id} job={job}></JobCard>)
              
            }
           </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {
              jobs.filter(j=>j.JobCategory === 'Remote').map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
         </div>
            
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {
              jobs.filter(j=>j.JobCategory === 'Hybrid').map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
         </div>
            
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {
              jobs.filter(j=>j.JobCategory === 'Part-Time').map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
         </div>
            
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default TabCatagoris;
