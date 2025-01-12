import React from "react";
import Container from "../../components/Container";
import SplitScreen from "./../../components/layout/SplitScreen";
import CategoryList from "../../components/specific/CategoryList";
import BrandListFilter from "../../components/specific/BrandListFilter";
import InterestList from "../../components/specific/InterestList";
import Banner from "../../components/specific/Banner";

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
        <div></div>
      </SplitScreen>
    </Container>
  );
};

export default ProductPage;
