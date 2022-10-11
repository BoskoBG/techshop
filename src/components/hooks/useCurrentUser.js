import { useSelector } from "react-redux";

export const useCurrentUser = () => {
  const currentUser = useSelector((state) => {
    return state.auth.currentUser;
  });

  return currentUser;
};
