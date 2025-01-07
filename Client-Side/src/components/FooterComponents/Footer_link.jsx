import React from "react";
import { Link } from "react-router-dom";

const Footer_link = ({ menu, url }) => {
  return (
    <p className="flex flex-col">
      <Link to={url} className="text-white text-base ">
        {menu}
      </Link>
    </p>
  );
};

export default Footer_link;
