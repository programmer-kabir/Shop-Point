import React from "react";
import { useForm } from "react-hook-form";
import { Info } from "lucide-react";
import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-6 bg-white px-8 py-6 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="mt-4 text-2xl md:text-4xl/relaxed font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            New to eBay?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-600 hover:text-blue-500 underline transition-colors"
            >
              Create account
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div className="rounded-md shadow-sm space-y-4">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <IoMailSharp className="h-5 w-5 text-gray-500" />
              </div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                className={`appearance-none rounded-lg block w-full pl-10 px-3 py-2.5 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition-colors`}
                placeholder="Email or username"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm sm:text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Continue
          </button>

          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-50 text-gray-500 font-medium">
                or
              </span>
            </div>
          </div>

          <div className="space-y-3 mt-6">
            {[
              { icon: BsGoogle, name: "Google", color: "text-red-400" },
              { icon: FaFacebook, name: "Facebook", color: "text-blue-600" },
              { icon: FaApple, name: "Apple", color: "text-gray-900" },
            ].map((provider) => (
              <button
                key={provider.name}
                type="button"
                className="w-full flex items-center justify-center px-4 py-3 border border-green-300 rounded-lg shadow-sm bg-green-100 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label={`Sign in with ${provider.name}`}
              >
                <provider.icon className={`h-5 w-5 mr-2 ${provider.color}`} />
                <span className="hidden sm:inline">
                  Continue with {provider.name}
                </span>
                <span className="sm:hidden">{provider.name}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-start mt-4 space-x-2">
            <input
              {...register("staySignedIn")}
              id="stay-signed-in"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors"
            />
            <label
              htmlFor="stay-signed-in"
              className="block text-sm text-gray-900"
            >
              Stay signed in
            </label>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="More information about staying signed in"
            >
              <Info className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
