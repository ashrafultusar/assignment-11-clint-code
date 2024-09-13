
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Review = () => {
  return (
      <div className="mt-8 md:mt-12 lg:mt-16 container mx-auto flex flex-col justify-center items-center gap-8 px-4 py-8">
          
          <div className="text-center md:space-y-2">
              <p className="font-inter text-sm md:text-2xl text-[#16ccf5]">-- Places & Cities Must Visit This Summer --</p>
              <h1 className="text-2xl md:text-3xl font-inter font-bold text-[#001751]">Our User Reviews</h1>
</div>

      {/* Swiper Slider */}
      <Swiper
        className="w-full"
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation
        breakpoints={{
          480: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-xl md:max-w-sm mx-auto bg-white rounded-lg shadow-lg border p-3 md:p-6">
              <div className="relative flex justify-center">
                <img
                  className="absolute top-4 transform translate-y-[-50%] w-16 h-16 rounded-full"
                  src="https://i.ibb.co/RhgQRnW/howre.png"
                  alt="Profile"
                />
              </div>

              <div className="pt-12">
                <p className="text-gray-600 italic text-sm md:text-base">
                  "Eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim ipsum do dolor sit amet consectetur adipisicing elit. Sed eiusmod tempor incididunt."
                </p>
              </div>
              <div className="flex mt-4 items-center">
                <div className="ml-6">
                  <h2 className="font-bold text-base md:text-lg">Ameda Hilson</h2>
                  <p className="text-sm text-gray-500">Client USA</p>
                </div>
                <div className="ml-auto flex items-center space-x-1">
                  <div className="flex mb-7 text-yellow-500">
                  {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.9 3.1 1.1-6.4-4.7-4.6 6.4-.9L10 0l2.9 5.2 6.4.9-4.7 4.6 1.1 6.4z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
