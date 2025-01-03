import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Social = ({ icon , url}) => { 
  let icon_name;
  switch (icon) {
    case "facebook":
      icon_name = <FaFacebook />;
      break;

    case "twitter":
      icon_name = <FaTwitter />;
      break;

    case "instagram":
      icon_name = <FaInstagram />;
      break;

    case "linkedin":
      icon_name = <FaLinkedinIn />;
      break;
  }

  return (
    <>
      <Link
        to={url}
        className="bg-white w-[51px] h-[51px] md:w-[31px] md:h-[31px] rounded-full flex justify-center items-center "
      >
        {icon_name}
      </Link>
    </>
  );
};

export default Social;
