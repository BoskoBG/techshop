import React from "react";
import { Link } from "react-router-dom";
import { useCurrentPath } from "../../../components/hooks/useCurrentPath";
import classes from "./AccountMenu.module.css";

const AccountMenu = () => {
  const path = useCurrentPath();

  return (
    <ul className={classes["menu-list"]}>
      <li className={path === "/account" ? classes.active : undefined}>
        <Link to="/account">Personal Info</Link>
      </li>
      <li
        className={
          path === "/account/order-history" ? classes.active : undefined
        }
      >
        <Link to="/account/order-history">Order History</Link>
      </li>
      <li
        className={path === "/account/favourites" ? classes.active : undefined}
      >
        <Link to="/account/favourites">Favourite Products</Link>
      </li>
      <li
        className={
          path === "/account/change-password" ? classes.active : undefined
        }
      >
        <Link to="/account/change-password">Change Password</Link>
      </li>
    </ul>
  );
};

export default AccountMenu;
