import React from "react";
import SpecialCategoryCard from "../../components/specific/SpecialCategoryCard";

const specialCategories = [
  {
    categoryName: "Smartphones & Smartwatches",
    img: "/images/category/mobile.png",
  },
  {
    categoryName: "smartphones  high quality",
    img: "/images/category/smart-phone.png",
  },
  {
    categoryName: "computer and accessories",
    img: "/images/category/accessories.png",
  },
];

const SpecialCategories = () => {
  return (
    <section className="grid justify-center grid-cols-2 gap-2 my-4 md:grid-cols-3 md:gap-4">
      {specialCategories.map((item, index) => (
        <SpecialCategoryCard key={index} item={item} />
      ))}
    </section>
  );
};

export default SpecialCategories;
