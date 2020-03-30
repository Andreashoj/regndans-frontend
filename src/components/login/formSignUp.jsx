import React, {useState} from "react";
import {Box, Button, Switch, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import InputField from "./inputField";

const FormSignUp = ({handleUser, error}) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");



    return (
        <>
            <h1 className="form-title" style={{margin: "48px 0 16px 0"}}>
                Sign Up
            </h1>
            <InputField
                handleState={setEmail}
                error={!!error.email} // CHANGE TO BOOLEAN STATE INSTEAD OF STRING
                helperText={error.email}
                value={email}
                label="Email"
                type="email"
            />
            <InputField
                handleState={setUsername}
                error={!!error.username} // CHANGE TO BOOLEAN STATE INSTEAD OF STRING
                helperText={error.username}
                value={username}
                label="Brugernavn"
                type="text"
            />
            <InputField
                handleState={setPassword}
                error={!!error.password} // CHANGE TO BOOLEAN STATE INSTEAD OF STRING
                helperText={error.password}
                value={password}
                label="Password"
                type="password"
            />
            <InputField
                handleState={setRepeatPassword}
                error={!!error.repeat_password} // CHANGE TO BOOLEAN STATE INSTEAD OF STRING
                helperText={error.repeat_password}
                value={repeatPassword}
                label="Confirm password"
                type="password"
            />
            <Box display="flex" height="40px" alignItems="center"></Box>
            <Box marginTop="15px" display="flex" justifyContent="flex-end">
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    padding="dense"
                    style={{color: "white", height: "48px", padding: "0 40px"}}
                    onClick={() => handleUser(email, username, password, repeatPassword)}
                >
                    Sign up
                </Button>
            </Box>
            <Box marginTop="16px">
                <Link style={{cursor: "pointer"}} to="/login">
                    Already have an account?
                </Link>
            </Box>
        </>
    );
};

export default FormSignUp;
