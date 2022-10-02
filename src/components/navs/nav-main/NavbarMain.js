import React from "react";

import classes from "./NavbarMain.module.css";
import { FaSearch } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <nav className={classes.navbar}>
      <div className={classes["nav-center"]}>
        <Link className={classes.logo} href="/" to="/">
          TECH <span className={classes["logo-yellow"]}>SHOP</span>
        </Link>
        <div className={classes.input}>
          <input placeholder="Search for product"></input>
          <div className={classes["search-icon"]}>
            <FaSearch></FaSearch>
          </div>
        </div>
        <div className={classes.icons}>
          <Link to={isLoggedIn ? "/account" : "/login"}>
            <BsPerson></BsPerson>
          </Link>
          <Link to={isLoggedIn ? "/account/favourites" : "/login"}>
            <BsHeart></BsHeart>
          </Link>
          <Link to="/cart">
            <BsCart2></BsCart2>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
