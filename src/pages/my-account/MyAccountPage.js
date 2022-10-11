import React from "react";
import classes from "./MyAccountPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/ui/page-layout/PageLayout";
import { authActions } from "../../store/auth";
import AccountContent from "./account-content/AccountContent";
import AccountMenu from "./account-menu/AccountMenu";
import BreadcrumbNav from "./breadcrumb-nav/BreadcrumbNav";

const MyAccountPage = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <PageLayout>
      <BreadcrumbNav></BreadcrumbNav>
      <div className={classes.container}>
        <AccountMenu></AccountMenu>
        <AccountContent></AccountContent>
      </div>
    </PageLayout>
  );
};

export default MyAccountPage;
