import React, { useState } from "react";
import { login } from "../utils/auth/auth";
import {
  Box,
  FormControl,
  Button,
  Switch,
  makeStyles,
  Link
} from "@material-ui/core";
import InputField from "./inputField";
import logo from "../../assets/logo-title.svg";

const useStyles = makeStyles({
  activeText: {
    opacity: 1
  },
  inActiveText: {
    opacity: 0.3
  }
});

const Form = props => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const [error, setError] = useState({
    isError: false,
    errorText: ""
  });

  const handleSubmit = e => {
    e.preventDefault();

    const userError = login(username, password, () => {
      props.history.push("/");
    });

    if (userError) {
      setError({
        isError: true,
        errorText: userError
      });
    }
  };

  const handleChange = event => {
    setIsRemember(!isRemember);
  };

  return (
    <Box width="50%" display="flex" alignItems="center" justifyContent="center">
      <form onSubmit={e => handleSubmit(e)} style={{ width: "60%" }}>
        <FormControl fullWidth={true} style={{ alignItems: "flex-start" }}>
          <Box display="flex" width="100%" justifyContent="center">
            <img src={logo} alt="Regndans logo" />
          </Box>
          <h1 className="form-title">Sign In</h1>
          <InputField
            handleState={setUsername}
            error={error}
            value={username}
            label="Brugernavn"
            type="text"
          />
          <InputField
            handleState={setPassword}
            error={error}
            value={password}
            label="Password"
            type="password"
          />
          <Box display="flex" height="40px" display="flex" alignItems="center">
            <p
              className={isRemember ? classes.activeText : classes.inActiveText}
              style={{ transition: "all 0.2s ease" }}
            >
              Keep me logged in?
            </p>
            <Switch
              checked={isRemember}
              onChange={handleChange}
              value="checkedB"
              color="secondary"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Box>
          <Box marginTop="15px" display="flex" justifyContent="flex-end">
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
              padding="dense"
              style={{ color: "white", height: "48px", padding: "0 40px" }}
            >
              Login
            </Button>
          </Box>
          <Box>
            <Link style={{ cursor: "pointer" }} to="#">
              Forgot your password?
            </Link>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
};

export default Form;
