import React from "react";
import styles from "./MainTemplate.scss";
import classNames from "classnames/bind";
import Header from "../Header/Header";

const cx = classNames.bind(styles);

const MainTemplate = () => (
  <div className={cx("MainTemplate")}>
    <Header />
    MainTemplate
  </div>
);

export default MainTemplate;
