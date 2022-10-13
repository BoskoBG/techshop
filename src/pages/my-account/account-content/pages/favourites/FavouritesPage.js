import React from "react";
import { useFavouriteProducts } from "../../../../../components/hooks/useFavouriteProducts";
import SingleProductListItem from "../../../../../components/products/single-product-li/SingleProductListItem";

const FavouritesPage = () => {
  const favouriteProducts = useFavouriteProducts();

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
      {!favouriteProducts ||
        (favouriteProducts.length === 0 && <div>NO FAV PRODUCTS</div>)}
    </div>
  );
};

export default FavouritesPage;
