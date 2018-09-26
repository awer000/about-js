import React from "react";
import styles from "./LoginMenu.scss";
import classNames from "classnames/bind";
import Modal from "components/Modal";

const cx = classNames.bind(styles);

const LoginMenu = () => (
  <Modal>
    <form className={cx("login-form")}>
      <h2>Member Login</h2>
      <input placeholder="아이디" />
      <input placeholder="패스워드" />
      <button>시작하기</button>
    </form>
  </Modal>
);

export default LoginMenu;
