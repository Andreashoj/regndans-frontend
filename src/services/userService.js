import axios from "./httpService";
import {apiUrl} from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function register(user) {
    return axios.post(apiEndpoint, {
        email: user.email,
        username: user.username,
        password: user.password
    })
}

// Either fetch user details from localstorage, cookie or api

export const login = (user, handleRoute) => {
    // API call with login details, returns incrypted user that gets saved to
    // localstorage or cookie
    console.log(user);

    if (user === false) {
        handleRoute();
    } else {
        return "Forkert kombination";
    }
};

export const logout = handleRoute => {
    // Delete user from localStorage
    handleRoute();
    return true;
};

export const isAuthenticated = () => {
    // Check if user exists in localstorage to verify that they are authenticated
    const isAuth = true;
    if (isAuth) {
        return true;
    } else {
        return false;
    }
};