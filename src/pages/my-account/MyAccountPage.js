import React from "react";
import { useSelector } from "react-redux";
import PageLayout from "../../components/ui/page-layout/PageLayout";

const MyAccountPage = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <PageLayout>
      <div>{`Welcome ${currentUser.name} ${currentUser.surname}`}</div>
    </PageLayout>
  );
};

export default MyAccountPage;
