// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slider from "./Slider";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
          >
              {/* slider 1 */}
        <SwiperSlide>
          <div
            className="w-full bg-center bg-cover h-[38rem]"
            style={{
              backgroundImage: `url("https://i.ibb.co/YWqNNkw/slider1.webp")`,
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                  Build your new <span className="text-blue-400">Saas</span>{" "}
                  Project
                </h1>
                <br />

                <Link to={"/all-job"}>
                  <button className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                    Applied Job
                  </button>
                </Link>
              </div>
            </div>
          </div>
              </SwiperSlide>
              
              {/* slider 2 */}
        <SwiperSlide>
          <div
            className="w-full bg-center bg-cover h-[38rem]"
            style={{
              backgroundImage: `url("https://i.ibb.co/Hgqwx00/Job-Portal-Website-Development-Signity-Solutions.webp")`,
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                  Build your new <span className="text-blue-400">Saas</span>{" "}
                  Project
                </h1>
                <br />

                <Link to={"/all-job"}>
                  <button className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                    Applied Job
                  </button>
                </Link>
              </div>
            </div>
          </div>
              </SwiperSlide>
              
              {/* slider 3 */}
        <SwiperSlide>
          <div
            className="w-full bg-center bg-cover h-[38rem]"
            style={{
              backgroundImage: `url("https://i.ibb.co/23SMtcJ/Getty-Images-1186079153.jpg")`,
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                  Build your new <span className="text-blue-400">Saas</span>{" "}
                  Project
                </h1>
                <br />

                <Link to={"/all-job"}>
                  <button className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                    Applied Job
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  );
}
