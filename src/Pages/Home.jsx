import Carousel from "../Carosol/Carousel";
import JobSearch from "../ExtraSection/JobSearch";
import PopularJobCatagories from "../ExtraSection/PopularJobCatagories";
import TabCatagoris from "../Home/TabCatagoris";



const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <TabCatagoris></TabCatagoris>
        <PopularJobCatagories></PopularJobCatagories>
        <JobSearch></JobSearch>
      
        </div>
    );
};

export default Home;