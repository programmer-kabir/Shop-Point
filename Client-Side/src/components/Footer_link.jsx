import React from "react";
import { Link } from "react-router-dom";

const Footer_link = ({ menu, url }) => { 

  return (
    <>
      <ul className="flex flex-col gap-3">
          <li>
            <Link to={url} className="text-white md:text-sm lg:text-xs">{menu}</Link>
          </li>
      </ul>
    </>
  );
};

export default Footer_link;
