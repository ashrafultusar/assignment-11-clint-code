import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaGithub, FaGoogle, FaRegEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import { toast } from "react-toastify";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { signIn, signInGoogle, signInGithub } = useContext(AuthContext);

  // email sign in
  const handelSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    try {
      // user login
      const result = await signIn(email, password);

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
      toast.success("Signin Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  // google sign in
  const handelGooglesignIn = async () => {
    try {
      const result = await signInGoogle();

      console.log(result.user);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: result?.user?.email },
        {
          withCredentials: true,
        }
      );
      console.log(data);

      toast.success("SignIn Successful");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  // github login
  const handelGithubLogin = async () => {
    try {
      const result = await signInGithub();

      console.log(result.user);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: result?.user?.email },
        {
          withCredentials: true,
        }
      );
      console.log(data);

      toast.success("SignIn Successful");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
  
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
  style={{
    backgroundImage: `url('https://i.ibb.co.com/2MbKHzq/pexels-cottonbro-4065145.jpg')`,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Black overlay with opacity
    backgroundBlendMode: "overlay",
  }}
>
  <Helmet>
    <title>CAREERNESTLE - Login</title>
  </Helmet>

  <Link
    to="/"
    className="absolute top-5 left-5 text-white bg-transparent border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition duration-300"
  >
    Back to Home
  </Link>

  <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-xl">
    <div className="card w-full shadow-2xl bg-opacity-90">
      <form onSubmit={handelSignIn} className="card-body">
        <h2 className="text-center text-white text-2xl font-bold mb-6">
          Sign In
        </h2>

        <div className="form-control w-full">
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

        <div className="relative form-control w-full mt-4">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            name="password"
            className="w-full bg-transparent border-b-2 px-5 py-3 border-lightBlack focus:outline-none focus:border-white text-white"
            required
          />
          <span
            className="absolute top-12 right-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaRegEye />}
          </span>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white">
              Forgot password?
            </a>
          </label>
        </div>

        <div className="form-control mt-6 w-full">
          <button className="w-full relative overflow-hidden bg-transparent border border-white text-white py-2 px-4 rounded transition duration-300 group">
            <span className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
            <span className="relative z-10 group-hover:text-black">Login</span>
          </button>
        </div>

        <div className="divider text-white">OR</div>

        <div className="space-y-3 w-full">
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
        </div>

        <div className="text-center text-white mt-4">
          <span>
            Don't have an account?{" "}
            <Link className="font-bold text-orange-400" to="/register">
              Register
            </Link>
          </span>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default Login;
