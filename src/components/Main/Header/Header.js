import React, { Component } from "react";
import styles from "./Header.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

const cx = classNames.bind(styles);

class Header extends Component {
  render() {
    return (
      <header className={cx("Header")}>
        <div className={cx("header-content")}>
          <div className={cx("logo")}>
            <Link to="/">We don`t know JS</Link>
          </div>
          <div className={cx("right")}>
            <FaAlignJustify />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
