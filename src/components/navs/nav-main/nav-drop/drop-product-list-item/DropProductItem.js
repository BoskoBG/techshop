import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { authActions } from "../../../../../store/auth";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";
import { useFavouriteProducts } from "../../../../hooks/useFavouriteProducts";
import { useUpdateCurrentUser } from "../../../../hooks/useUpdateCurrentUser";
import classes from "./DropProductItem.module.css";

const DropProductItem = ({ type, image, name, price, id }) => {
  const dispatch = useDispatch();
  const currentUser = useCurrentUser();
  const updateCurrentUser = useUpdateCurrentUser();
  const favouriteProducts = useFavouriteProducts();

  const onBookmarkClickHandler = () => {
    dispatch(authActions.removeFromFavourites(id));
    updateCurrentUser(currentUser.email, {
      favourites: favouriteProducts,
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={image}></img>
      </div>
      <div className={classes.name}>{name}</div>
      <div className={classes.price}>
        {price} $
        {type === "favourites" && (
          <BsBookmarkFill
            onClick={onBookmarkClickHandler}
            className={classes.bookmark}
          ></BsBookmarkFill>
        )}
      </div>
    </div>
  );
};

export default DropProductItem;
