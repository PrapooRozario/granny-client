import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <Link to="/" className="text-2xl text-black dark:text-white font-semibold">
          Gra<span className="text-yellow-500">nny</span>
        </Link>

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <NavLink
            to="/"
            className="text-gray-800 dark:text-gray-200 hover:text-yellow-600 transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/all/foods"
            className="text-gray-800 dark:text-gray-200 hover:text-yellow-600 transition duration-300"
          >
            All Foods
          </NavLink>
          <NavLink
            to="/gallery"
            className="text-gray-800 dark:text-gray-200 hover:text-yellow-600 transition duration-300"
          >
            Gallery
          </NavLink>
        </ul>
        <div className="flex items-center gap-4 text-gray-800 dark:text-gray-200">
          <Link className="hover:text-yellow-600 transition duration-300">
            <FaFacebook />
          </Link>
          <Link className="hover:text-yellow-600 transition duration-300">
            <FaTwitter />
          </Link>
          <Link className="hover:text-yellow-600 transition duration-300">
            <FaInstagram />
          </Link>
          <Link className="hover:text-yellow-600 transition duration-300">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
      <p className="block mb-4 text-sm text-center text-gray-600 dark:text-gray-400 md:mb-0 border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
        Copyright © 2024&nbsp;
        <Link to="/" className="hover:text-yellow-600 transition duration-300">Granny</Link>.
      </p>
    </footer>
  );
};

export default Footer;
