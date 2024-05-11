import Carousel from "../Carosol/Carousel";
import JobSearch from "../ExtraSection/JobSearch";
import PopularJobCatagories from "../ExtraSection/PopularJobCatagories";


const Home = () => {
    return (
        <div>
        <Carousel></Carousel>
        <PopularJobCatagories></PopularJobCatagories>
        <JobSearch></JobSearch>
        </div>
    );
};

export default Home;