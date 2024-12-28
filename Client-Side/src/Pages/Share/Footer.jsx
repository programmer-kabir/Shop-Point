import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { MdOutlineMailOutline } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <footer>
        {/* footer top */}
        <div className="bg-customGreen ">
          <div className="container grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-14 pt-[84px] pb-[84px] text-white">
            <div>
              <a href="">
                <img
                  src="/images/logo.png"
                  alt=""
                  className="w-[103px] mb-[14px] "
                />
              </a>
              <p className="mb-8 mt-8">
                Lorem Sohel Rana sit amet, consectetur adipiscing elit. Ut elit
                tellus luctus.
              </p>
              <ul className="flex gap-2 ">
                <li>
                  <Link
                    to=""
                    className="bg-white w-[51px] h-[51px] rounded-full flex justify-center items-center"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: "#1F7634" }}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="bg-white w-[51px] h-[51px] rounded-full flex justify-center items-center"
                  >
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      style={{ color: "#1F7634" }}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="bg-white w-[51px] h-[51px] rounded-full flex justify-center items-center"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ color: "#1F7634" }}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="bg-white w-[51px] h-[51px] rounded-full flex justify-center items-center"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      style={{ color: "#1F7634" }}
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-[14px] font-bold text-2xl tracking-[4%] ">
                About
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="">Company info</a>
                </li>
                <li>
                  <a href="">News </a>
                </li>
                <li>
                  <a href="">investors</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Goverment relations</a>
                </li>
                <li>
                  <a href="">Adverties with us Polices</a>
                </li>
                <li>
                  <a href="">verified Rights Owner (SR) Program</a>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h4 className="text-white mb-[14px] font-bold text-2xl tracking-[4%]">
                  Sell
                </h4>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="">Start selling</a>
                  </li>
                  <li>
                    <a href="">Learn to sell </a>
                  </li>
                  <li>
                    <a href="">Affiliates</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white mb-[14px] mt-[32px] font-bold text-2xl tracking-[4%]">
                  Tools & apps
                </h4>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="">Developers</a>
                  </li>
                  <li>
                    <a href="">Security </a>
                  </li>
                  <li>
                    <a href="">Site map</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="text-white mb-[14px] font-bold text-2xl tracking-[4%]">
                Stay connected
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faFacebook} /> Facebook{" "}
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faInstagram} /> instragrum{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h4 className="text-white mb-[14px] font-bold text-2xl tracking-[4%]">
                  Help & Contact
                </h4>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href=""> Seller Inforrmation Center </a>
                  </li>
                  <li>
                    <a href=""> Contact us </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white mb-[14px] mt-[32px] font-bold text-2xl tracking-[4%]">
                  Community
                </h4>
                <div className="space-y-2">
                  {/* Email */}
                  <div className="flex items-center gap-1">
                    <MdOutlineMailOutline />
                    <p>Email@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdOutlineMailOutline />
                    <p>Email@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdOutlineMailOutline />
                    <p>Email@gmail.com</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="">
                      <FontAwesomeIcon icon={faPhone} /> 01922272631{" "}
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FontAwesomeIcon icon={faEnvelope} />{" "}
                      sohel672rana@gmail.com{" "}
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> Ramgoti
                      Alexander Jela Laxmipur{" "}
                    </a>
                  </li>
                  <li>
                    <a href="">Sunday: 08:00 AM - 10:00 PM </a>
                  </li>
                  <li>
                    <a href="">Monday - Friday: 06:00 AM - 12:00 AM</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white mb-[14px] mt-[32px] font-bold text-2xl tracking-[4%]">
                  Shop Point
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* footer bottom */}
        <div className="container pt-4 pb-4 ">
          <p className="text-center font-inter ">
            Copyright © 2024 Rometheme. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
