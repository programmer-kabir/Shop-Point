import { AiOutlineCloseCircle } from "react-icons/ai";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaBars, FaBurger, FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import logoImg from "../../assets/logo.png";
import SubNavigation from "../../components/SubNavigation";
import Container from "../../components/Container";
const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <nav className="bg-white">
      <>
        {/* Top */}

        <div className="border-b border-gray-300">
        <div className="items-center justify-between hidden  py-2 text-sm  md:flex w-[95%] mx-auto">
            {/* Left Side */}
            <div className="flex flex-row items-center gap-7">
            <div className="flex items-center gap-2 font-bold">
              <p className="mr-1">Hi! </p>
              <p className="text-primary ">
                <Link>Sign In </Link>
              </p>
              <p className="">or</p>
              <p className=" text-primary">
                <Link>Register</Link>
              </p>
            </div>
            <div className="flex flex-row items-center gap-5 ">
              <Link>Deil Deals</Link>
              <p>
                <Link>Help</Link> & <Link>Contact</Link>
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex items-center gap-2 ">
            <select name="" id="">
              <option value="">My Shop</option>
            </select>

            <div className="flex items-center gap-2 cursor-pointer md:gap-4">
              <IoMdNotificationsOutline size={22} />
              <FiShoppingCart size={18} />
            </div>
          </div>
        </div>
        </div>
        {/* Middle */}
        <div className="border-b border-gray-300">
        <div className="items-center hidden gap-4  py-2 md:flex w-[95%] mx-auto">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer min-w-6">
            <img src={logoImg} alt="Shop Point logo" className="block " />

            <p className="text-base font-semibold">
              Shop <br />
              Point
            </p>
          </div>

          {/* Search */}
          <div className="flex items-center flex-grow max-w-full px-3  overflow-hidden duration-300 border-2 rounded-full border-primary">
            <label
              className="flex flex-row items-center flex-grow max-w-full gap-3 overflow-hidden cursor-text"
              htmlFor="search"
            >
              <FaMagnifyingGlass className="rounded-full p-1 w-[24px] h-[24px]" color="#4F4F4F" size={24} />
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
              className="hidden ml-2 py-3 px-2 text-sm border-l-2 lg:block focus:outline-none"
            >
              <option value="" className=" ">All Category</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mx-2">
            <button className="primaryButton sm:px-12 py-3 ">
              Search
            </button>
            <button className="py-2 ">
              Advance
            </button>
          </div>
        </div>
        </div>
        {/* Bottom */}
        <SubNavigation />
        {/* mobile and tablet  */}
        <div className="md:hidden">
          <div className="flex justify-between px-4 pt-2">
            <img src={logoImg} alt="Shop Point logo" className="w-9 " />
            <div className="flex items-center gap-2 cursor-pointer md:gap-4">
              <IoMdNotificationsOutline size={22} />
              <FiShoppingCart size={18} />
              <FaBars onClick={() => setIsMobileMenu(true)} />
            </div>
          </div>

          <form className="flex px-4 py-2">
            <input
              type="search"
              className="flex-grow min-w-0 px-2 py-1 border outline-none border-primary"
              placeholder="search..."
            />
            <button
              type="submit"
              className="p-2 text-white bg-primary sm:cursor-pointer"
            >
              <FaMagnifyingGlass className="w-4 h-4 " />
            </button>
          </form>

          <div
            className={` fixed top-0 bottom-0 ${
              isMobileMenu ? "right-0" : "-right-full"
            } w-full bg-white duration-300`}
          >
            <AiOutlineCloseCircle
              size={24}
              className="absolute right-4 top-4 "
              onClick={() => setIsMobileMenu(false)}
            />
            <div className="flex flex-col gap-3 pt-12 pl-4">
              <Link>Profile</Link>
              <Link className="pb-2 border-b">Help</Link>

              <div>
                <Link className="font-bold text-primary">Sign In</Link>{" "}
                <span> Or </span>
                <Link className="font-bold text-primary">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </nav>
  );
};

export default Navbar;