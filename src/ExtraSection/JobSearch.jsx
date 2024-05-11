import { MdContentPasteSearch } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";
import { IoMdMailOpen } from "react-icons/io";


const JobSearch = () => {
  return (
    <div className="container mx-auto my-10">
      <div className=" flex  gap-10">
        <div className="rounded-xl">
          <img src="https://i.ibb.co/RhgQRnW/howre.png" alt="" />
        </div>

        <div>
          <p>How to job search Following Few steps</p>
                  <h1 className="text-4xl font-lato font-bold">How to Job Search?</h1>
                  
                  
          <div className="divider"></div>
          <div className="flex justify-between items-center gap-6 mb-4">
            <p>1. Enter your desired job title and where you want to work</p>
            <p className="text-4xl bg-[#eaf9ef] p-3 rounded-full text-green-500 ">
              <MdContentPasteSearch />
            </p>
                  </div>
                  
                  <div className="divider"></div>


                  <div className="flex justify-between items-center gap-6 mb-4">
            <p>2. Save time by searching your CV instead and finding</p>
            <p className="text-4xl bg-[#23b763] p-3 rounded-full text-white ">
            <SiReaddotcv />

            </p>
                  </div>
                  
                  <div className="divider"></div>


                  <div className="flex justify-between items-center gap-6 mb-4">
            <p>3. Just having a browse? Hit search and view all job available</p>
            <p className="text-4xl bg-[#eaf9ef] p-3 rounded-full text-green-500 ">
            <IoMdMailOpen />

            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JobSearch;
