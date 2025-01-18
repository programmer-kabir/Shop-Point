import React from "react";

const ProductsBanner = () => {
  return (
    <section className="grid grid-cols-1 gap-10 md:gap-2 lg:grid-cols-2 bg-[#DFF9E4] rounded-lg items-start p-5 md:p-10 my-6">
      <div className="order-1 sm:order-[0]">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#F79009] sm:leading-[60px]">
          Welcome to the world of tech
        </h2>
        <p className="text-[#6D6D6D]">
          Browse all the devices you need, from smartphones to PCs.
        </p>
      </div>
      <div className="">
        <img src="/images/banner.png" alt="banner" />
      </div>
    </section>
  );
};

export default ProductsBanner;