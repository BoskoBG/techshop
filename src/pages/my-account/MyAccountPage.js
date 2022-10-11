import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/ui/page-layout/PageLayout";
import { authActions } from "../../store/auth";

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
      <div>{`Welcome ${currentUser.name} ${currentUser.surname}`}</div>
      <button onClick={logoutHandler}>logout</button>
    </PageLayout>
  );
};

export default MyAccountPage;
