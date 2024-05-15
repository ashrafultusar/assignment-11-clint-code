// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <div className="">
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
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
          className="w-full relative bg-center bg-cover h-[38rem]"
          style={{
            backgroundImage: `url("https://i.ibb.co/YWqNNkw/slider1.webp")`,
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                Let's Find Jobs for You
              </h1>
              <p className="text-white ">
                There's no need to look anywhere else. With over 1 million
                jobs, ZipRecruiter <br /> is the only site you'll ever need
                to find your next job.
              </p>
              <br />

              <Link to={"/all-job"}>
                <button className=" w-36 px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                  Find You Job
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
                Let's Find Jobs for You
              </h1>
              <p className="text-white ">
                There's no need to look anywhere else. With over 1 million
                jobs, ZipRecruiter <br /> is the only site you'll ever need
                to find your next job.
              </p>
              <br />

              <Link to={"/all-job"}>
                <button className="w-36 px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                  Find You Job
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* slider 3 */}
      <SwiperSlide>
        <div
          className="w-full bg-center bg-cover h-[38rem] "
          style={{
            backgroundImage: `url("https://i.ibb.co/23SMtcJ/Getty-Images-1186079153.jpg")`,
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                Let's Find Jobs for You
              </h1>
              <p className="text-white ">
                There's no need to look anywhere else. With over 1 million
                jobs, ZipRecruiter <br />
                is the only site you'll ever need to find your next job.
              </p>
              <br />

              <Link to={"/all-job"}>
                <button className="w-36 px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                  Find You Job
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
