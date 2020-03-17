import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Form from "./form";
import logo from "../../assets/logo.svg";

const useStyles = makeStyles({
  loginBackground: {
    background: "linear-gradient(130deg, #2E8272, #9B59B6);",
    opacity: 0.8
  }
});

const Login = () => {
  const classes = useStyles();
  return (
    <Box width={{ height: "100vh", width: "100%" }} display="flex">
      <Form />
      <Box className={classes.loginBackground} height="100vh" width="50%"></Box>
    </Box>
  );
};

export default Login;
