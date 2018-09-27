import React from "react";
import styles from "./Button.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Div = ({ children, ...rest }) => <div {...rest}>{children}</div>;

const Button = ({ children, to, onClick, disabled, theme = "default" }) => {
  // to 값이 존재하면 Link 를 사용하고, 그렇지 않으면 div 를 사용합니다.
  // 비활성화 되어있는 버튼인 경우에도 div 가 사용됩니다.
  const Element = to && !disabled ? Link : Div;

  // 비활성화되면 onClick 은 실행되지 않습니다
  // disabled 값이 true 가 되면 className 에 disabled 가 추가됩니다.
  return (
    <Element
      to={to}
      className={cx("button", theme, { disabled })}
      onClick={disabled ? () => null : onClick}
    >
      {children}
    </Element>
  );
};

export default Button;
