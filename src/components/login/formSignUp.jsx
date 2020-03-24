import React, { useState } from "react";
import { Box, Button, Switch, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import InputField from "./inputField";

const FormSignUp = ({ error }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      {" "}
      <h1 className="form-title" style={{ margin: "48px 0 16px 0" }}>
        Sign Up
      </h1>
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
      <InputField
        handleState={setPassword}
        error={error}
        value={password}
        label="Confirm password"
        type="password"
      />
      <InputField
        handleState={setPassword}
        error={error}
        value={password}
        label="Email"
        type="email"
      />
      <Box marginTop="15px" display="flex" justifyContent="flex-start">
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
          padding="dense"
          style={{ color: "white", height: "48px", padding: "0 40px" }}
        >
          Sign up
        </Button>
      </Box>
      <Box marginTop="16px">
        <Link style={{ cursor: "pointer" }} to="/login">
          Already have an account?
        </Link>
      </Box>
    </>
  );
};

export default FormSignUp;
