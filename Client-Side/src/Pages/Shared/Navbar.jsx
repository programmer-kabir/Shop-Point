import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const primaryItems = [
    { text: "Explore(New!)", link: "/" },
    { text: "Saved", link: "/saved" },
    { text: "Electronics", link: "/electronics" },
  ];

  const secondaryItems = [
    { text: "Motors", link: "/motors" },
    { text: "Fashion", link: "/fashion" },
    { text: "Collectibles Art", link: "/collectibles" },
    { text: "Sports", link: "/sports" },
    { text: "Health & Beauty", link: "/health" },
    { text: "Industrial equipment", link: "/industrial" },
    { text: "Home & Garden", link: "/home" },
    { text: "Dells", link: "/dells" },
    { text: "Sells", link: "/sells" },
  ];

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
                <Link to='/signin'>Sign In </Link>
              </p>
              <p className="lg:block hidden">or</p>
              <p className="text-green-900 lg:block hidden">
                <Link to='/signup'>Sign Up</Link>
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
              <select className="lg:block hidden outline-none bg-gray-200 p-2">
                <option defaultChecked>Watch list</option>
                <option value="saab">Category 1</option>
                <option value="mercedes">Category 2</option>
                <option value="audi">Category 3</option>
              </select>
              <select className="outline-none bg-gray-200 p-2">
                <option defaultChecked>My Shop</option>
                <option value="saab">Category 1</option>
                <option value="mercedes">Category 2</option>
                <option value="audi">Category 3</option>
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
            <img src={logo} alt="logo of website" />
            <div className="lg:block hidden">
              <select
                name="cars"
                id="cars"
                className="border border-[#14532da1] py-2 px-2 rounded outline-none bg-gray-200 shadow-lg"
              >
                <option defaultChecked>Shop Point</option>
                <option value="saab">Category 1</option>
                <option value="mercedes">Category 1</option>
                <option value="audi">Category 1</option>
              </select>
            </div>
          </div>
          {/* Search */}
          <div className="flex-1 border-2 py-2 px-3 rounded-full border-green-700 flex ">
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
            <select name="" id="" className="lg:block hidden outline-none">
              <option defaultChecked>All Category</option>
              <option value="saab">Category 1</option>
              <option value="mercedes">Category 1</option>
              <option value="audi">Category 1</option>
            </select>
          </div>
          {/* Buttons */}
          <div className="gap-2 mx-2 lg:flex hidden">
            <button className="bg-green-700 text-white rounded-full py-2 px-6 sm:px-12">
              Search
            </button>
            <button className="border-2 border-green-700 transition-colors hover:bg-green-700 hover:text-white rounded-full py-2 px-6 sm:px-12">
              Advance
            </button>
          </div>
        </div>

        {/* Down - Responsive Navigation */}
        <div className="border border-[rgba(209, 209, 209, 1)] px-4 py-2">
          <div className="flex  items-center gap-2 sm:gap-5 justify-center">
            {/* Always visible items */}
            {primaryItems.map((item) => (
              <Link
                key={item.text}
                to={item.link}
                className="whitespace-nowrap hover:text-green-700 transition-colors"
              >
                <p>{item.text}</p>
              </Link>
            ))}

            {/* More button for mobile */}
            <div className="relative md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <span>More</span>
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>

              {/* Dropdown menu */}
              {isOpen && (
                <div className="absolute z-50 top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <div className="py-1">
                    {secondaryItems.map((item) => (
                      <Link
                        key={item.text}
                        to={item.link}
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        <p>{item.text}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Additional items for desktop */}
            <div className="hidden md:flex md:flex-wrap md:items-center md:gap-5">
              {secondaryItems.map((item) => (
                <Link
                  key={item.text}
                  to={item.link}
                  className="whitespace-nowrap hover:text-green-700 transition-colors"
                >
                  <p>{item.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
