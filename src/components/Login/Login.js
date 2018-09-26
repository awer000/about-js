import React, { Component } from "react";
import styles from "./Login.scss";
import classNames from "classnames/bind";
import LoginMenu from "../LoginMenu/LoginMenu";

const cx = classNames.bind(styles);

class Login extends Component {
  state = {
    loginTab: false
  };
  render() {
    return (
      <div className={cx("Login")}>
        <div className={cx("border-logo")}>
          <p>We</p>
          <p>don`t know</p>
          <p>JS</p>
        </div>
        <p>우리는 자바스크립트를 제대로 모른다</p>
        <p>하지만 그런 사람들이 모여</p>
        <p>말도 안되지만 원론적인 질문을 한다</p>
        <LoginMenu />
      </div>
    );
  }
}

export default Login;
