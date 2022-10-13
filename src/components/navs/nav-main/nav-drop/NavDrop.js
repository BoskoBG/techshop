import React from "react";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import classes from "./NavDrop.module.css";
import { BsPerson, BsBag, BsHeart } from "react-icons/bs";
import { AiOutlineLogout, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import auth, { authActions } from "../../../../store/auth";
import DropProductItem from "./drop-product-list-item/DropProductItem";

const NavDrop = ({ type, closeDropModal }) => {
  const user = useCurrentUser();
  const favouriteProducts = user.favourites;
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(authActions.logout());
    closeDropModal();
  };
  return (
    <div className={classes["drop-container"]}>
      {type === "account" && (
        <div>
          <div className={classes["header-box"]}>
            <div
              className={classes.initials}
            >{`${user.name[0]}${user.surname[0]}`}</div>
            <h4>{`${user.name} ${user.surname}`}</h4>
          </div>
          <ul className={classes.list}>
            <li>
              <div className="icon">
                <BsPerson></BsPerson>
              </div>
              <Link to={"/account"}>Personal Info</Link>
            </li>
            <li>
              <div className={classes.icon}>
                <BsBag></BsBag>
              </div>
              <Link to={"/account/order-history"}> Order History</Link>
            </li>
            <li>
              <div className={classes.icon}>
                <BsHeart></BsHeart>
              </div>
              <Link to={"/account/favourites"}>Favourite Products</Link>
            </li>
            <li>
              <div className={classes.icon}>
                <AiOutlineLock></AiOutlineLock>
              </div>
              <Link to={"/account/change-password"}>Change Password</Link>
            </li>
            <li>
              <div className={classes.icon}>
                <AiOutlineLogout></AiOutlineLogout>
              </div>
              <Link to="/" onClick={onLogoutClick}>
                Log out
              </Link>
            </li>
          </ul>
        </div>
      )}
      {type === "favourites" && (
        <div>
          <h4 className={classes.title}>Favourite Products</h4>
          <div>
            {favouriteProducts.map((product) => (
              <DropProductItem
                type={type}
                image={product.image}
                name={product.name}
                price={product.price}
                key={product.productId}
              ></DropProductItem>
            ))}
          </div>
        </div>
      )}
      {type === "cart" && (
        <div>
          <h4 className={classes.title}>Cart</h4>
        </div>
      )}
    </div>
  );
};

export default NavDrop;
