import React, { useState } from "react";
import { Box, Button, Switch, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import InputField from "./inputField";

const useStyles = makeStyles({
  activeText: {
    opacity: 1
  },
  inActiveText: {
    opacity: 0.3
  }
});

const FormSignIn = ({ handleUser, error }) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);

  const handleChange = event => {
    setIsRemember(!isRemember);
  };

  console.log(error)

  return (
    <>
      <h1 className="form-title" style={{ margin: "48px 0 16px 0" }}>
        Sign In
      </h1>
      <InputField
        handleState={setUsername}
        error={!!error.username}
        helperText={error.username}
        value={username}
        label="Brugernavn"
        type="text"
      />
      <InputField
        handleState={setPassword}
        error={!!error.password}
        helperText={error.password}
        value={password}
        label="Password"
        type="password"
      />
      <Box display="flex" height="40px" alignItems="center">
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
          onClick={() => handleUser(username, password)}
          style={{ color: "white", height: "48px", padding: "0 40px" }}
        >
          Login
        </Button>
      </Box>
      <Box marginTop="16px">
        <Link style={{ cursor: "pointer" }} to="login/formsignup">
          Forgot your password?
        </Link>
      </Box>
    </>
  );
};

export default FormSignIn;
