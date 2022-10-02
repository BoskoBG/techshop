import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import classes from "./LoginRegisterPage.module.css";
import PageLayout from "../../components/ui/page-layout/PageLayout";
import LoginForm from "./login-form/LoginForm";
import RegisterForm from "./register-form/RegisterForm";

const LoginRegisterPage = () => {
  const [currentPage, setCurrentPage] = useState("login");

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  let location = useLocation();
  useEffect(() => {
    setCurrentPage(
      location.pathname === "/login"
        ? "login"
        : location.pathname === "/login/register" && "register"
    );
  }, [location]);

  // useEffect();

  return (
    <PageLayout>
      <div className={classes["section-layout"]}>
        <h2>{currentPage === "login" ? "Log In" : "Register"}</h2>
        {currentPage === "login" && (
          <LoginForm changeCurrentPage={changeCurrentPage}></LoginForm>
        )}
        {currentPage === "register" && (
          <RegisterForm changeCurrentPage={changeCurrentPage}></RegisterForm>
        )}
      </div>
    </PageLayout>
  );
};

export default LoginRegisterPage;
