import { motion } from "framer-motion";

const PopularJobCatagories = ({ isVisible }) => {
  return (
    <div className="my-10 container mx-auto ">
      <h1 className="text-4xl font-lato font-bold my-6 text-center">
        Find Popular Job
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div className="card  bg-[#02251e] shadow-xl">
            <div className="card-body flex items-center text-white">
              <h2 className="card-title">Web Development</h2>
              <p className="font-lato font-bold ">(7 open position)</p>
            </div>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div className="card  bg-[#02251e] shadow-xl">
            <div className="card-body flex items-center text-white">
              <h2 className="card-title">Digital Marketing</h2>
              <p className="font-lato font-bold ">(8 open position)</p>
            </div>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div className="card  bg-[#02251e] shadow-xl">
            <div className="card-body flex items-center text-white">
              <h2 className="card-title">Software Engineer</h2>
              <p className="font-lato font-bold ">(10 open position)</p>
            </div>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div className="card  bg-[#02251e] shadow-xl">
            <div className="card-body flex items-center text-white">
              <h2 className="card-title">App Development</h2>
              <p className="font-lato font-bold ">(11 open position)</p>
            </div>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div className="card  bg-[#02251e] shadow-xl">
            <div className="card-body flex items-center text-white">
              <h2 className="card-title">Data Science</h2>
              <p className="font-lato font-bold ">(10 open position)</p>
            </div>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div className="card  bg-[#02251e] shadow-xl">
            <div className="card-body flex items-center text-white">
              <h2 className="card-title">Human Resource</h2>
              <p className="font-lato font-bold ">(10 open position)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PopularJobCatagories;
