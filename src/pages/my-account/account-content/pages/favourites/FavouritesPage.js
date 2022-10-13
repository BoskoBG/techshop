import React from "react";
import { useSelector } from "react-redux";
import SingleProductListItem from "../../../../../components/products/single-product-li/SingleProductListItem";
import ProductsList from "../../../../product-category/subcategories-list/single-subcategory-page/product-list/ProductList";

const FavouritesPage = () => {
  const favouriteProducts = useSelector(
    (state) => state.auth.currentUser?.favourites
  );

  console.log(favouriteProducts);

  return (
    <div>
      {favouriteProducts && (
        <div>
          {favouriteProducts.map((product) => (
            <SingleProductListItem
              name={product.name}
              image={product.image}
              key={product.productId}
              price={product.price}
              categoryParam={product.categoryParam}
              subcategoryParam={product.subcategoryParam}
              productId={product.productId}
            ></SingleProductListItem>
          ))}
        </div>
      )}
      {!favouriteProducts && <div>NO FAV PRODUCTS</div>}
    </div>
  );
};

export default FavouritesPage;
