import React from "react";
import { useSelector } from "react-redux";
import classes from "./PageLayout.module.css";

const PageLayout = (props) => {
  const modalOpen = useSelector((state) => state.ui.navModalOpen);
  const searchModalOpen = useSelector((state) => state.ui.searchModalOpen.open);

  return (
    <div className={modalOpen ? classes["layout-blur"] : classes.layout}>
      {props.children}
      {searchModalOpen && <div className={classes.overlay}></div>}
    </div>
  );
};

export default PageLayout;
