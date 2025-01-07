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
    <div className="relative hidden py-2 md:block">
      {/* Sub-navigation menu */}
      <div
        ref={menuRef}
        className="flex items-center gap-2 px-4 overflow-x-auto text-sm md:gap-3 whitespace-nowrap scroll-smooth no-scrollbar"
      >
        <Link className="p-2 bg-gray-200 rounded-md">
          Books, Hobbies & Education
        </Link>
        <Link className="p-2 bg-gray-200 rounded-md">Electronics</Link>
        <Link className="p-2 bg-gray-200 rounded-md">Motors</Link>
        <Link className="p-2 bg-gray-200 rounded-md">Fashion</Link>
        <Link className="p-2 bg-gray-200 rounded-md">Collectibles Art</Link>
        <Link className="p-2 bg-gray-200 rounded-md">Sports & Outdoors</Link>
        <Link className="p-2 bg-gray-200 rounded-md">Health & Beauty</Link>
        <Link className="p-2 bg-gray-200 rounded-md">Industrial Equipment</Link>
        <Link className="p-2 bg-gray-200 rounded-md">Home & Garden</Link>
        <Link className="p-2 bg-gray-200 rounded-md">Food & Beverages</Link>
      </div>

      {/* Scroll Buttons */}
      <button
        className="absolute left-0 z-10 p-2 -translate-y-1/2 bg-white rounded-full top-1/2 "
        onClick={() => scrollMenu("left")}
      >
        <AiOutlineLeft />
      </button>
      <button
        className="absolute right-0 z-10 p-2 -translate-y-1/2 bg-white rounded-full top-1/2 "
        onClick={() => scrollMenu("right")}
      >
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default SubNavigation;
