import React from "react";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
const Navbar = () => {
  return (
    <section className="">
      <div>
        {/* Top */}
        <div className="flex items-center justify-between border border-[rgba(209, 209, 209, 1)] px-4 py-2" >
          {/* Left Side */}
          <div className="flex gap-7 items-center">
            <div className="flex items-center gap-1">
              <p className="mr-1">Hi! </p>
              <Link>Sign in </Link>
              <p>or</p>
              <Link>register</Link>
            </div>
            <div className="flex items-center gap-5">
              <Link>Dail Deals</Link>
              <p>
                <Link>Help</Link> & <Link>Contact</Link>
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex gap-10 items-center">
            <div className="flex items-center gap-2">
              <p>Hi!</p>
              <Link>Sign in </Link>
              <p>or</p>
              <Link>register</Link>
            </div>
            <div className="flex items-center gap-5">
            <IoMdNotificationsOutline size={20}/>
             
            </div>
          </div>
        </div>
        {/* Middle */}
        <div className="flex items-center justify-between border border-[rgba(209, 209, 209, 1)] px-4 py-2">
          {/* Logo */}
          <div>
            <p>Logo Here</p>
          </div>
          {/* Search */}
          <div>Search here</div>
          {/* Buton */}
          <div>button here</div>
        </div>
        {/* Down */}
        <div className="flex items-center justify-between border border-[rgba(209, 209, 209, 1)] px-4 py-2">
          <Link>a</Link>
          <Link>a</Link>
          <Link>a</Link>
          <Link>a</Link>
          <Link>a</Link>
          <Link>a</Link>
          <Link>a</Link>
          <Link>a</Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
