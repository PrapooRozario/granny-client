import { useAuth } from "@/hooks/useAuth";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, signOutAuth } = useAuth();
  console.log(user);
  return (
    <div className="navbar bg-base-100">
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
                  to="/"
                  className="hover:text-yellow-600 transition duration-300"
                >
                  My Foods
                </NavLink>
                <NavLink
                  to="/"
                  className="hover:text-yellow-600 transition duration-300"
                >
                  Add food
                </NavLink>
                <NavLink
                  to="/"
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
