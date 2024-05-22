import { Link, NavLink } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { FiShoppingCart } from "react-icons/fi";
import { CiMenuFries } from "react-icons/ci";
import UseCart from "../hooks/UseCart";
import Swal from "sweetalert2";

const Navbar = () => {
  const [cart] = UseCart();
  const { user, logout } = UseAuth();
  const handleLogout = () => {
    logout()
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully logged out!!!",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch();
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
      {/* <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "text-[#EEFF25] uppercase text-xl font-extrabold"
            : "text-white text-xl font-extrabold uppercase"
        }
      >
        dashboard
      </NavLink> */}
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
              <CiMenuFries className="text-2xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52 gap-5 \"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold uppercase
          "
          >
            <span className="text-xl md:text-4xl font-black"> Bistro boss</span>
            <br /> <span className="tracking-[9.12px]">restaurant</span>
          </Link>
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
