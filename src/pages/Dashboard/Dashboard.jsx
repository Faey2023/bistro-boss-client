import { NavLink, Outlet } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
const Dashboard = () => {
  const links = (
    <>
      <NavLink
        to="/admin"
        className={({ isActive }) =>
          isActive
            ? "text-white uppercase font-medium text-xl"
            : "text-black text-xl font-medium uppercase"
        }
      >
        <MdHome className="inline-block mr-3" />
        Admin Home
      </NavLink>
      <NavLink
        to="/dashboard/cart"
        className={({ isActive }) =>
          isActive
            ? "text-white uppercase font-medium text-xl"
            : "text-black text-xl font-medium uppercase"
        }
      >
        <ImSpoonKnife className="inline-block mr-3" />
        Cart
      </NavLink>
      <NavLink
        to="/admin"
        className={({ isActive }) =>
          isActive
            ? "text-white uppercase font-medium text-xl"
            : "text-black text-xl font-medium uppercase"
        }
      >
        <MdHome className="inline-block mr-3" />
        Admin Home
      </NavLink>
      <NavLink
        to="/admin"
        className={({ isActive }) =>
          isActive
            ? "text-white uppercase font-medium text-xl"
            : "text-black text-xl font-medium uppercase"
        }
      >
        <MdHome className="inline-block mr-3" />
        Admin Home
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Dashboard
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content gap-6">
            {/* Sidebar content here */}
            <p
              className="text-xl md:text-2xl font-bold uppercase
          mb-16"
            >
              <span className="text-xl md:text-4xl font-black">
                Bistro boss
              </span>
              <br /> <span className="tracking-[9.12px]">restaurant</span>
            </p>
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
