<<<<<<< HEAD
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  return (
    <section className="">
      <div>
        {/* Top */}
        <div className="flex items-center justify-between border border-[rgba(209, 209, 209, 1)] px-4 py-2">
          {/* Left Side */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 items-center">
            <div className="flex items-center gap-1 font-bold">
              <p className="mr-1">Hi! </p>
              <p className="text-green-900 ">
                <Link>Sign in </Link>
              </p>
              <p className="lg:block hidden">or</p>
              <p className="text-green-900 lg:block hidden">
                <Link>register</Link>
              </p>
            </div>
            <div className="flex-col sm:flex-row items-center gap-2 sm:gap-5 lg:flex hidden">
              <Link>Deil Deals</Link>
              <p>
                <Link>Help</Link> & <Link>Contact</Link>
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex gap-4 sm:gap-10 items-center">
            <div className="flex items-center gap-2">
              <p className="lg:block hidden">Ship to</p>
              <p>Sell</p>
              <select name="" id="" className="lg:block hidden">
                <option value="">Watch list</option>
              </select>
              <select name="" id="">
                <option value="">My Shop</option>
              </select>
            </div>
            <div className="flex items-center gap-5">
              <IoMdNotificationsOutline size={20} />
              <FiShoppingCart />
            </div>
          </div>
        </div>

        {/* Middle */}
        <div className="flex items-center border border-[rgba(209, 209, 209, 1)] px-4 py-2 gap-4 sm:gap-0">
          {/* Logo */}
          <div className="flex gap-3 w-16 lg:w-44 items-center cursor-pointer">
            <img src={logoImg} alt="" />
            <div className="lg:block hidden">
              <p>Shop</p>
              <p>Point</p>
            </div>
            <div className="lg:block hidden">
              <IoIosArrowDown />
            </div>
          </div>
          {/* Search */}
          <div className="flex-1 border-2 py-2 px-3 rounded-full border-green-900 flex ">
            <label
              className="flex lg:flex-row flex-row-reverse flex-1 items-center gap-3 cursor-text"
              htmlFor="search"
            >
              <FaMagnifyingGlass className="sm:cursor-pointer lg:text-black lg:bg-white text-white bg-blue-900 size-8 p-2 rounded-full" />
              <input
                type="text"
                name=""
                id="search"
                placeholder="Search for anything"
                className="focus-visible:outline-0 flex-1"
              />
            </label>
            <select name="" id="" className="lg:block hidden">
              <option value="">All Category</option>
            </select>
          </div>
          {/* Buttons */}
          <div className="gap-2 mx-2 lg:flex hidden">
            <button className="bg-green-900 text-white rounded-full py-2 px-6 sm:px-12">
              Search
            </button>
            <button className="hover:bg-green-900 hover:text-white rounded-full py-2 px-6 sm:px-12">
=======
import { AiOutlineCloseCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaBars, FaBurger, FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import logoImg from "../../assets/logo.png";
import SubNavigation from "../../components/SubNavigation";

const isMobileOrTabletChecker = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|iphone|ipad|ipod|blackberry|opera mini|iemobile|mobile/i.test(
    userAgent
  );
};

const Navbar = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  useEffect(() => {
    setIsMobileOrTablet(isMobileOrTabletChecker());
  }, []);

  return (
    <nav className="container mx-auto">
      {/* Top */}
      {!isMobileOrTablet && (
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
      )}

      {/* Middle */}

      {!isMobileOrTablet && (
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
              <FaMagnifyingGlass className="p-2 text-white rounded-full bg-primary sm:cursor-pointer min-w-7 min-h-7" />
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
>>>>>>> e612585b13634ad939ffdcdf9a14b757c66d22c7
              Advance
            </button>
          </div>
        </div>
<<<<<<< HEAD

        {/* Down */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-5 justify-center border border-[rgba(209, 209, 209, 1)] px-4 py-2">
          <Link>
            <p>Explore(New!)</p>
          </Link>
          <Link>
            <p>Saved</p>
          </Link>
          <Link>
            <p>Electronics</p>
          </Link>
          <Link>
            <p>Motors</p>
          </Link>
          <Link>
            <p>Fashion</p>
          </Link>
          <Link>
            <p>Collectibles Art</p>
          </Link>
          <Link>
            <p>Sports</p>
          </Link>
          <Link>
            <p>Health & Beauty</p>
          </Link>
          <Link>
            <p>Industrial equipment</p>
          </Link>
          <Link>
            <p>Home & Garden</p>
          </Link>
          <Link>
            <p>Dells</p>
          </Link>
          <Link>
            <p>Sells</p>
          </Link>
        </div>
      </div>
    </section>
=======
      )}
      {/* Bottom */}

      {!isMobileOrTablet && <SubNavigation />}

      {/* mobile and tablet  */}

      {isMobileOrTablet && (
        <>
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
              className="flex-grow border outline-none border-primary"
            />
            <FaMagnifyingGlass className="p-2 text-white bg-primary sm:cursor-pointer min-w-7 min-h-7 " />
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
        </>
      )}
    </nav>
>>>>>>> e612585b13634ad939ffdcdf9a14b757c66d22c7
  );
};

export default Navbar;
