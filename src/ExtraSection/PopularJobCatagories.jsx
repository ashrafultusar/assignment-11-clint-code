import { motion } from "framer-motion";

const PopularJobCatagories = ({ isVisible }) => {
  return (
    <div className="my-10 container mx-auto ">
      <h1 data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500" className=" text-4xl font-lato font-bold my-6 text-[#001751] text-center">
        Popular Job
      </h1>


      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1300" class="lg:col-span-2 md:col-span-2 col-span-1">
          <div class="relative">
            <img
              class="w-full h-64 object-cover rounded-lg"
              src="https://i.ibb.co.com/BCr2Zq5/pexels-designecologist-1779487.jpg"
              alt="Almaty"
            />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <div class="text-center text-white">
                <h2 class="text-2xl font-semibold">Web Development</h2>
                <p>Remoted</p>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1400" class="relative">
          <img
            class="w-full h-64 object-cover rounded-lg"
            src="https://i.ibb.co.com/VSJ87Br/pexels-canvastudio-3194521.jpg"
            alt="Bangkok"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <div class="text-center text-white">
              <h2 class="text-2xl font-semibold">Digital Marketing</h2>
              <p>Hybrid</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500" class="relative">
          <img
            class="w-full h-64 object-cover rounded-lg"
            src="https://i.ibb.co.com/195P5Fm/pexels-thisisengineering-3861958.jpg"
            alt="London"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <div class="text-center text-white">
              <h2 class="text-2xl font-semibold">Software Engineer</h2>
              <p>Remoted</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1600" class="relative">
          <img
            class="w-full h-64 object-cover rounded-lg"
            src="https://i.ibb.co.com/v1d3rHm/pexels-jakubzerdzicki-27861839.jpg"
            alt="New York"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <div class="text-center text-white">
              <h2 class="text-2xl font-semibold">App Development</h2>
              <p>Remoted</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500" class="relative">
          <img class="w-full h-64 object-cover rounded-lg" src="https://i.ibb.co.com/2yJMtgC/pexels-thisisengineering-3861969.jpg" alt="Paris" />
          <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <div class="text-center text-white">
              <h2 class="text-2xl font-semibold">Data Science</h2>
              <p>Par Time</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500" class="lg:col-start-3 lg:col-span-2 md:col-span-2 col-span-1">
          <div class="relative">
            <img
              class="w-full h-64 object-cover rounded-lg"
              src="https://i.ibb.co.com/QXbPgrh/pexels-tima-miroshnichenko-6549631.jpg"
              alt="Tokyo"
            />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <div class="text-center text-white">
                <h2 class="text-2xl font-semibold">Human Resource
</h2>
                <p>On Site</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularJobCatagories;
