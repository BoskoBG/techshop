import React from "react";
import CustomFilter from "./custom-filter/CustomFilter";
import classes from "./ProductFilterList.module.css";

const ProductFilterList = ({ productsArr }) => {
  const productsSpecsArr = productsArr.map((product) => product.spec);

  console.log(productsArr);

  const allProductsSpecs = ["brand"];
  const filterObj = {};

  productsSpecsArr.forEach((spec) => {
    for (const key in spec) {
      allProductsSpecs.push(key);
    }
  });
  const filterTypes = Array.from(new Set(allProductsSpecs));
  filterTypes.forEach((name) => {
    filterObj[name] = [];
  });

  productsSpecsArr.forEach((spec) => {
    for (const key in spec) {
      filterObj[key].push(spec[key]);
    }
  });
  productsArr.forEach((product) => filterObj.brand.push(product.brand));

  for (const key in filterObj) {
    filterObj[key] = Array.from(new Set(filterObj[key]));
  }

  console.log(filterObj);

  return (
    <div className={classes.list}>
      <CustomFilter heading></CustomFilter>
      <CustomFilter type="price"></CustomFilter>
      {filterTypes.map((type) => {
        return (
          <CustomFilter
            type={type}
            filterCategories={filterObj[type]}
          ></CustomFilter>
        );
      })}
    </div>
  );
};

export default ProductFilterList;
