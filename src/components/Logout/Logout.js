import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions";
import { useHistory } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(logOut());
    window.localStorage.removeItem("redux");
    history.push("/");
  }, [dispatch, history]);
  return <></>;
}

export default Logout;
