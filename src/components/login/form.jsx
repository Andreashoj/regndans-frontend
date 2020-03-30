import React, { useState, useEffect } from "react";
import { Box, FormControl, Fade } from "@material-ui/core";
import logo from "../../assets/logo-title.svg";
import FormSignIn from "./formSignIn";
import FormSignUp from "./formSignUp";
import { withRouter } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import * as userService from "../../services/userService";
import Joi from "@hapi/joi";

const handleUrl = (url) => {
  return url.split("/").splice(-1, 1)[0]; //Takes last part of url after slash
};

const Form = (props) => {
  //States
  const [error, setError] = useState({});
  console.log("initial state of error", error);

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    repeat_password: "",
  });

  const [loginPage, setLoginPage] = useState(true);

  const [url, setUrl] = useState(() => handleUrl(props.location.pathname));

  const transitions = useTransition(loginPage, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  //lifeCycle
  useEffect(() => {
    const url = handleUrl(props.location.pathname); //get current url
    setUrl(() => url); //Set Url State to current url
    if (url === "formsignup") {
      setLoginPage(false);
    } else {
      setLoginPage(true);
    }
  }, [props.history.location]); //When url changes run this useEffect.. maybe remember to reset state on change!

  //Client Side validation Todo: move to seperate js file
  const validate = () => {
    //Create Joi Schema
    const schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: false } })
        .required()
        .label("Email"),
      username: Joi.string().required().label("Username").min(5),
      password: Joi.string().required().label("Password"),
      repeat_password: Joi.ref("password"),
    });
    //Validate Schema
    const result = schema.validate(user, { abortEarly: false });
    //if no result return null
    if (!result.error) return null;

    const errors = {};
    //We go into the Joi error object and get every error message
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  //handlers
  const handleSubmit = async (e) => {
    e.preventDefault();
    //validate inputs client side
    const errors = validate();
    setError(errors || {});
    //if any errors stop return function here.
    if (errors) return;

    //check which if we are on login or signup or forgot password
    if (url === "formsignup") {
      try {
        return await userService.register(user);
      } catch (error) {
        if (error.response && error.response.status === 400)
          console.log(error.response);
      }
    }

    // console.log('hello world')
    //
    // if (url === 'login') {
    //     const user = await userService.login(user, () => {
    //         props.history.push("/");
    //     })
    // }
    // // run the function that is needed on user states, login , signup, forgotpassword
    //
    //
    // const userError = login(user.username, user.password, () => { //
    //
    // });
    //
    // if (userError) {
    //     setError({
    //         isError: true,
    //         errorText: userError
    //     });
    // }
  };

  const handleUser = (email, username, password, repeatPassword) => {
    setUser({
      email: email,
      username: username,
      password: password,
      repeat_password: repeatPassword,
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
      <form onSubmit={handleSubmit} style={{ width: "60%", maxWidth: "600px" }}>
        <FormControl fullWidth={true} style={{ alignItems: "flex-start" }}>
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
                    <FormSignUp handleUser={handleUser} error={error} />
                  </animated.div>
                )
          )}
        </FormControl>
      </form>
    </Box>
  );
};

export default withRouter(Form);
