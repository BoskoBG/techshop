import { useSelector } from "react-redux";

export const useAllProducts = () => {
  const allProductCategories = useSelector((state) => {
    return state.products.allProducts;
  });

  const allProducts = allProductCategories
    .map((categories) => {
      return categories.subcategories.map((subcategory) => {
        return subcategory.products.map((product) => product);
      });
    })
    .flat(2);

  return allProducts;
};
