/* eslint-disable react/prop-types */
import logo from "./../../assets/logo.png";
import dollar from "./../../assets/dollar.png";
import Headroom from "react-headroom";
const Navbar = ({ coin }) => {
  return (
    <Headroom>
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
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost h-fit text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a href="">Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:w-fit">
          <div className="border rounded-xl flex px-4 py-3 justify-center items-center gap-1">
            <span id="coin">{coin}</span>Coin
            <img className="h-5" src={dollar} alt="" />
          </div>
        </div>
      </div>
    </Headroom>
  );
};

export default Navbar;
