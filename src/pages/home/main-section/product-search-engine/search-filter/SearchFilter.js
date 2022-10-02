import React, { useState } from "react";
import PriceRangeSlider from "../../../../../components/ui/PriceRangeSlider";
import ProductSearchButton from "../../../../../components/ui/ProductSearchButton";
import classes from "./SearchFilter.module.css";

const SearchFilter = ({ selectedSubcategory, selectedBrand }) => {
  const [priceValues, setPriceValues] = useState([0, 10000]);

  const sliderChangeHandler = (val1, val2) => {
    setPriceValues([val1, val2]);
  };

  return (
    <div className={classes.engine}>
      <h2>Find a product</h2>
      <ProductSearchButton
        id="category"
        title={
          selectedSubcategory ? selectedSubcategory.name : "Choose a category"
        }
        selectedSubcategory={selectedSubcategory}
        category
        chevron
      ></ProductSearchButton>

      <ProductSearchButton
        id="brand"
        title={
          selectedSubcategory &&
          (selectedBrand ? selectedBrand : "Choose brand")
        }
        brand
        chevron
        selectedSubcategory={selectedSubcategory}
        selectedBrand={selectedBrand}
      ></ProductSearchButton>

      <ProductSearchButton
        id="spec"
        title={!selectedSubcategory ? "" : "Spec"}
        spec
        chevron
        selectedSubcategory={selectedSubcategory}
      ></ProductSearchButton>

      <div className={classes.price}>
        <input type="number" min="0" max="9999" value={priceValues[0]}></input>
        <h3>Price</h3>
        <input type="number" min="1" max="10000" value={priceValues[1]}></input>
      </div>
      <PriceRangeSlider onSliderChange={sliderChangeHandler}></PriceRangeSlider>
      <ProductSearchButton search title="Search"></ProductSearchButton>
    </div>
  );
};

export default SearchFilter;
