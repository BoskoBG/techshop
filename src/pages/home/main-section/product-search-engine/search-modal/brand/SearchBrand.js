import React from "react";
import classes from "./SearchBrand.module.css";
import { brandsImgArray } from "../../../../../../images/brands/brands";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../../../../store/ui";

const SearchBrand = ({ selectedSubcategory, selectBrand }) => {
  const dispatch = useDispatch();
  let subcategoryBrands = [];
  selectedSubcategory.products.forEach((product) => {
    if (!subcategoryBrands.includes(product.brand))
      subcategoryBrands.push(product.brand);
  });

  const selectBrandHandler = (brand) => {
    selectBrand(brand);
    dispatch(uiActions.closeSearchModal());
  };

  return (
    <div className={classes.container}>
      {subcategoryBrands.map((brand) => {
        const brandImgSrc = brandsImgArray.find((src) => {
          return src.includes(brand);
        });
        return (
          <div
            className={classes.brand}
            onClick={selectBrandHandler.bind(this, brand)}
          >
            <div className={classes["brand-img"]}>
              <img src={brandImgSrc}></img>
            </div>
            <div
              className={classes["brand-name"]}
            >{`${brand[0].toUpperCase()}${brand.slice(1, brand.length)}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchBrand;
