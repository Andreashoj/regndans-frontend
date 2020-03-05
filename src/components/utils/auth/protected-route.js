import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./auth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // Protected route, takes in a component and checks if the user is Authenticated
  // If not, it redirects to '/' - otherwise it renders the protected component.

  // The component gets passed as a prop from the Router, it then passes on
  // the remaining props (React Router => history, location, path etc.) to the
  // rendered component

  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
