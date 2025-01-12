import React from "react";

const SpecialCategoryCard = ({ item: { categoryName, img } }) => {
  return (
    <div className="bg-[#E0E0E0] rounded-md max-w-[400px] p-4 hover:shadow-lg hover:scale-105 duration-300">
      <h3 className="text-base font-bold sm:text-xl md:text-2xl">
        {categoryName}
      </h3>
      <div className="grid items-center grid-cols-2 cursor-pointer group">
        <img
          className="block transition-all duration-300 group-hover:translate-x-3"
          src="/images/icon/arrow-right.png"
          alt=""
        />
        <img
          className="block object-contain max-w-full duration-300 aspect-square group-hover:scale-110"
          src={`${img}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default SpecialCategoryCard;
