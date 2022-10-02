import React from "react";
import ProductCarousel from "../../../components/products/product-carousel/ProductCarousel";
import classes from "./CarouselSection.module.css";

const CarouselSection = ({ productsArr }) => {
  return (
    <div className={classes["carousel-section"]}>
      <ProductCarousel
        products={productsArr}
        title="Bosh products"
      ></ProductCarousel>
    </div>
  );
};

export default CarouselSection;
