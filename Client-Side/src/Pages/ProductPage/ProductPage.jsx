import React from "react";
import Container from "../../components/Container";
import SplitScreen from "./../../components/layout/SplitScreen";
import CategoryList from "../../components/specific/CategoryList";
import BrandListFilter from "../../components/specific/BrandListFilter";
import InterestList from "../../components/specific/InterestList";
import Banner from "../../components/specific/Banner";
import SpecialCategories from "./SpecialCategories";
import CategoryCard from "../../components/shared/CategoryCard";
import Faq from "../../components/Faq/Faq";

const categoriesData = [
  {
    categoryName: "TV, Video & Home Audio Electronics",
    img: "/images/category/tv.png",
  },
  {
    categoryName: "Portable Audio & Headphones",
    img: "/images/category/headphone.png",
  },
  {
    categoryName: "Cameras & Photo",
    img: "/images/category/camera.png",
  },
  {
    categoryName: "Video Games",
    img: "/images/category/video-game.png",
  },
  {
    categoryName: "Surveillance & Smart Home Electronics",
    img: "/images/category/home-elec.png",
  },
];
const brandData = [
  {
    name: "Microsoft",
    img: "/images/brand/image 84.png",
  },
  {
    name: "Canon",
    img: "/images/brand/image 85.png",
  },
  {
    name: "Nikon",
    img: "/images/brand/image 86.png",
  },
  {
    name: "Lg",
    img: "/images/brand/image 87.png",
  },
  {
    name: "Gopro",
    img: "/images/brand/image 88.png",
  },
  {
    name: "Lenovo",
    img: "/images/brand/image 89.png",
  },
  {
    name: "Apple",
    img: "/images/brand/image 79.png",
  },
  {
    name: "Dell",
    img: "/images/brand/image 80.png",
  },
  {
    name: "Hp",
    img: "/images/brand/image 81.png",
  },

  {
    name: "Samsung",
    img: "/images/brand/image 83.png",
  },
];
const ProductPage = () => {
  return (
    <Container>
      <Banner />
      <SplitScreen leftWidthClass="w-1/4" rightWidthClass="w-3/4">
        <div>
          <CategoryList />
          <hr className="border border-dashed" />
          <BrandListFilter />
          <hr className="border border-dashed" />
          <InterestList />
        </div>
        <div className="">
          {/* special deal section  */}

          <section className="my-4 ">
            <img src="/images/special-deal.jpg" className="" alt="" />
          </section>

          <SpecialCategories />
          {/* shop by cateory section  */}
          <section className="my-4">
            <h2 className="mb-4 text-3xl font-semibold">Shop by Category</h2>
            <div className="flex flex-wrap justify-center gap-3 ">
              {categoriesData.map((category, index) => (
                <CategoryCard key={index} category={category} />
              ))}
            </div>
          </section>

          <hr className="border border-dashed" />

          {/* shop by brand section  */}
          <section className="my-4">
            <h2 className="mb-4 text-3xl font-semibold">Shop by Brand</h2>
            <div className="flex flex-wrap justify-center gap-4 ">
              {brandData.map((brand, index) => (
                <div>
                  <img src={brand.img} alt="" />
                  <p className="text-[#4B4B4B] text-base text-center">
                    {brand.name}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Faq section  */}
          <Faq />
        </div>
      </SplitScreen>
    </Container>
  );
};

export default ProductPage;
