// import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Carousel() {
  const img1 =
    "https://i.ibb.co.com/BCr2Zq5/pexels-designecologist-1779487.jpg";
  const img2 =
    "https://i.ibb.co.com/195P5Fm/pexels-thisisengineering-3861958.jpg";
  const img3 =
    "https://i.ibb.co.com/v1d3rHm/pexels-jakubzerdzicki-27861839.jpg";
  const img4 =
    "https://i.ibb.co.com/QXbPgrh/pexels-tima-miroshnichenko-6549631.jpg";

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="w-full h-screen">
      {" "}
      {/* Full width and height */}
      <Swiper
        direction="vertical" // Vertical sliding
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full" // Full height and width for Swiper
        speed={1000} // Smooth transitions
        loop={true} // Loop for continuous sliding
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {/* slider 1 */}
        <SwiperSlide>
          <div
            className="w-full h-full relative bg-center bg-cover" // Full height and width
            style={{
              backgroundImage: `url("${img1}")`,
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                  Let's Find Jobs for You
                </h1>
                <p className="text-white">
                  There's no need to look anywhere else. With over 1 million
                  jobs, ZipRecruiter <br />
                  is the only site you'll ever need to find your next job.
                </p>
                <br />
                <Link to={"/all-job"}>
                  <button className="w-36 relative overflow-hidden bg-transparent border border-white text-white py-1 px-2 rounded transition duration-300 group">
                    <span className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-black">
                      Find Your Job
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slider 2 */}
        <SwiperSlide>
          <div
            className="w-full h-full relative bg-center bg-cover"
            style={{
              backgroundImage: `url("${img2}")`,
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                  Let's Find Jobs for You
                </h1>
                <p className="text-white">
                  There's no need to look anywhere else. With over 1 million
                  jobs, ZipRecruiter <br />
                  is the only site you'll ever need to find your next job.
                </p>
                <br />
                <Link to={"/all-job"}>
                  <button className="w-36 relative overflow-hidden bg-transparent border border-white text-white py-1 px-2 rounded transition duration-300 group">
                    <span className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-black">
                      Find Your Job
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slider 3 */}
        <SwiperSlide>
          <div
            className="w-full h-full relative bg-center bg-cover"
            style={{
              backgroundImage: `url("${img3}")`,
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                  Let's Find Jobs for You
                </h1>
                <p className="text-white">
                  There's no need to look anywhere else. With over 1 million
                  jobs, ZipRecruiter <br />
                  is the only site you'll ever need to find your next job.
                </p>
                <br />
                <Link to={"/all-job"}>
                  <button className="w-36 relative overflow-hidden bg-transparent border border-white text-white py-1 px-2 rounded transition duration-300 group">
                    <span className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-black">
                      Find Your Job
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 4 */}

        <SwiperSlide>
          <div
            className="w-full h-full relative bg-center bg-cover"
            style={{
              backgroundImage: `url("${img4}")`,
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                  Let's Find Jobs for You
                </h1>
                <p className="text-white">
                  There's no need to look anywhere else. With over 1 million
                  jobs, ZipRecruiter <br />
                  is the only site you'll ever need to find your next job.
                </p>
                <br />
                <Link to={"/all-job"}>
                  <button className="w-36 relative overflow-hidden bg-transparent border border-white text-white py-1 px-2 rounded transition duration-300 group">
                    <span className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-black">
                      Find Your Job
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Autoplay progress indicator */}
        <div className="absolute right-2 bottom-2 w-12 h-12 z-10">
          <svg
            viewBox="0 0 48 48"
            ref={progressCircle}
            className="transform -rotate-90 fill-none stroke-[4] stroke-teal-400"
          >
            <circle cx="24" cy="24" r="20" className="stroke-white/80"></circle>
          </svg>
          <span
            ref={progressContent}
            className="absolute inset-0 flex justify-center items-center text-white text-sm"
          ></span>
        </div>
      </Swiper>
    </div>
  );
}
