import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children, ...rest }) {
  const { auth } = useSelector((state) => state);
  return (
    <Route {...rest}>
      {auth ? children : <Redirect to="/" />}
    </Route>
  )
}

export default PrivateRoute;
