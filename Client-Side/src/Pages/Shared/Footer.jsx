import { Mail, MapPinPlus, Phone } from "lucide-react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1F7634] rounded">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center items-center gap-x-2 text-teal-600 sm:justify-start">
                <img src={logo} alt="logo" />
                <h2 className="text-white text-2xl md:text-4xl font-bold">
                  Shop Point
                </h2>
              </div>

              <p className="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                <li className="bg-white p-2 rounded-full">
                  <FaFacebook className="text-2xl text-green-600" />
                </li>
                <li className="bg-white p-2 rounded-full">
                  <BsTwitterX className="text-2xl text-green-600" />
                </li>
                <li className="bg-white p-2 rounded-full">
                  <FaInstagram className="text-2xl text-green-600" />
                </li>
                <li className="bg-white p-2 rounded-full">
                  <FaYoutube className="text-2xl text-green-600" />
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-200">About Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li className="text-sm text-gray-300">Company History</li>
                  <li className="text-sm text-gray-300">Meet the Team</li>
                  <li className="text-sm text-gray-300">Employee Handbook</li>
                  <li className="text-sm text-gray-300">Careers</li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-200">
                  Our Services
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li className="text-sm text-gray-300">Web Development</li>
                  <li className="text-sm text-gray-300">Web Design</li>
                  <li className="text-sm text-gray-300">Marketing</li>
                  <li className="text-sm text-gray-300">Google Ads</li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-200">
                  Helpful Links
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li className="text-sm text-gray-300">FAQs</li>
                  <li className="text-sm text-gray-300">Support</li>

                  <li className="flex items-center gap-x-2">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                    </span>
                    <span className="text-sm text-gray-300">Live Chat</span>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-200">Contact Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li className="flex items-center gap-x-2">
                    <Mail className="text-sm text-gray-300" />
                    <span className="flex-1 text-gray-300">john@doe.com</span>
                  </li>

                  <li className="flex items-center gap-x-2">
                    <Phone className="text-sm text-gray-300" />
                    <span className="flex-1 text-gray-300">0123456789</span>
                  </li>

                  <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                    <MapPinPlus className="text-sm text-gray-300" />

                    <address className="-mt-0.5 flex-1 not-italic text-gray-300">
                      213 Lane, London, United Kingdom
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
