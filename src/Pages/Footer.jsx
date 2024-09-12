import logo from "../../src/assets/logo.jpg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1f2937]">
     <footer className="footer footer-center  text-white rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
       <FaFacebook className="text-2xl"></FaFacebook>
      </a>
      <a>
       <FaGithub className="text-2xl"></FaGithub>
      </a>
      <a>
       <FaLinkedin className="text-2xl"></FaLinkedin>
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>

    </div>
  );
};

export default Footer;
