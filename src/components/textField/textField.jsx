import React from "react";
import {
  TextField as MuiTextField,
  InputLabel,
  Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Form from "../form";

const useStyles = makeStyles((theme) => ({
  textField: {
    backgroundColor: "#FCFCFC",
    width: "100%",
    marginBottom: "40px",
    marginTop: "4px",
  },
  cssLabel: {},
  OutlinedInput: {},
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `#71B7E6 !important`,
      borderWidth: "1px",
    },
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: "0.5px",
    borderColor: "#E0E4EA !important",
  },
  input: {
    padding: "14px 14px",
  },
}));

const TextField = (props) => {
  const classes = useStyles();
  return (
    <MuiTextField
      variant="outlined"
      className={classes.textField}
      multiline={props.type === "textarea"}
      rows="7"
      InputLabelProps={{
        classes: {
          root: "",
          focused: "",
        },
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
          input: classes.input,
        },
      }}
      {...props}
    ></MuiTextField>
  );
};

export default TextField;
