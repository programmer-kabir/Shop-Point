import React, { useState } from "react";
import Container from "../../components/Container";
import image from "../../../public/images/sign-up-form-button-graphic-concept.jpg";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";
import useAuth from "../../Utils/Hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa"; // ✅ Import Spinner Icon

import axios from "axios";
const Signup = () => {
  const { RegisterUser, loading, setLoading, updateUserProfile, user } = useAuth();
  console.log(user);
  const [activeTab, setActiveTab] = useState("personal");
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const name = data.firstName + " " + data.lastName;
    setLoading(true); // Start loading before async operations
  
    try {
      // Register user
      const userCredential = await RegisterUser(data.email, data.password);
      const user = userCredential.user;
  
      // Update profile
      await updateUserProfile(name);
  
      // Send user data to backend
      const response = await axios.post("http://localhost:3000/users", data);
  console.log(response.data);
  toast.success("user create success")
      setLoading(false); // Stop loading after all operations are done
    } catch (error) {
      toast.error("Error in user registration:", error);
      setLoading(false);
    }
  };
  
  return (
    <Container>
      <div className="space-y-3 pb-5 text-center mx-auto w-full">
        <h2 className="text-3xl font-semibold ">Create an account</h2>
        <div className="border border-[#28A745] max-w-sm p-1 rounded-full flex">
          <button
            className={`flex-1 px-5 py-2 rounded-full transition-all duration-300 ease-in-out ${
              activeTab === "personal"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveTab("personal")}
          >
            Personal
          </button>
          <button
            className={`flex-1 px-5 py-2 rounded-full transition-all duration-300 ease-in-out ${
              activeTab === "business"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveTab("business")}
          >
            Business
          </button>
        </div>
      </div>

      <section className="flex  gap-10 transition-all duration-500 ease-in-out py-10">
        {/* Left Side (Image) */}
        <div
          className={`w-full sm:w-1/2 transition-all duration-500 ease-in-out ${
            activeTab === "personal" ? "order-1" : "order-2"
          }`}
        >
          <img
            src={image}
            alt="Tab Image"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Side (Content) */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`w-full sm:w-1/2 px-2 transition-all duration-500 ease-in-out ${
            activeTab === "personal" ? "order-2" : "order-1"
          }`}
        >
          {activeTab === "personal" ? (
            <>
              <h2 className="text-2xl font-semibold pb-3">Personal Account</h2>
              <div className="flex items-center justify-center gap-4 w-full">
                <div className="w-1/2">
                  <label
                    htmlFor="firstName"
                    className="relative  py-2 block rounded-md border border-gray-500 shadow-sm focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-800"
                  >
                    <input
                      type="text"
                      id="firstName"
                      {...register("firstName", {
                        required: "Give me your first Name",
                      })}
                      className="peer text-base py-1 w-full px-4 border-none bg-transparent placeholder-transparent outline-none"
                      placeholder="First Name"
                    />

                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      First Name
                    </span>
                  </label>
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                {/* Last Name */}
                <div className="w-1/2">
                  <label
                    htmlFor="lastName"
                    className="relative  py-2 block rounded-md border border-gray-500 shadow-sm focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-800"
                  >
                    <input
                      type="text"
                      id="lastName"
                      {...register("lastName", {
                        required: "Give me your Last Name",
                      })}
                      className="peer text-base py-1 w-full px-4 border-none bg-transparent placeholder-transparent outline-none"
                      placeholder="Last Name"
                    />

                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Last Name
                    </span>
                  </label>
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-5 pt-4">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="relative py-2 block rounded-md border border-gray-500 shadow-sm focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-800"
                  >
                    <input
                      type="text"
                      id="email"
                      {...register("email", {
                        required: "Give me your valid one Email",
                      })}
                      className="peer text-base py-1 w-full px-4 border-none bg-transparent placeholder-transparent outline-none"
                      placeholder="Enter Your Email"
                    />

                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Enter Your Email
                    </span>
                  </label>
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="relative py-2 block rounded-md border border-gray-500 shadow-sm focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-800"
                  >
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      {...register("password", {
                        required: "Give me strong password",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      className="peer text-base py-1 w-full px-4 border-none bg-transparent placeholder-transparent outline-none pr-10"
                      placeholder="Password"
                    />
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Password
                    </span>
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-black"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash size={18} />
                      ) : (
                        <FaEye size={18} />
                      )}
                    </button>
                  </label>
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              <p className="primaryColor text-[11px] py-4 pb-5">
                By choosing to create a personal account, you confirm your
                agreement to our{" "}
                <Link to="/user-agreement" className="text-blue-600 underline">
                  User Agreement
                </Link>{" "}
                and acknowledge that you have read our{" "}
                <Link to="/privacy-policy" className="text-blue-600 underline">
                  User Privacy Notice
                </Link>
                .
              </p>
              <button
                type="submit"
                className="primaryButton w-full py-3 text-base font-medium"
              >
                {loading ? (
                  <div className="flex disable items-center justify-center gap-1">
                  <FaSpinner className="text-white  animate-spin text-2xl" />
                  Create Personal Account
                  </div>

                ) : (
                  "Create Personal Account"
                )}
              </button>

              <div className="pt-3 text-[15px] primaryColor  mx-auto">
                <span className="flex items-center">
                  <span className="h-px flex-1 bg-[#4b4b4b]"></span>
                  <span className="shrink-0 px-2">or continue with</span>
                  <span className="h-px flex-1 bg-[#4b4b4b]"></span>
                </span>
                <div className="flex items-center justify-between gap-5 mt-3">
                  <button className="w-1/2 border border-[#8f8f8f] flex items-center text-black font-semibold text-base justify-center gap-2 hover:bg-slate-100 px-6 py-3 rounded-full">
                    <FcGoogle size={24} />
                    Google
                  </button>
                  <button className="border w-1/2 border-[#8f8f8f] flex items-center text-black font-semibold text-base justify-center gap-2 hover:bg-slate-100 px-6 py-3 rounded-full">
                    <MdOutlineFacebook color="#1877F2" size={24} />
                    Facebook
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-semibold">Business Content</h2>
              <p className="text-[14px] pt-2 font-normal">
                Continue to register as a{" "}
                <span className="font-semibold">business or nonprofit,</span> or
                if you plan to sell a large number of goods.
              </p>
              {/* Input */}
              <div className="w-full pt-5 space-y-5">
                {/* Name */}
                <label
                  htmlFor="businessName"
                  className="relative py-2 block rounded-md border border-gray-500 shadow-sm focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-800"
                >
                  <input
                    type="text"
                    id="businessName"
                    className="peer text-base py-1 w-full px-4 border-none bg-transparent placeholder-transparent outline-none"
                    placeholder="Business Name"
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Business Name
                  </span>
                </label>
                {/* Email */}
                <label
                  htmlFor="businessName"
                  className="relative py-2 block rounded-md border border-gray-500 shadow-sm focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-800"
                >
                  <input
                    type="text"
                    id="businessName"
                    className="peer text-base py-1 w-full px-4 border-none bg-transparent placeholder-transparent outline-none"
                    placeholder="Business Name"
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Business Name
                  </span>
                </label>
                {/* Password */}
                <label
                  htmlFor="password"
                  className="relative py-2 block rounded-md border border-gray-500 shadow-sm focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-800"
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="peer text-base py-1 w-full px-4 border-none bg-transparent placeholder-transparent outline-none pr-10"
                    placeholder="Password"
                  />
                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Password
                  </span>
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-black"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>
                </label>
              </div>
            </>
          )}
        </form>
      </section>
    </Container>
  );
};

export default Signup;
