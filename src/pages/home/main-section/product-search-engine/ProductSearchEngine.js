import React, { useState } from "react";
import SearchFilter from "./search-filter/SearchFilter";
import classes from "./ProductSearchEngine.module.css";
import SearchModal from "./search-modal/SearchModal";

const ProductSearchEngine = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedSpecification, setSelectedSpecification] = useState(null);

  const selectSubcategory = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };
  const selectBrand = (brand) => {
    setSelectedBrand(brand);
    console.log(selectedBrand);
  };
  const selectSpecification = (spec) => {
    setSelectedSpecification(spec);
  };

  console.log(selectedSubcategory);

  return (
    <div className={classes.container}>
      <SearchFilter
        selectedSubcategory={selectedSubcategory}
        selectedBrand={selectedBrand}
      ></SearchFilter>
      <SearchModal
        selectSubcategory={selectSubcategory}
        selectedSubcategory={selectedSubcategory}
        selectBrand={selectBrand}
        selectSpecification={selectSpecification}
      ></SearchModal>
    </div>
  );
};

export default ProductSearchEngine;
