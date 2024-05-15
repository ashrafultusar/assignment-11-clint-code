import logo from "../../src/assets/logo.jpg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#02251e]">
      <footer className="footer container mx-auto p-10  text-neutral-content">
        <aside>
         
          <img className="w-24 rounded-full " src={logo} alt="" />
          <p className= "py-2 text-2xl font-bold font-lato">CAREERNESTLE</p>
        
          <p>
            <span className="font-semibold text-yellow-100">CAREERNESTLE</span>{" "}
            Industries Ltd.
            <br />
          </p>
         <p className="font-bold font-lato">All right reserved CN</p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              className="text-2xl"
              href="https://www.linkedin.com/in/ashrafultusar04/"
            >
              <FaLinkedin />
            </a>

            <a className="text-2xl" href="https://github.com/ashrafultusar">
              <FaGithub />
            </a>
            <a>
              <a
                className="text-2xl"
                href="https://www.facebook.com/ashrafulislamtusar.tusar"
              >
                <FaFacebook />
              </a>
            </a>
            
          </div>
          
          <div className="pt-4">
            <h1 className="text-[16px] font-bold">contact:</h1>
            <p>+001235677876</p>
            <p>+001235677876</p>
          </div>
          <p>
            <span className="text-[16px] font-bold">Address:</span>
            <br />
            <span>Mirpur ,Dhaka</span>
            <p>Bangladesh</p>
          </p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
