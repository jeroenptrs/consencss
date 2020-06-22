import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";

import { classNames, rule } from "@consencss/core";

const blueColorOnHover = rule("color", "blue", ":hover");

const App = () => {
  return <div className={classNames(blueColorOnHover)}>Hello World</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
