import React from "react";
import ProductSearchEngine from "./product-search-engine/ProductSearchEngine";
import GallerySlider from "../../../components/ui/GallerySlider";
import classes from "./MainSection.module.css";

const MainSection = () => {
  return (
    <div className={classes["main-section"]}>
      <div className={classes.overlay}></div>
      <ProductSearchEngine></ProductSearchEngine>
      <GallerySlider></GallerySlider>
    </div>
  );
};

export default MainSection;



