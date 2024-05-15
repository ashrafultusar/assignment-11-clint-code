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

      console.log(result.user)
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email: result?.user?.email }, {
        withCredentials: true
      })
      console.log(data)


      navigate("/");
      toast.success("SignUp Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div>
      
      <Helmet>
        <title>CAREERNESTLE - Register</title>
      </Helmet>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelsignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  name="photo"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="relative">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <span
                  className="absolute top-12 right-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash></FaEyeSlash>
                  ) : (
                    <FaRegEye></FaRegEye>
                  )}
                </span>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                You have no account! please
                <Link to={"/login"} className="text-orange-500 font-bold">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
