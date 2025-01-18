import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../Redux/Categories/CategorySlice";

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

  const dispatch = useDispatch();
  const { isLoading, categories, error } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
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
        {isLoading && <p>Loading...</p>}  {/*todo when loading set*/}
        {!isLoading &&
          categories.map((category) => (
            <Link
              key={category._id}
              to={`/products?category=${encodeURIComponent(category.category)}`}
              className="primaryColor"
            >
              {category.category}
            </Link>
          ))}
     
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
