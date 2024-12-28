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
        <div className="flex flex-col sm:flex-row items-center justify-between border border-[rgba(209, 209, 209, 1)] px-4 py-2">
          {/* Left Side */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 items-center">
            <div className="flex items-center gap-1 font-bold">
              <p className="mr-1">Hi! </p>
              <p className="text-green-900 ">
                <Link>Sign in </Link>
              </p>
              <p>or</p>
              <p className="text-green-900">
                <Link>register</Link>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
              <Link>Deil Deals</Link>
              <p>
                <Link>Help</Link> & <Link>Contact</Link>
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center">
            <div className="flex items-center gap-2">
              <p>Ship to</p>
              <p>Sell</p>
              <select name="" id="">
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
        <div className="flex flex-col sm:flex-row items-center border border-[rgba(209, 209, 209, 1)] px-4 py-2 gap-4 sm:gap-0">
          {/* Logo */}
          <div className="flex gap-3 w-44 items-center cursor-pointer">
            <img src={logoImg} alt="" />
            <div>
              <p>Shop</p>
              <p>Point</p>
            </div>
            <div>
              <IoIosArrowDown />
            </div>
          </div>
          {/* Search */}
          <div className="flex-1 border-2 py-2 px-3 rounded-full border-green-900 flex">
            <label
              className="flex flex-1 items-center gap-3 cursor-text"
              htmlFor="search"
            >
              <FaMagnifyingGlass />
              <input
                type="text"
                name=""
                id="search"
                placeholder="Search for anything"
                className="focus-visible:outline-0 flex-1"
              />
            </label>
            <select name="" id="">
              <option value="">All Category</option>
            </select>
          </div>
          {/* Buttons */}
          <div className="flex gap-2">
            <button className="bg-green-900 text-white rounded-full py-2 px-6 sm:px-12">
              Search
            </button>
            <button className="hover:bg-green-900 hover:text-white rounded-full py-2 px-6 sm:px-12">
              Advance
            </button>
          </div>
        </div>

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
  );
};

export default Navbar;
