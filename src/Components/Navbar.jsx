import React, { useState } from "react";
import Search from "../assets/cil_search.png";
import user from "../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [icon, setIcon] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white shadow-sm">
      {/* Top Section */}
      <div className="w-full px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-[#009DE0]">Utradia</h1>

        {/* Desktop Search + Icons */}
        <div className="hidden md:flex items-center gap-6 flex-grow justify-center">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search here"
              className="w-full pl-5 pr-10 p-3 rounded-sm bg-gray-200 outline-none text-sm"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <img src={Search} alt="Search" className="w-5 h-5" />
            </button>
          </div>

          <NavLink to="#" className="font-semibold text-[#009DE0]">
            Compare
          </NavLink>
          <FontAwesomeIcon
            icon={faHeart}
            className="text-2xl text-gray-600 hover:text-[#009DE0] cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-2xl text-gray-600 hover:text-[#009DE0] cursor-pointer"
          />
          <div className="flex items-center gap-3">
            <img
              src={user}
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="font-semibold text-gray-700"><NavLink to="/signup" className="text-[#009DE0] font-medium">
              Register
            </NavLink></p>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <FontAwesomeIcon
            icon={icon ? faXmark : faBars}
            onClick={() => setIcon(!icon)}
            className="text-2xl text-black cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Menu Content */}
      {icon && (
        <div className="md:hidden px-4 pb-4 bg-white animate-slide-down">
          <input
            type="text"
            placeholder="Search here"
            className="w-full p-2 mb-3 rounded bg-gray-200 outline-none text-sm"
          />
          <div className="flex flex-col gap-2">
            <NavLink to="/" className="text-[#009DE0] font-medium">
              All Category
            </NavLink>
            <NavLink to="/fashion" className="text-[#009DE0] font-medium">
              Fashion
            </NavLink>
            <NavLink to="/beauty" className="text-[#009DE0] font-medium">
              Beauty
            </NavLink>
            <NavLink to="/homeapp" className="text-[#009DE0] font-medium">
              Home Appliances
            </NavLink>
            <NavLink to="/mobile" className="text-[#009DE0] font-medium">
              Mobile
            </NavLink>
            <NavLink to="/grocery" className="text-[#009DE0] font-medium">
              Grocery
            </NavLink>
            <NavLink to="/contactus" className="text-[#009DE0] font-medium">
              Contact us
            </NavLink>
            <NavLink to="/signup" className="text-[#009DE0] font-medium">
              Register
            </NavLink>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center items-center bg-[#009DE0]">
        <div className="flex gap-5 font-medium text-white">
          <NavLink to="/" className="hover:bg-white px-4 py-3 hover:text-black">
            All Category
          </NavLink>
          <NavLink to="/fashion" className="hover:bg-white px-4 py-3 hover:text-black">
            Fashion
          </NavLink>
          <NavLink to="/beauty" className="hover:bg-white px-4 py-3 hover:text-black">
            Beauty
          </NavLink>
          <NavLink to="/homeapp" className="hover:bg-white px-4 py-3 hover:text-black">
            Home Appliances
          </NavLink>
          <NavLink to="/mobile" className="hover:bg-white px-4 py-3 hover:text-black">
            Mobile
          </NavLink>
          <NavLink to="/grocery" className="hover:bg-white px-4 py-3 hover:text-black">
            Grocery
          </NavLink>
          <NavLink to="/contactus" className="hover:bg-white px-4 py-3 hover:text-black">
            Contact us
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
