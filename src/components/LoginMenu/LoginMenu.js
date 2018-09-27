import React from "react";
import styles from "./LoginMenu.scss";
import classNames from "classnames/bind";
import Modal from "components/Modal";
import Button from "../Button/Button";

const cx = classNames.bind(styles);

const LoginMenu = () => (
  <form className={cx("login-form")}>
    <h2>Member Login</h2>
    <input placeholder="아이디" />
    <input placeholder="패스워드" />
    <div>
      <Button className={cx("login-button")} theme="violet">
        시작하기
      </Button>
      <Button className={cx("login-button")}>취소하기</Button>
    </div>
  </form>
);

export default LoginMenu;
