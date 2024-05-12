import { useContext, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";

const AppliedJobSingleCard = ({ j }) => {
    

    console.log(j)
    
   

  const {
    phot,
    postName,
    Title,
    Description,
    PostingDate,
    Category,
    AppllyDeadline,
    JobapplyNumber,
    Salary,
  } = j;

    // filter section
  
    
  return (
      <div className="container mx-auto">
          

      <div className="overflow-x-auto bg-[#fff2f2] rounded-xl ">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-40 h-32">
                      <img src={phot} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-black ">Title: <span >{Title}</span></div>
                    <div className="text-xl font-bold font-lato opacity-50 text-black">
                      <span className="font-bold font-lato">Description: </span>
                      <span className="text-[16px]">
                        <br />
                        {Description}
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-black">
                Catagory: {Category}
                <br />
                <br />
                <br />
                <span className="">Salary: {Salary}</span>
              </td>

                          <td className="text-black">Deadline: {AppllyDeadline}
                          <br />
                          <br />
                          <br />
                          <span>PostingDate: { PostingDate}</span></td>
             
                          <td className="text-black">Serial: {JobapplyNumber}
                              <br />
                              <br />
                              <br />
                              <span> PostedName: { postName}</span>
                              </td>
            
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobSingleCard;
