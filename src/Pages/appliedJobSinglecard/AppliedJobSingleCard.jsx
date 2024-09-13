
import { Helmet } from "react-helmet-async";

const AppliedJobSingleCard = ({ j }) => {
  // console.log(j)

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
      <Helmet>
        <title>CAREERNESTLE - Applied Job</title>
      </Helmet>
      <div data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1400" className="overflow-x-auto bg-[#ffffff] transition-transform transform hover:scale-105 rounded-lg overflow-hidden shadow-xl border ">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask rounded-xl w-40 h-32">
                      <img src={phot} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-black ">
                      Title: <span>{Title}</span>
                    </div>
                    <div className="text-xl font-bold font-lato opacity-50 text-black">
                      <span className="font-bold font-lato text-black">Description: </span>
                      <span className="text-[16px]">
                        <br />
                        {Description.length > 20
              ? `${Description.substring(0, 30)}...`
              : Description}
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-sm font-bold text-gray-500">
                Catagory: {Category}
                <br />
                <br />
                <br />
                <span className="">Salary: {Salary}</span>
              </td>

              <td className="text-sm font-bold text-gray-500">
                Deadline: {AppllyDeadline}
                <br />
                <br />
                <br />
                <span>PostingDate: {PostingDate}</span>
              </td>

              <td className="text-sm font-bold text-gray-500">
                Serial: {JobapplyNumber}
                <br />
                <br />
                <br />
                <span> PostedName: {postName}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobSingleCard;
