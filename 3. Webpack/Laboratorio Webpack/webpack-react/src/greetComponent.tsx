import React from "react";
import webpackLogo from "./assets/images/logo-webpack.webp";
import * as classes from "./mystyle.scss";

export const GreetComponent = () => {
  return (
    <span className={classes["wellcome"]}>
      <img className={classes["logo"]} src={webpackLogo} alt="Webpack Logo" />
      <h1>HELLO WORLD!</h1>
    </span>
  );
};
