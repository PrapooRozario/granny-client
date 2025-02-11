import { useAuth } from "@/hooks/useAuth";
import { Menu, MoonIcon, SunDimIcon } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const { user, signOutAuth } = useAuth();
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);
  };
  return (
    <div className="navbar fixed top-0 w-11/12 z-50 bg-white dark:bg-[#1F2937] left-1/2 transform -translate-x-1/2 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="mr-3 lg:hidden">
            <Menu></Menu>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content *:text-black *:font-medium *:text-base bg-yellow-100 rounded-lg px-4 py-4 space-y-2 mt-4 z-[2] w-56 "
          >
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
        </div>
        <Link to="/" className="text-2xl font-semibold">
          Gra<span className="text-yellow-500">nny</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal *:text-black *:dark:text-white *:font-medium *:text-base gap-6 px-1">
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
      </div>

      <div className="navbar-end">
        <button onClick={toggleTheme} className="py-2 px-4">
          {isDark ? <SunDimIcon></SunDimIcon> : <MoonIcon></MoonIcon>}
        </button>
        {user && user?.email ? (
          <div className="flex items-center gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt={user?.displayName}
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content *:text-black *:font-medium *:text-base bg-base-100 shadow rounded-lg px-4 py-4 space-y-2 mt-4 z-[2] w-52 "
              >
                <NavLink
                  to="/add/food/me"
                  className="hover:text-yellow-600 transition duration-300"
                >
                  My Foods
                </NavLink>
                <NavLink
                  to="/add/food"
                  className="hover:text-yellow-600 transition duration-300"
                >
                  Add food
                </NavLink>
                <NavLink
                  to="/orders/me"
                  className="hover:text-yellow-600 transition duration-300"
                >
                  My Orders
                </NavLink>
              </ul>
            </div>

            <button
              onClick={signOutAuth}
              className="bg-yellow-400 py-2 px-6 rounded-lg font-medium text-black hover:bg-yellow-300 transition duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-yellow-400 py-2 px-6 rounded-lg font-medium text-black hover:bg-yellow-300 transition duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
