import React from "react";
import { TextField } from "@material-ui/core";

const InputField = props => {
  const { error, handleState } = props;
  return (
    <TextField
      label={props.label}
      type={props.type}
      fullWidth={true}
      id="outlined-basic"
      margin={"dense"}
      onChange={e => handleState(e.target.value)}
      error={error.isError}
      helperText={error.errorText}
      color="secondary"
      style={{ margin: "16px 0" }}
    />
  );
};

export default InputField;
