import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";

import { classNames, rule } from "@consencss/core";

const blueColorOnHover = rule("color", "blue", ":hover");
const borderStuff = rule("border", "1px solid red");

const App = () => {
  return <div className={classNames(blueColorOnHover, borderStuff)}>Hello World</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
