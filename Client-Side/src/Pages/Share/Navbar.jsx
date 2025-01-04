import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import logoImg from "../../assets/logo.png";
import SubNavigation from "../../components/SubNavigation";

const Navbar = () => {
  return (
    <nav className="container mx-auto">
      {/* Top */}
      <div className="flex items-center justify-between px-4 py-2 text-sm border-b border-gray-300">
        {/* Left Side */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-7">
          <div className="flex items-center gap-1 font-bold">
            <p className="mr-1">Hi! </p>
            <p className="text-primary ">
              <Link>Sign In </Link>
            </p>
            <p className="hidden lg:block">or</p>
            <p className="hidden text-primary lg:block">
              <Link>Register</Link>
            </p>
          </div>
          <div className="flex-col items-center hidden gap-2 sm:flex-row sm:gap-5 lg:flex">
            <Link>Deil Deals</Link>
            <p>
              <Link>Help</Link> & <Link>Contact</Link>
            </p>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-5">
          <select name="" id="">
            <option value="">My Shop</option>
          </select>

          <div className="flex items-center gap-2 cursor-pointer md:gap-4">
            <IoMdNotificationsOutline size={22} />
            <FiShoppingCart size={18} />
          </div>
        </div>
      </div>

      {/* Middle */}

      <div className="flex items-center gap-1 px-4 py-2 border-b border-gray-300 lg:gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer min-w-6">
          <img src={logoImg} alt="Shop Point logo" className="block " />
          <div className="flex-col hidden lg:flex">
            <p className="text-lg font-bold">Shop</p>
            <p className="text-sm">Point</p>
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center flex-grow max-w-full px-3 py-2 overflow-hidden duration-300 border-2 rounded-full border-primary">
          <label
            className="flex flex-row-reverse items-center flex-grow max-w-full gap-3 overflow-hidden lg:flex-row cursor-text"
            htmlFor="search"
          >
            <FaMagnifyingGlass className="p-2 text-black bg-gray-200 rounded-full sm:cursor-pointer min-w-7 min-h-7" />
            <input
              type="text"
              id="search"
              placeholder="Search for anything"
              className="flex-grow max-w-full text-sm bg-transparent focus:outline-none"
            />
          </label>
          <select
            name=""
            id=""
            className="hidden ml-2 text-sm border-none lg:block focus:outline-none"
          >
            <option value="">All Category</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="hidden gap-2 mx-2 lg:flex">
          <button className="px-6 py-2 text-white rounded-full bg-primary sm:px-12">
            Search
          </button>
          <button className="px-6 py-2 duration-300 bg-gray-200 rounded-full hover:bg-primary hover:text-white sm:px-12">
            Advance
          </button>
        </div>
      </div>

      {/* Bottom */}

      <SubNavigation />
    </nav>
  );
};

export default Navbar;
