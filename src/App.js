import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavbarBottom from "./components/navs/nav-bottom/NavbarBottom";
import NavbarMain from "./components/navs/nav-main/NavbarMain";
import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";
import LoginRegisterPage from "./pages/login-register/LoginRegisterPage";
import ProductCategoryPage from "./pages/product-category/ProductCategoryPage";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "./store/ui";
import { useLocation } from "react-router-dom";
import MyAccountPage from "./pages/my-account/MyAccountPage";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import FavouritesPage from "./pages/my-account/account-content/pages/favourites/FavouritesPage";
import {
  useFavHttp,
  useUpdateCurrentUser,
} from "./components/hooks/useUpdateCurrentUser";

function App() {
  // useEffect(() => {
  //   fetch("https://techshop-85eb1-default-rtdb.firebaseio.com/products.json/", {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //     body: JSON.stringify(initialProductsState),
  //   });
  // }, []);

  const [productState, setProductState] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://techshop-85eb1-default-rtdb.firebaseio.com/products.json"
      );
      const data = await res.json();
      setProductState(data);
    };
    fetchProducts();
  }, []);

  const location = useLocation();

  useEffect(() => {
    dispatch(uiActions.closeSearchModal());
  }, [location]);

  // useFavHttp("bosko.golubovicc@gmail.com");
  const updateUser = useUpdateCurrentUser("bosko.golubovicc@gmail.com", {
    age: 25,
  });

  return (
    <div className="App" >
      <NavbarMain></NavbarMain>
      <NavbarBottom></NavbarBottom>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/cart" element={<CartPage></CartPage>} />
        <Route
          path="/login/*"
          element={<LoginRegisterPage></LoginRegisterPage>}
        ></Route>
        <Route
          path="/account/*"
          element={<MyAccountPage></MyAccountPage>}
        ></Route>
        <Route
          path="/product-category/:param/*"
          element={<ProductCategoryPage></ProductCategoryPage>}
        ></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
