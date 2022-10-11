import React from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./AccountContent.module.css";
import ChangePassword from "./pages/change-password/ChangePassword";
import FavouritesPage from "./pages/favourites/FavouritesPage";
import OrderHistory from "./pages/order-history/OrderHistory";
import PersonalInfo from "./pages/personal-info/PersonalInfo";

const AccountContent = () => {
  return (
    <div className={classes.content}>
      <Routes>
        <Route path="/" element={<PersonalInfo></PersonalInfo>}></Route>
        <Route
          path="/order-history"
          element={<OrderHistory></OrderHistory>}
        ></Route>
        <Route
          path="/favourites"
          element={<FavouritesPage></FavouritesPage>}
        ></Route>
        <Route
          path="/change-password"
          element={<ChangePassword></ChangePassword>}
        ></Route>
      </Routes>
    </div>
  );
};

export default AccountContent;
