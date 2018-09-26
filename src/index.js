import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Root from "./Root";
import "styles/base.scss";

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
