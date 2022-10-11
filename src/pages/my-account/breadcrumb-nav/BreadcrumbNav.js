import React from "react";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../../components/hooks/useCurrentUser";
import classes from "./BreadcrumbNav.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { useCurrentPath } from "../../../components/hooks/useCurrentPath";
const BreadcrumbNav = () => {
  const currentUser = useCurrentUser();
  const path = useCurrentPath();
  console.log(path);
  const lastPath = path.split("/account/")[1];

  return (
    <nav className={classes.nav}>
      <div className={classes["home-icon"]}>
        <Link to="/">
          <AiOutlineHome></AiOutlineHome>
        </Link>
      </div>
      <span className={classes.dash}>/</span>
      <div className={classes.user}>
        <Link to="/account">{`${currentUser.name} ${currentUser.surname}`}</Link>
      </div>
      {lastPath && (
        <div>
          <span className={classes.dash}>/</span>
          <Link to={`/account/${lastPath}`}>{lastPath}</Link>
        </div>
      )}
    </nav>
  );
};

export default BreadcrumbNav;
