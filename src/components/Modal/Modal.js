import React, { Component } from "react";
import styles from "./Modal.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class Modal extends Component {
  render() {
    const { children, visible } = this.props;
    if (!visible) return null;
    return (
      <div>
        <div className={cx("transparent-background")} />
        <div className={cx("modal-wrapper")}>
          <div className={cx("modal")}>{children}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
