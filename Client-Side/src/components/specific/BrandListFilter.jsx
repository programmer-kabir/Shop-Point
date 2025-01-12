import React from "react";
import { Link } from "react-router-dom";

const brands = [
  "Alienware",
  "Apple",
  "ASUS",
  "Beats by Dr. Dre",
  "Bose",
  "Canon",
  "Dell",
  "DJI",
  "Google",
  "GoPro",
  "HP",
  "Lenovo",
  "LG",
  "Microsoft",
  "Nest",
  "Nikon",
  "Samsung",
  "Sonos",
  "Sony",
];

const BrandListFilter = () => {
  return (
    <div className="my-2 text-[#4B4B4B]">
      <div className="mb-4">
        <h3 className="font-semibold ">Your favorite brands</h3>
      </div>
      <div className="text-sm">
        {brands.map((brand, index) => (
          <Link className="block py-1 my-1 font-normal" key={index}>
            {brand}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandListFilter;
