import React from "react";
import classes from "./CategoriesDrop.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../../store/ui";

const CategoriesDrop = (props) => {
  const modalOpen = useSelector((state) => state.ui.navModalOpen);
  const dispatch = useDispatch();

  const products = useSelector((state) => {
    return state.products.allProducts;
  });

  const closeNavModalHandler = () => {
    dispatch(uiActions.closeNavModal());
  };

  return (
    <ul className={classes["drop-ul"]} onMouseLeave={props.onMouseLeave}>
      {products.map((product, index) => {
        return (
          <li key={index}>
            <Link
              onClick={closeNavModalHandler}
              to={`/product-category/${product.param}`}
            >
              {product.category}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesDrop;
