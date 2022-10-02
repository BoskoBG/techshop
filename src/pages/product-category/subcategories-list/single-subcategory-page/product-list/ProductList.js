import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SingleProductListItem from "../../../../../components/products/single-product-li/SingleProductListItem";
import classes from "./ProductList.module.css";

const ProductsList = ({ productsArr, subcategoryParam, categoryParam }) => {


  // const findExactProduct = (productId) => {
  //   const exactProduct = productsArr.find((prod) => prod.id === productId);

  //   return exactProduct;
  // };

  return (
    <div className={classes.list}>
      {productsArr.map((product) => (
        <SingleProductListItem
          name={product.name}
          image={product.images[0]}
          key={product.id}
          price={product.price}
          categoryParam={categoryParam}
          subcategoryParam={subcategoryParam.param}
          productId={product.id}
        ></SingleProductListItem>
      ))}
    </div>
  );
};

export default ProductsList;
