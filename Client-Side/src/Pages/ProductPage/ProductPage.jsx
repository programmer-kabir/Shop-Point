import React, { useEffect, useState } from "react";
import ProductsBanner from "../../components/Products/ProductsBanner";
import Container from "../../components/Container";
import ProductsSidebar from "../../components/Products/ProductsSidebar";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../Redux/Categories/CategorySlice";

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const dispatch = useDispatch();
  const { isLoading, categories, error } = useSelector(
    (state) => state.categories
  );
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
  return (
    <Container>
      <ProductsBanner />
      {/* Left And Right Side */}
      <section>
        {/* Left Side */}
        <div>
          <ProductsSidebar categories={categories} category={category} />
        </div>
        {/* Right Side */}
      </section>
    </Container>
  );
};

export default ProductPage;
