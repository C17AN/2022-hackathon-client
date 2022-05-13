import React, { useState } from "react";
import BottomNavigation from "components/common/BottomNavigation";
import CenterLayout from "layout/CenterLayout/CenterLayout";
import styles from "./MainLayout.module.css";


const MainLayout = () => {
  return (
    <>
      <div className={`${styles["layout-main"]}`}>
        <CenterLayout />
        {/* <RightLayout /> */}
      </div>
      {/* <Footer /> */}
      <BottomNavigation />
    </>
  );
};

export default MainLayout;
