import React from "react";
import { Input } from "@material-ui/core";

const MuiInput = (props) => {
  return (
    <Input {...props} variant="outlined">
      {props.msg}
    </Input>
  );
};

export default MuiInput;
