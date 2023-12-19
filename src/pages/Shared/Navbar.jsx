import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import { FiShoppingCart } from "react-icons/fi";
import UseCart from "../../hooks/UseCart";

const Navbar = () => {
  const [cart] = UseCart();
  const { user, logout } = UseAuth();
  const handleLogout = () => {
    logout().then().catch();
  };
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#EEFF25] uppercase text-xl font-extrabold"
            : "text-white text-xl font-extrabold uppercase"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-[#EEFF25] uppercase text-xl font-extrabold"
            : "text-white text-xl font-extrabold uppercase"
        }
      >
        contact us
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "text-[#EEFF25] uppercase text-xl font-extrabold"
            : "text-white text-xl font-extrabold uppercase"
        }
      >
        dashboard
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive }) =>
          isActive
            ? "text-[#EEFF25] uppercase text-xl font-extrabold"
            : "text-white text-xl font-extrabold uppercase"
        }
      >
        menu
      </NavLink>
      <NavLink
        to="/order"
        className={({ isActive }) =>
          isActive
            ? "text-[#EEFF25] uppercase text-xl font-extrabold"
            : "text-white text-xl font-extrabold uppercase"
        }
      >
        order
      </NavLink>
      <NavLink
        to="/dashboard/cart"
        className={({ isActive }) =>
          isActive
            ? "text-[#EEFF25] uppercase text-xl font-extrabold"
            : "text-white text-xl font-extrabold uppercase"
        }
      >
        <button className="flex">
          <FiShoppingCart />
          <p className="badge badge-secondary">+{cart.length}</p>
        </button>
      </NavLink>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-[#15151580] text-[#FFF] max-w-7xl mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52 gap-5 \"
            >
              {navLinks}
            </ul>
          </div>
          <p
            className="text-xl md:text-2xl font-bold uppercase
          "
          >
            <span className="text-xl md:text-4xl font-black"> Bistro boss</span>
            <br /> <span className="tracking-[9.12px]">restaurant</span>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link onClick={handleLogout}>Logout</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
