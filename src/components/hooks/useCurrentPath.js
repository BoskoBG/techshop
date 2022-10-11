import { useLocation } from "react-router-dom";

export const useCurrentPath = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return pathname;
};
