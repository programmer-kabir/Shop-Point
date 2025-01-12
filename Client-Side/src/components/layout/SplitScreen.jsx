import React from "react";

const SplitScreen = ({
  children,
  leftWidthClass = "w-1/2",
  rightWidthClass = "w-1/2",
}) => {
  const [left, right] = children;

  return (
    <div className="flex gap-2">
      <div className={`hidden sm:block ${leftWidthClass}`}>{left}</div>
      <div className={`w-full sm:${rightWidthClass}`}>{right}</div>
    </div>
  );
};

export default SplitScreen;
