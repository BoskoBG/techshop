import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./SearchCategories.module.css";
import { Link } from "react-router-dom";
import { uiActions } from "../../../../../../store/ui";

const SearchCategories = ({
  selectSubcategory,
  selectedSubcategory,
  selectBrand,
}) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.allProducts);

  const selectSubcategoryHandler = (subcat) => {
    selectSubcategory(subcat);
    selectBrand(null);
    dispatch(uiActions.closeSearchModal());
  };

  return (
    <div className={classes.container}>
      {categories.map((cat) => {
        return (
          <div className={classes["category-group"]}>
            <div className={classes.category}>{cat.category.toUpperCase()}</div>
            <div className={classes.subcategories}>
              {cat.subcategories.map((subcat) => {
                return (
                  <div
                    className={
                      subcat.name !== selectedSubcategory?.name
                        ? classes.subcategory
                        : `${classes.subcategory} ${classes.selected} `
                    }
                    onClick={selectSubcategoryHandler.bind(this, subcat)}
                  >
                    {subcat.name}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchCategories;
