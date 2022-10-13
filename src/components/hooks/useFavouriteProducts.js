import { useCurrentUser } from "./useCurrentUser";

export const useFavouriteProducts = () => {
  const currentUser = useCurrentUser();
  const favuoriteProducts = currentUser.favourites
    ? currentUser.favourites
    : [];

  return favuoriteProducts;
};
