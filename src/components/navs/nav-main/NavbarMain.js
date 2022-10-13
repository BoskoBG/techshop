import React, { useState } from "react";

import classes from "./NavbarMain.module.css";
import { FaSearch } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavDrop from "./nav-drop/NavDrop";

const NavbarMain = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [navDropState, setNavDropState] = useState({
    active: false,
    type: null,
  });

  const openDropModal = (type) => {
    setNavDropState({ active: true, type });
  };

  const closeDropModal = () => {
    setNavDropState({ active: false, type: null });
  };

  return (
    <nav className={classes.navbar} >
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
          <div>
            <Link
              className={classes.icon}
              to={isLoggedIn ? "/account" : "/login"}
              onMouseEnter={openDropModal.bind(this, "account")}
            >
              <BsPerson></BsPerson>
            </Link>
            <Link
              className={classes.icon}
              to={isLoggedIn ? "/account/favourites" : "/login"}
              onMouseEnter={openDropModal.bind(this, "favourites")}
            >
              <BsHeart></BsHeart>
            </Link>
            <Link
              className={classes.icon}
              to="/cart"
              onMouseEnter={openDropModal.bind(this, "cart")}
            >
              <BsCart2></BsCart2>
            </Link>
          </div>
          {isLoggedIn && navDropState.active && (
            <NavDrop
              closeDropModal={closeDropModal}
              type={navDropState.type}
            ></NavDrop>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
