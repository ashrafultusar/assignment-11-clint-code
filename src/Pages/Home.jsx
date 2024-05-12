import { useLoaderData } from "react-router-dom";
import Carousel from "../Carosol/Carousel";
import JobSearch from "../ExtraSection/JobSearch";
import PopularJobCatagories from "../ExtraSection/PopularJobCatagories";
import TabCatagoris from "../Home/TabCatagoris";

const Home = () => {
  const jobs = useLoaderData();

  return (
    <div>
      <Carousel></Carousel>
      <TabCatagoris jobs={jobs}></TabCatagoris>
      <PopularJobCatagories></PopularJobCatagories>
      <JobSearch></JobSearch>
    </div>
  );
};

export default Home;
