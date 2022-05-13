import Footer from "components/Footer/Footer";
import CenterLayout from "layout/CenterLayout/CenterLayout";
import React from "react";
import LeftLayout from "../LeftLayout/LeftLayout";
import RightLayout from "../RightLayout/RightLayout";
import styles from "./MainLayout.module.css";

const BottomNav = () => {
  return (
    <nav className={styles["wrapper"]}>
      <div>button1</div>
      <div>button2</div>
      <div>button3</div>
      <div>button4</div>
      <div>button5</div>
    </nav>
  )
}

const MainLayout = () => {
  return (
    <>
      <div className={styles["layout-main"]}>
        <CenterLayout />
        {/* <RightLayout /> */}
      </div>
      {/* <Footer /> */}
      <div>
        <BottomNav />
      </div>
    </>
  );
};

export default MainLayout;
