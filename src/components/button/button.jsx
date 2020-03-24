import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    height: "48px",
    padding: "0 40px",
    color: "white",
    boxShadow: "0 3px 0 #068D72",
    "&:hover, &:focus": {
      boxShadow: "0 3px 0 #0A5D4D"
    }
  }
});

const Button = props => {
  const classes = useStyles();
  return (
    <MuiButton
      type="submit"
      variant="contained"
      color="secondary"
      size="large"
      padding="dense"
      fullWidth
      {...props}
      className={classes.button}
    ></MuiButton>
  );
};

export default Button;
