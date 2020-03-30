import React from "react";
import { InputLabel } from "@material-ui/core";

const MuiInputLabel = (props) => {
  return <InputLabel {...props}>{props.msg}</InputLabel>;
};

export default MuiInputLabel;
