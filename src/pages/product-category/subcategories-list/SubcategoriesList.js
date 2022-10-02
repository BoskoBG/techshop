import React from "react";
import classes from "./SubcategoriesList.module.css";
import { Link } from "react-router-dom";
import SingleSubcategoryListItem from "./single-subcategory-list-item/SingleSubcategoryListItem";

const SubcategoriesList = (props) => {
  const categoryParam = props.product.param;
  const subcategories = props.product.subcategories;
  console.log(subcategories);
  console.log(categoryParam);

  return (
    <ul className={classes.list}>
      {subcategories.map((subcategory, i) => {
        return (
          <div key={i}>
            <Link
              to={`/product-category/${categoryParam}/${subcategory.param}`}
            >
              <SingleSubcategoryListItem
                name={subcategory.name}
                img={subcategory.img}
              ></SingleSubcategoryListItem>
            </Link>
          </div>
        );
      })}
    </ul>
  );
};

export default SubcategoriesList;
