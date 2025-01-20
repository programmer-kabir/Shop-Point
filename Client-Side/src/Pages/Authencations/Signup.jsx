import React, { useState } from "react";
import Container from "../../components/Container";
import image from "../../../public/images/sign-up-form-button-graphic-concept.jpg";

const Signup = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <Container>
       <div className="space-y-3 pb-5 text-center mx-auto w-full">
       <h2 className="text-3xl font-semibold ">Create an account</h2>
      <div className="border border-[#28A745] max-w-sm p-1 rounded-full flex">
        <button
          className={`flex-1 px-5 py-2 rounded-full transition-all duration-300 ease-in-out ${
            activeTab === "personal" ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={() => setActiveTab("personal")}
        >
          Personal
        </button>
        <button
          className={`flex-1 px-5 py-2 rounded-full transition-all duration-300 ease-in-out ${
            activeTab === "business" ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={() => setActiveTab("business")}
        >
          Business
        </button>
      </div>
       </div>

      <section className="flex  gap-10 transition-all duration-500 ease-in-out">
        {/* Left Side (Image) */}
        <div
          className={`w-full sm:w-1/2 transition-all duration-500 ease-in-out ${
            activeTab === "personal" ? "order-1" : "order-2"
          }`}
        >
          <img src={image} alt="Tab Image" className="w-full h-auto" />
        </div>

        {/* Right Side (Content) */}
        <div
          className={`w-full sm:w-1/2 px-2 transition-all duration-500 ease-in-out ${
            activeTab === "personal" ? "order-2" : "order-1"
          }`}
        >
          {activeTab === "personal" ? (
            <>
              <h2 className="text-2xl font-semibold">Personal Account</h2>
              <div>
                {/* Nmae */}

<label
  htmlFor="Username"
  className="relative py-2 block rounded-md border border-gray-200 shadow-sm focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-300"
>
  <input
    type="text"
    id="Username"
    className="peer text-xl w-full px-5 border-none bg-transparent placeholder-transparent outline-none"
    placeholder="Username"
  />

  <span
    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
  >
    Username
  </span>
</label>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-semibold">Business Content</h2>
              <p>Continue to register as a business or nonprofit, or if you plan to sell a large number of goods.</p>
            </>
          )}
        </div>
      </section>
    </Container>
  );
};

export default Signup;
