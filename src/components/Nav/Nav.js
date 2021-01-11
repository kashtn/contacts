import React from "react";
import ModalRegister from "../Register/ModalRegister";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Nav() {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <nav>
        {!auth && (
          <h3>
            <ModalRegister />
          </h3>
        )}{" "}
        {auth && (
          <>
            <Link className="link" to="/">
              Main
            </Link>{" "}
            <Link className="link" to="/contactList">
              Contacts
            </Link>{" "}
            <Link className="link" to="/logout">
              Logout
            </Link>
          </>
        )}
      </nav>
      <br />
    </>
  );
}
