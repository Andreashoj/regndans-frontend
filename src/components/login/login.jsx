import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Form from "./form";
import logo from "../../assets/logo-title-under.svg";

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
      <Box
        className={classes.loginBackground}
        height="100vh"
        width="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          height="317px"
          width="317px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: "11px",
            backdropFilter: "grayscale(0.5) opacity(0.8)"
          }}
        >
          <img src={logo} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
