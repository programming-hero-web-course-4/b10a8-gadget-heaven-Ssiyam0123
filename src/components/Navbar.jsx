import { NavLink } from "react-router-dom";
import { FaCartPlus, FaHeart } from "react-icons/fa";

export default function Navbar() {
  const links = (
    <div className="space-x-5 sm:space-y-2">
      {/* <NavLink className={(e)=>{return e.isActive?'bg-red-600 btn text-white':'btn' }} to={'/'}>Home</NavLink>
        <NavLink className={(e)=>{return e.isActive?'bg-red-600 btn text-white':'btn' }} to={'/statistics'}>Statistics</NavLink>
        <NavLink className={(e)=>{return e.isActive?'bg-red-600 btn text-white':'btn' }} to={'/dashboard'}>Dashboard</NavLink> */}
      <ul className="flex space-x-4">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/statistics"}>Statistics</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-3">
          <NavLink to={"/dashboard"}>
            <FaCartPlus></FaCartPlus>
          </NavLink>
          <NavLink to={"/dashboard/wishlist"}>
            <FaHeart></FaHeart>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
