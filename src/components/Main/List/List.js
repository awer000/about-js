import React, { Component } from "react";
import styles from "./List.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class List extends Component {
  id = 4;
  state = {
    contents: [
      {
        id: 1,
        subject: "클로저가 정확히 뭔가요?",
        writeDate: "2018-08-03",
        user: "르라나"
      },
      {
        id: 2,
        subject: "함수의 정의",
        writeDate: "2018-09-03",
        user: "르라나"
      },
      {
        id: 3,
        subject: "코드가 실행이 안되고 있습니다..",
        writeDate: "2018-10-03",
        user: "르라나"
      }
    ]
  };
  render() {
    return <div>List</div>;
  }
}

export default List;
