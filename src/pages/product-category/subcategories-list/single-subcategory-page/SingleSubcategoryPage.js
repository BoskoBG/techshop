import React, { useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import ProductFilterList from "./product-filter-list/ProductFilterList";
import ProductsList from "./product-list/ProductList";
import SingleProduct from "./product-list/single-product-page/SingleProduct";
import classes from "./SingleSubcategoryPage.module.css";

const SingleSubcategoryPage = (props) => {
  const subcategoryParam = useParams();
  const categoryParam = props.categoryParam;

  const [filteredProducts, setFilteredProducts] = useState(
    props.subcategory.products
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={classes.category}>
            <div className={classes["category-text"]}>
              <h3>{props.subcategory.name}</h3>
            </div>
            <div className={classes["product-container"]}>
              <ProductFilterList
                productsArr={props.subcategory.products}
              ></ProductFilterList>
              <ProductsList
                subcategoryParam={subcategoryParam}
                categoryParam={categoryParam}
                productsArr={filteredProducts}
              ></ProductsList>
            </div>
          </div>
        }
      ></Route>
      <Route
        path="/:productId"
        element={<SingleProduct products={filteredProducts}></SingleProduct>}
      ></Route>
    </Routes>
  );
};

export default SingleSubcategoryPage;
