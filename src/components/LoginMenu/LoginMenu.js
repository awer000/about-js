import React from "react";
import styles from "./LoginMenu.scss";
import classNames from "classnames/bind";
import Modal from "components/Modal";

const cx = classNames.bind(styles);

const LoginMenu = () => (
  <Modal>
    <div className={cx("question")}>
      <div className={cx("title")}>포스트 삭제</div>
      <div className={cx("description")}>
        이 포스트를 정말로 삭제하시겠습니까?
      </div>
    </div>
    <div className={cx("options")} />
  </Modal>
);

export default LoginMenu;
