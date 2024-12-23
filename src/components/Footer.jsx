import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-[#1f2937] p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white dark:bg-[#1f2937] text-center md:justify-between">
        <Link to="/" className="text-2xl text-blackfont-semibold">
          Gra<span className="text-yellow-500">nny</span>
        </Link>

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <NavLink
            to="/"
            className="hover:text-yellow-600 transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/all/foods"
            className="hover:text-yellow-600 transition duration-300"
          >
            All Foods
          </NavLink>
          <NavLink
            to="/gallery"
            className="hover:text-yellow-600 transition duration-300"
          >
            Gallery
          </NavLink>
        </ul>
        <div className="flex items-center gap-4">
          <Link>
            <FaFacebook></FaFacebook>
          </Link>
          <Link>
            <FaTwitter></FaTwitter>
          </Link>
          <Link>
            <FaInstagram></FaInstagram>
          </Link>
          <Link>
            <FaLinkedinIn></FaLinkedinIn>
          </Link>
        </div>
      </div>
      <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4">
        Copyright © 2024&nbsp;
        <Link to="/">Granny</Link>.
      </p>
    </footer>
  );
};

export default Footer;
