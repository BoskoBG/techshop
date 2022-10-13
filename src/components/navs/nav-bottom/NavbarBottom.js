import React from "react";
import CategoriesDrop from "./categories-drop/CategoriesDrop";
import classes from "./NavbarBottom.module.css";
import { uiActions } from "../../../store/ui";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";

const NavbarBottom = () => {
  const modalOpen = useSelector((state) => state.ui.navModalOpen);
  const dispatch = useDispatch();

  const openNavModalHandler = () => {
    if (!modalOpen) dispatch(uiActions.openNavModal());
  };

  const closeNavModalHandler = () => {
    dispatch(uiActions.closeNavModal());
  };

  return (
    <div className={classes.navbar}>
      <div className={classes["nav-center"]}>
        <div className={classes.products} onMouseLeave={closeNavModalHandler}>
          <p onMouseEnter={openNavModalHandler}>
            Products
            <span>
              <IoIosArrowDown></IoIosArrowDown>
            </span>
          </p>

          {modalOpen && <CategoriesDrop></CategoriesDrop>}
        </div>
        <div className={classes.other}>
          <a>Top Deals</a>
          <a>Premium Benefits</a>
          <a>About Us</a>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
