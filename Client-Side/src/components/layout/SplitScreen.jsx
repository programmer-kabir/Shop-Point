import React from "react";

const SplitScreen = ({
  children,
  leftWidthClass = "w-1/2",
  rightWidthClass = "w-1/2",
}) => {
  const [categoryList, right] = children;
  console.log(children);
  return (
    <div className="flex">
      <div className={`hidden sm:block ${leftWidthClass}`}>{categoryList}</div>
      <div className={`w-full sm:${rightWidthClass}`}>{right}</div>
    </div>
  );
};

export default SplitScreen;
