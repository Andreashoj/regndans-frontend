import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import { withRouter } from "react-router-dom";
import { Box, FormControl } from "@material-ui/core";
import { login } from "../utils/auth/auth";
import logo from "../../assets/logo-title.svg";
import FormSignIn from "./formSignIn";
import FormSignUp from "./formSignUp";

const handleUrl = url => {
  return url.split("/").splice(-1, 1)[0];
};

const Form = props => {
  const [error, setError] = useState({
    isError: false,
    errorText: ""
  });
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const [loginPage, setLoginPage] = useState(true);

  const transitions = useTransition(loginPage, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const [url, setUrl] = useState(() => handleUrl(props.location.pathname));

  useEffect(() => {
    const url = handleUrl(props.location.pathname);
    setUrl(() => handleUrl(props.location.pathname));
    if (url === "formsignup") {
      setLoginPage(false);
    } else {
      setLoginPage(true);
    }
  }, [props.history.location]);

  const handleSubmit = e => {
    e.preventDefault();

    const userError = login(user.username, user.password, () => {
      props.history.push("/");
    });

    if (userError) {
      setError({
        isError: true,
        errorText: userError
      });
    }
  };

  const handleUser = (username, password) => {
    setUser({
      username,
      password
    });
  };

  return (
    <Box
      width="50%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ boxShadow: "0 3px 15px rgb(36, 51, 65)" }}
    >
      <form
        onSubmit={e => handleSubmit(e)}
        style={{ width: "60%", maxWidth: "600px" }}
      >
        <FormControl fullWidth style={{ alignItems: "flex-start" }}>
          <Box display="flex" width="100%" justifyContent="center">
            <img src={logo} alt="Regndans logo" />
          </Box>
          {transitions.map(({ item, props, key }) =>
            loginPage
              ? item && (
                  <animated.div style={props}>
                    <FormSignIn handleUser={handleUser} error={error} />
                  </animated.div>
                )
              : !item && (
                  <animated.div style={props}>
                    <FormSignUp error={error} />
                  </animated.div>
                )
          )}
        </FormControl>
      </form>
    </Box>
  );
};

export default withRouter(Form);
