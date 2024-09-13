import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { user, creatUser, setUser } = useContext(AuthContext);

  // register
  const handelsignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ photo, name, email, password });

    try {
      // password validation
      if (password.length < 6) {
        toast.warn("Password at least 6 character");
        return;
      } else if (!/[A-Z]/.test(password)) {
        toast.warn("Password Must have an Uppercase letter");
        return;
      } else if (!/[a-z]/.test(password)) {
        toast.warn("Password Must have an Lowercase letter");
        return;
      }
      const result = await creatUser(email, password);
      console.log(result);
      await updateProfile(name, photo);
      setUser({ ...result, photoUrl: photo, displayName: name });

      console.log(result.user);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: result?.user?.email },
        {
          withCredentials: true,
        }
      );
      console.log(data);

      navigate("/");
      toast.success("SignUp Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
  <div>
    
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/2MbKHzq/pexels-cottonbro-4065145.jpg')`,
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Black overlay with opacity
        backgroundBlendMode: "overlay",
      }}
    >
      <Helmet>
        <title>CAREERNESTLE - Register</title>
      </Helmet>

      <Link
        to="/"
        className="absolute top-5 left-5 text-white bg-transparent border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition duration-300"
      >
        Back to Home
      </Link>

      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-xl">
        <div className="card w-full shadow-2xl bg-opacity-90">
          <form onSubmit={handelsignUp} className="card-body">
            <h2 className="text-center text-white text-2xl font-bold mb-6">
              Register Now
            </h2>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Photo Url"
                name="photo"
                className="w-full bg-transparent border-b-2 px-5 py-3 border-lightBlack focus:outline-none focus:border-white text-white"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-white">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="w-full bg-transparent border-b-2 px-5 py-3 border-lightBlack focus:outline-none focus:border-white text-white"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="w-full bg-transparent border-b-2 px-5 py-3 border-lightBlack focus:outline-none focus:border-white text-white"
                  required
                />
              </div>

              <div className="relative">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="w-full bg-transparent border-b-2 px-5 py-3 border-lightBlack focus:outline-none focus:border-white text-white"
                    required
                  />
                </div>
                <span
                  className="absolute top-12 right-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-white"></FaEyeSlash>
                  ) : (
                    <FaRegEye className="text-white"></FaRegEye>
                  )}
                </span>
              </div>

              <div className="form-control mt-6">
              <button className="w-full relative overflow-hidden bg-transparent border border-white text-white py-2 px-4 rounded transition duration-300 group">
                <span className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 group-hover:text-black">
                  Register
                </span>
              </button>
              </div>
             


            <div className="divider text-white">OR</div>

            {/* <div className="space-y-3 w-full">
          <button
            type="button"
            onClick={handelGooglesignIn}
            className="w-full bg-white flex items-center text-gray-700 dark:text-gray-300 justify-center gap-x-3 text-sm sm:text-base dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5"
          >
            <FaGoogle className="w-5 h-5 sm:h-6 sm:w-6" />
            <span>Sign in with Google</span>
          </button>

          <button
            onClick={handelGithubLogin}
            className="bg-black w-full rounded-lg text-sm sm:text-base flex items-center gap-x-3 justify-center text-white hover:bg-black/80 duration-300 transition-colors border border-transparent px-8 py-2.5"
          >
            <FaGithub className="text-2xl" />
            <span>Sign in with Github</span>
          </button>
        </div> */}

            <div className="text-center text-white mt-4 ">
              <span>
                Already have an account?{' '}
                <Link to={'/login'} className="font-bold text-orange-400" >
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Register;
