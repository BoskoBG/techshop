import React, { useEffect, useState } from "react";
import classes from "./ProductsSearchButton.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { uiActions } from "../../store/ui";
import { useDispatch, useSelector } from "react-redux";

const ProductSearchButton = (props) => {
  const searchModalState = useSelector((state) => {
    return state.ui.searchModalOpen;
  });

  console.log(props.selectedSubcategory);

  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(uiActions.openSearchModal(props.id));
  };

  let btnClasses = "";

  if (props.selectedSubcategory) {
    btnClasses = props.category
      ? `${classes.btn} ${classes["btn-active"]}`
      : `${classes.btn} ${
          !props.selectedBrand ? classes["btn-inactive"] : classes["btn-active"]
        }`;
  } else if (!props.selectedSubcategory) {
    btnClasses = props.category
      ? `${classes.btn} ${classes["btn-inactive"]}`
      : `${classes.btn} ${classes.disabled}`;
  }

  // btnClasses =
  //   (props.spec && props.selectedSubcategory) ||
  //   (props.brand && props.selectedSubcategory) ||
  //   props.category
  //     ? classes.btn
  //     : `${classes.btn} ${classes.disabled}`;

  const chevronClass =
    props.id === searchModalState.type
      ? `${classes.chevron} ${classes["chevron-active"]}`
      : classes.chevron;

  return (
    <div className={btnClasses} onClick={onClickHandler}>
      {props.title}
      {props.chevron && (
        <div className={chevronClass}>
          <IoIosArrowDown />
        </div>
      )}
    </div>
  );
};

export default ProductSearchButton;
