import React , {useState} from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Social from "../../components/Social";
import Footer_link from "../../components/Footer_link";
const Footer = () => {

  const [dropdown, setDropdown] = useState(false);
  const social = [
    { url: "https://www.facebook.com/", icon: "facebook" },
    { url: "https://www.twitter.com/", icon: "twitter" },
    { url: "https://www.instagram.com/", icon: "instagram" },
    { url: "https://www.linkedin.com/", icon: "linkedin" },
  ];

  const about = [
    { title: "Company info", url: "/company-info" },
    { title: "News", url: "/News" },
    { title: "investors", url: "/investors" },
    { title: "Careers", url: "/Careers" },
    { title: "Goverment relations", url: "/Goverment-relations" },
    { title: "Adverties with us Polices", url: "/Adverties-with-us-Polices" },
    {
      title: "verified Rights Owner (SR) Program",
      url: "/verified-Rights-Owner-SR-Program",
    },
  ];

  const sell = [
    { title: "Start selling", url: "/start-selling" },
    { title: "Learn to sell", url: "/learn-to-sell" },
    { title: "Affiliates", url: "/Affiliates" },
  ];

  const Tools = [
    { title: "Developers", url: "/Developers" },
    { title: "Security", url: "/Security" },
    { title: "Site map", url: "/Site-map" },
  ];

  const help = [
    { title: "Seller Information Center", url: "/Seller-Information-Center" },
    { title: "Contact us", url: "/Contact-us" },
  ];

  const toggleDropdown = ()=>{
    setDropdown(!dropdown)
  }

  return (
    <>
      <footer>
        {/* footer top */}
        <div className="bg-[#1F7634]">
          <div className="text-center lg:text-left md:text-left container mx-auto grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-14 lg:gap-6 pt-10 pb-4  px-7 pb-20 lg:px-4">
            <div className="">
              <a href="">
                <img
                  src="/images/logo.png"
                  alt=""
                  className="w-4/12 lg:w-7/12 md:w-7/12  mx-auto	lg:ml-0 md:ml-0"
                />
              </a>
              <p className="mb-8 mt-8 md:text-sm xl:text-sm lg:text-xs text-white">
                Lorem Sohel Rana sit amet, consectetur adipiscing elit. Ut elit
                tellus luctus.
              </p>

              <div className="flex items-center justify-center gap-2 lg:justify-start lg:items-start md:justify-start md:items-start">
                {social.map((item, index) => (
                  <Social key={index} icon={item.icon} url={item.url} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white mb-[14px] font-bold xl:text-2xl lg:text-lg tracking-[4%] ">
                About
              </h4>
              {about.map((item, index) => (
                <Footer_link key={index} menu={item.title} url={item.url} />
              ))}
            </div>

            <div>
              <div>
                <h4 className="text-white mb-[14px] font-bold xl:text-2xl  lg:text-lg tracking-[4%] ">
                  Sell
                </h4>
                {sell.map((item, index) => (
                  <Footer_link key={index} menu={item.title} url={item.url} />
                ))}
              </div>

              <div className="mt-7">
                <h4 className="text-white mb-[14px] font-bold xl:text-2xl  lg:text-lg tracking-[4%] ">
                  Tools & apps
                </h4>
                {Tools.map((item, index) => (
                  <Footer_link key={index} menu={item.title} url={item.url} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white mb-[14px] font-bold xl:text-2xl  lg:text-lg tracking-[4%] ">
                Stay Connected
              </h4>
              {Tools.map((item, index) => (
                <Footer_link key={index} menu={item.title} url={item.url} />
              ))}
            </div>
            <div>
              <div>
                <h4 className="text-white mb-[14px] font-bold xl:text-2xl  lg:text-lg tracking-[4%] ">
                  Help & Contact
                </h4>

                {help.map((item, index) => (
                  <Footer_link key={index} menu={item.title} url={item.url} />
                ))}
              </div>

              <div className="mt-7">
                <h4 className="text-white mb-[14px] font-bold xl:text-2xl  lg:text-lg tracking-[4%] ">
                  Community
                </h4>

                <div className="space-y-2">
                  {/* Email */}
                  <div className="flex items-center gap-1">
                    <MdOutlineMailOutline className="text-white" />
                    <p className="text-white md:text-sm lg:text-xs xl:text-lg">
                      sohel672rana@gmail.com{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-white" />
                    <p className="text-white md:text-sm lg:text-xs xl:text-lg">
                      Alexander Jela Laxmipur
                    </p>
                  </div>
                  <div className="flex items-center md:items-start gap-1">
                    <FaClock className="text-white" />
                    <p className="text-white md:text-sm lg:text-xs xl:text-lg">
                      Sunday: 08:00 AM - 10:00 PM
                    </p>
                  </div>
                  <div className="flex items-center md:items-start gap-1">
                    <FaClock className="text-white" />
                    <p className="text-white md:text-sm lg:text-xs xl:text-lg">
                      Monday - Friday: 06:00 AM - 12:00 AM
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-white mb-[14px] mt-[32px] font-bold lg:text-lg xl:text-2xl  tracking-[4%]">
                  Shop Point
                </h4>

                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md focus:outline-none"
                    onClick={toggleDropdown}
                  >
                   
                    <img src="images/bd.png" alt=""  />
                    <span>Bangladesh</span>
                    <svg
                      className="w-4 h-4 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* dropdown */}
                  {
                    dropdown && (
                      <div
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg"
         
        >
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Option 1
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Option 2
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Option 3
          </a>
        </div>
                    )
                  }
                </div>
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
