import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      {/* <h1 className="text-5xl text-yellow-500 font-bold ">Opps !!!</h1>
            <Link to={'/'}><button className="btn bg-green-500 px-8 font-lato text-2xl">Go Back</button></Link> */}

      {/* <img className="min-h-screen " src="https://i.ibb.co/j4j4QS9/360-F-135882430-6-Ytw6s-JKC5jg8ovh18-Xj-AHu-MXc-S7mlai.jpg" alt="" /> */}

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/JBnNVvr/funny-error-message-162331961.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold font-lato mb-4">
              Page Not Found
            </h1>
            <Link to={'/'}>
              <button className="btn bg-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <section className="bg-white ">
        <div className=" ">
          <div className="wf-ull">
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Sorry, the page you are looking for doesnt exist.Here are some
              helpful links:
            </p>

            <div className="flex items-center mt-6 gap-x-3">
              <Link to={"/"}>
                <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                  </svg>

                  <span>Go back</span>
                </button>
              </Link>

              <Link to={"/"}>
                {" "}
                <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-green-500 font-bold rounded-lg shrink-0 sm:w-auto hover:bg-gray-600">
                  Go To Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ErrorPage;
