// Either fetch user details from localstorage, cookie or api

export const login = (username, password, handleRoute) => {
  // API call with login details, returns incrypted user that gets saved to
  // localstorage or cookie
  console.log(username, password);
  const user = false;

  if (user) {
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
