import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "./image-slider/ImageSlider";
import ProductInfo from "./product-info/ProductInfo";
import classes from "./SingleProduct.module.css";

const SingleProduct = ({ products }) => {
  const params = useParams();
  const productId = params["*"];

  const exactProduct = products.find((prod) => {
    return prod.id === productId;
  });
  console.log(exactProduct);

  return (
    <div className={classes["page-container"]}>
      <ImageSlider product={exactProduct}></ImageSlider>
      <ProductInfo
        product={exactProduct}
        description={exactProduct.desc}
        price={exactProduct.price}
        name={exactProduct.name}
      ></ProductInfo>
    </div>
  );
};

export default SingleProduct;
