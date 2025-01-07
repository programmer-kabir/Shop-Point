import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const SubNavigation = () => {
  const menuRef = useRef(null);

  // Scroll the menu left or right
  const scrollMenu = (direction) => {
    if (menuRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      const maxScrollLeft =
        menuRef.current.scrollWidth - menuRef.current.clientWidth;

      if (
        direction === "left" &&
        menuRef.current.scrollLeft + scrollAmount < 0
      ) {
        menuRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else if (
        direction === "right" &&
        menuRef.current.scrollLeft + scrollAmount > maxScrollLeft
      ) {
        menuRef.current.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      } else {
        menuRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };


  return (
    <div className="relative hidden py-2 md:block w-[95%] mx-auto">
      {/* Sub-navigation menu */}
      <div
         ref={menuRef}
        className="flex w-full gap-3 items-center overflow-x-auto text-sm md:gap-5 whitespace-nowrap scroll-smooth no-scrollbar"
      >
        <Link>
        Explore (New!)
        </Link>
        <Link className="">Saved</Link>
        <Link className="primaryColor">Motors</Link>
        <Link className="primaryColor">Fashion</Link>
        <Link className="primaryColor">Collectibles Art</Link>
        <Link className="primaryColor">Sports </Link>
        <Link className="primaryColor">Health & Beauty</Link>
        <Link className="primaryColor">Industrial Equipment</Link>
        <Link className="primaryColor">Home & Garden</Link>
        <Link className="primaryColor">Deals</Link>
        <Link className="primaryColor">Sells</Link>
      </div>

      {/* Scroll Buttons */}
      <button
        className="absolute left-0 z-10 p-2 xl:hidden -translate-y-1/2 bg-white rounded-full top-1/2 "
        onClick={() => scrollMenu("left")}
      >
        <AiOutlineLeft />
      </button>
      <button
        className="absolute right-0 z-10 p-2 xl:hidden -translate-y-1/2 bg-white rounded-full top-1/2 "
        onClick={() => scrollMenu("right")}
      >
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default SubNavigation;
