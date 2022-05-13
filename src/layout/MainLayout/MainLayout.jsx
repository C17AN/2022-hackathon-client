import React, { useEffect, useState } from "react";
import BottomNavigation from "components/common/BottomNavigation";
import CenterLayout from "layout/CenterLayout/CenterLayout";
import styles from "./MainLayout.module.css";
import { useNavigate } from "react-router-dom";


const MainLayout = () => {
  const accessToken = sessionStorage.getItem('accessToken');
  const navigation = useNavigate()
  const preventUnauthorizedAccess = () => {
    if (!accessToken) {
      navigation('/', { replace: true })
    }
  }
  useEffect(() => {
    preventUnauthorizedAccess()
  }, [])

  return (
    <>
      <div className={`${styles["layout-main"]}`}>
        <CenterLayout />
        {/* <RightLayout /> */}
      </div>
      {/* <Footer /> */}
      {accessToken && <BottomNavigation />}
    </>
  );
};

export default MainLayout;
