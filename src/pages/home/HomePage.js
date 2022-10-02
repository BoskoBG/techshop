import React from "react";
import MainSection from "./main-section/MainSection";
import PageLayout from "../../components/ui/page-layout/PageLayout";
import CarouselSection from "./carousel-section/CarouselSection";
import { useSelector } from "react-redux";

const HomePage = () => {
  const allProductCategories = useSelector((state) => {
    return state.products.allProducts;
  });

  const allProducts = allProductCategories
    .map((categories) => {
      return categories.subcategories.map((subcategory) => {
        return subcategory.products.map((product) => product);
      });
    })
    .flat(2);

  const boshProducts = allProducts.filter(
    (product) => product.brand === "bosch"
  );

  return (
    <PageLayout>
      <MainSection></MainSection>
      <CarouselSection productsArr={boshProducts}></CarouselSection>
    </PageLayout>
  );
};

export default HomePage;
