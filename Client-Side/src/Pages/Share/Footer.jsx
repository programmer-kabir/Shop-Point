import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Social from "../../components/Social";
import Footer_link from "../../components/Footer_link";
const Footer = () => {
  return (
    <>
      <footer>
        {/* footer top */}
        <div className="bg-[#1F7634]">
          <div className="container mx-auto grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-14 pt-10 pb-4  ">
            <div>
              <a href="">
                <img src="/images/logo.png" alt="" className="w-7/12	" />
              </a>
              <p className="mb-8 mt-8 text-white">
                Lorem Sohel Rana sit amet, consectetur adipiscing elit. Ut elit
                tellus luctus.
              </p>

              <div className="flex gap-2 ">
                <Social icon="facebook" />
                <Social icon="twitter" />
                <Social icon="linkedin" />
                <Social icon="instagram" />
              </div>
            </div>

            <div>
              <Footer_link
                title="About"
                menu="Company info,News, investors, Careers, Goverment relations, Adverties with us Polices, verified Rights Owner (SR) Program"
              />
            </div>

            <div>
              <div>
                <Footer_link
                  title="Sell"
                  menu="Start selling,Learn to sell, Affiliates"
                />
              </div>
              <div>
                <Footer_link
                  title="Tools & apps"
                  menu="Developers,Security,Site map"
                />
              </div>
            </div>
            <div>
              <Footer_link
                title="Stay Connected"
                menu="Developers,Security,Site map"
              />
            </div>
            <div>
              <div>
                <Footer_link
                  title="Help & Contact"
                  menu="Seller Information Center, Contact us"
                />
              </div>
              <div>
                <Footer_link title="Community" menu="" />

                <div className="space-y-2">
                  {/* Email */}
                  <div className="flex items-center gap-1">
                    <MdOutlineMailOutline className="text-white" />
                    <p className="text-white">sohel672rana@gmail.com </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-white" />
                    <p className="text-white">Alexander Jela Laxmipur</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="text-white" />
                    <p className="text-white">Sunday: 08:00 AM - 10:00 PM</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="text-white" />
                    <p className="text-white">
                      Monday - Friday: 06:00 AM - 12:00 AM
                    </p>
                  </div>
                </div>
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
        <div className="container mx-auto py-4 ">
          <p className="text-center font-inter ">
            Copyright © 2024 Rometheme. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
