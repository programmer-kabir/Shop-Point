import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "Parts & Accessories",
  "ATV, Side-by-Side & UTV Parts & Accessories",
  "Apparel, Protective Gear & Merchandise",
  "Aviation Parts & Accessories",
  "Boat Parts",
  "Car & Truck Parts & Accessories",
  "Commercial Truck Parts",
  "Golf Cart Parts & Accessories",
  "In-Car Technology, GPS & Security",
  "Manuals & Literature",
  "Motorcycle & Scooter Parts & Accessories Other",
  "Other Vehicle Parts",
  "Performance & Racing Parts",
  "Personal Watercraft Parts",
  "RV, Trailer & Camper Parts & Accessories",
  "Salvage Parts Cars",
  "Services & Installation",
  "Sidecars",
  "Snowmobile Parts",
  "Wholesale Lots",
];

const CategoryList = () => {
  return (
    <div className="my-2 text-[#4B4B4B]">
      <div className="mb-4">
        <h3 className="font-semibold ">Shop By Category</h3>
        <p className="font-normal">Shop point</p>
      </div>
      <div className="text-sm">
        {categories.map((category, index) => (
          <Link className="block py-1 my-1 font-normal" key={index}>
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
