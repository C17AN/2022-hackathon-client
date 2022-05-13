import React from "react";
import Menu from "components/Menu/Menu";
import ServiceTitle from "../../components/ServiceTitle";
import styles from "./LeftLayout.module.css";

const LeftLayout = () => {
  return (
    <div className={styles["layout-left"]}>
      <ServiceTitle />
      <Menu />
    </div>
  );
};

export default LeftLayout;
