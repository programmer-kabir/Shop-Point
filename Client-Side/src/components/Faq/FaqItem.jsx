import React from "react";

const FaqItem = ({ item, activeItem, setActiveItem }) => {
  const active = activeItem == item.id;
  return (
    <div
      className={`${
        active ? "border border-[#28A745]" : ""
      } bg-[#DFF9E4] p-4 my-3 rounded-md`}
    >
      <div
        className="flex items-center justify-between py-2 cursor-pointer"
        onClick={() => setActiveItem(item.id)}
      >
        <h2
          className={`${
            active ? "text-[#FD7E14]" : "text-[#3D3D3D]"
          } text-xl font-semibold   `}
        >
          {item.question}
        </h2>
        <img
          src="/images/icon/arrow-down.png"
          alt=""
          className={`w-4 ${active ? "rotate-180" : ""}`}
        />
      </div>
      <p
        className={`${
          active ? "h-auto" : "h-0"
        } text-[#3D3D3D]  duration-300 transition-all overflow-hidden`}
      >
        {item.answer}
      </p>
    </div>
  );
};

export default FaqItem;
