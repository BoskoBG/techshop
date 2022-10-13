import classes from "./SingleProductListItem.module.css";
import BtnCart from "./btn-cart/BtnCart";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart";
import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { authActions } from "../../../store/auth";
import { useAllProducts } from "../../hooks/useAllProducts";
import { useUpdateCurrentUser } from "../../hooks/useUpdateCurrentUser";
import { useState } from "react";
const SingleProductListItem = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const allProducts = useAllProducts();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const favouriteProducts = useSelector(
    (state) => state.auth.currentUser?.favourites
  );
  const updateCurrentUser = useUpdateCurrentUser();
  // console.log(favouriteProducts);

  const product = props;

  const itemPrice = `${props.price.toLocaleString("en-US")}.99 $`;

  let [bookmarkClasses, setBookmarkClasses] = useState(
    classes["bookmark-icon"]
  );

  const addProductToCartHandler = () => {
    dispatch(cartActions.addProductToCart({ ...product }));
  };

  const toggleFavouriteProductsHandler = () => {
    if (!favouriteProducts || favouriteProducts.length === 0) {
      dispatch(authActions.addToFavourites({ ...product }));
      updateCurrentUser("bosko.golubovicc@gmail.com", {
        favorites: favouriteProducts,
      });
      setBookmarkClasses(classes["bookmark-icon-favourite"]);
    } else {
      const isInFavourites = favouriteProducts.some(
        (prod) => prod.productId === product.productId
      );
      const selectedProduct = allProducts.find(
        (prod) => prod.id === product.productId
      );
      console.log(selectedProduct);

      if (isInFavourites) {
        dispatch(authActions.removeFromFavourites(selectedProduct.id));
        setBookmarkClasses(classes["bookmark-icon"]);
      } else {
        dispatch(authActions.addToFavourites({ ...product }));
        setBookmarkClasses(classes["bookmark-icon-favourite"]);
      }

      updateCurrentUser(currentUser.email, {
        favourites: favouriteProducts,
      });
    }
  };

  return (
    <div className={classes.item} onClick={toggleFavouriteProductsHandler}>
      {isLoggedIn && (
        <div className={classes["favourites-btn"]}>
          <FaBookmark className={bookmarkClasses}></FaBookmark>
        </div>
      )}
      <Link
        to={`/product-category/${props.categoryParam}/${props.subcategoryParam}/${props.productId}`}
      >
        <div className={classes.product}>
          <div
            className={classes["image-container"]}
            onClick={props.onProductClick}
          >
            <img className={classes.image} src={props.image}></img>
          </div>
          <div className={classes["product-info"]}>
            <p className={classes.name}>{props.name}</p>
            <div className={classes.price}>{itemPrice}</div>
          </div>
        </div>
      </Link>
      <BtnCart onClick={addProductToCartHandler}></BtnCart>
    </div>
  );
};

export default SingleProductListItem;
