import React from "react";
import { useSelector } from "react-redux";

function Main() {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  return (
    <>
      {auth && <h1>Welcome Home, {user.username}!</h1>}
      {!auth && <h1>Hello, Stranger!</h1>}
    </>
  );
}

export default Main;
