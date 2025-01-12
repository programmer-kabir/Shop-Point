import React from "react";
import { Link } from "react-router-dom";

const interests = [
  "Gadgets",
  "Hi End Audio",
  "Home Theater",
  "PC Gaming",
  "Photography",
  "Robotics and Drones",
  "Smart Home",
  "Virtual Reality",
];
const InterestList = () => {
  return (
    <div className="my-2 text-[#4B4B4B]">
      <div className="mb-4">
        <h3 className="font-semibold ">Shop By Interest</h3>
      </div>
      <div className="text-sm">
        {interests.map((interest, index) => (
          <Link className="block py-1 my-1 font-normal" key={index}>
            {interest}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InterestList;
