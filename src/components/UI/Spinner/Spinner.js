import React from "react";
import classes from "./Spinner.module.css";
const spinner = () => {
  return (
    <div>
      <div className={classes.Loader}>Loading...</div>
    </div>
  );
};

export default spinner;
