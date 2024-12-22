import { AuthContext } from "@/contexts/AuthProvider";
import { Menu } from "lucide-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const prop = useContext(AuthContext);
  console.log(prop);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="mr-3 lg:hidden">
            <Menu></Menu>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content *:text-black *:font-medium *:text-base bg-yellow-100 rounded-lg px-4 py-4 space-y-2 mt-4 z-[1] w-56 "
          >
            <NavLink
              to="/"
              className="hover:text-yellow-600 transition duration-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/"
              className="hover:text-yellow-600 transition duration-300"
            >
              All Foods
            </NavLink>
            <NavLink
              to="/"
              className="hover:text-yellow-600 transition duration-300"
            >
              Gallery
            </NavLink>
          </ul>
        </div>
        <Link className="text-2xl text-black font-semibold">
          Gra<span className="text-yellow-500">nny</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal *:text-black *:font-medium *:text-base gap-6 px-1">
          <NavLink
            to="/"
            className="hover:text-yellow-600 transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/"
            className="hover:text-yellow-600 transition duration-300"
          >
            All Foods
          </NavLink>
          <NavLink
            to="/"
            className="hover:text-yellow-600 transition duration-300"
          >
            Gallery
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="bg-yellow-400 py-2 px-6 rounded-lg font-medium text-black hover:bg-yellow-300 transition duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
