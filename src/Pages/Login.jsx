import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaGithub, FaGoogle, FaRegEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { signIn, signInGoogle } = useContext(AuthContext);

  // email sign in
  const handelSignIn = async e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password })
    
    try {
      // user login
      const result = await signIn(email, password)
      console.log(result)
      navigate('/')
      toast.success("Signin Successful");
    }
    catch (err) {
      console.log(err)
toast.error(err?.message)
    }


  }


  // google sign in
  const handelGooglesignIn = async() => {
    try {
      await signInGoogle()
      toast.success("SignIn Successful");
      navigate('/')
    }
    catch (err){
      console.log(err)
      toast.error(err?.message);
    }
}




  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelSignIn} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
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
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="divider">OR</div>
              <div className="flex justify-around">

                <button onClick={handelGooglesignIn} className="text-2xl ">
                
                  <FaGoogle />
                </button>

                <button className="text-2xl ">
                  
                  <FaGithub />
                </button>
              </div>
              <div className="divider"></div>
              <p>
                You have no account! Please
                <Link to={"/register"} className="text-orange-500 font-bold">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
