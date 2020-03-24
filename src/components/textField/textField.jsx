import React from "react";
import { TextField as MuiTextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  textField: {
    backgroundColor: "#FCFCFC",
    width: "100%",
    marginBottom: "40px",
    marginTop: "4px"
  },
  cssLabel: {},
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `#71B7E6 !important`,
      borderWidth: "1px"
    }
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: "0.5px",
    borderColor: "#E0E4EA !important"
  }
}));

const TextField = props => {
  const classes = useStyles();
  console.log(props);
  return (
    <MuiTextField
      variant="outlined"
      className={classes.textField}
      multiline={props.type === "textarea"}
      rows="8"
      InputLabelProps={{
        classes: {
          root: "",
          focused: ""
        }
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline
        }
      }}
      {...props}
    ></MuiTextField>
  );
};

export default TextField;
