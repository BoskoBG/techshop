import React from "react";
import PageLayout from "../../components/ui/page-layout/PageLayout";
import { Route, Routes, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./ProductCategoryPage.module.css";
import SubcategoriesList from "./subcategories-list/SubcategoriesList";
import SingleSubcategoryPage from "./subcategories-list/single-subcategory-page/SingleSubcategoryPage";

const ProductCategoryPage = (props) => {
  const params = useParams();

  const exactProd = useSelector((state) => {
    return state.products.allProducts.find(
      (product) => product.param === params.param
    );
  });

  console.log(exactProd);

  const exactSubcategory = exactProd.subcategories.find(
    (subcategory) => subcategory.param === params["*"].split("/")[0]
  );

  console.log(exactSubcategory);

  const category = exactProd.category;
  console.log(exactProd.param);
  console.log(category);
  return (
    <PageLayout>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className={classes.header}>
                <h1>{category}</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sed mauris quis dolor elementum posuere. Nullam
                  fringilla dolor vel erat fringilla, sed blandit diam sagittis.
                  Quisque in pharetra nibh. In scelerisque massa vitae urna
                  sodales, id fermentum nibh euismod. Aenean commodo elit non
                  elit vestibulum viverra. Phasellus porttitor ullamcorper
                  aliquam. Nullam viverra, ipsum ac blandit tincidunt, augue
                  purus laoreet tortor, nec consectetur augue arcu placerat
                  nulla.
                </p>
                <h2>Choose a category</h2>
              </div>

              <SubcategoriesList product={exactProd}></SubcategoriesList>
            </>
          }
        ></Route>
        <Route
          path="/:param/*"
          element={
            <SingleSubcategoryPage
              subcategory={exactSubcategory}
              categoryParam={exactProd.param}
            ></SingleSubcategoryPage>
          }
        ></Route>
      </Routes>
    </PageLayout>
  );
};

export default ProductCategoryPage;
