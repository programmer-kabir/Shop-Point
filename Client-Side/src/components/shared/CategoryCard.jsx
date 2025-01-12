import React from "react";

const CategoryCard = ({ category: { categoryName, img } }) => {
  return (
    <div className="bg-[#DFF9E4] rounded-md p-3 w-[180px]">
      <img src={`${img}`} alt="" />
      <h3 className="text-center text-[#4B4B4B] mt-1">{categoryName}</h3>
    </div>
  );
};

export default CategoryCard;
