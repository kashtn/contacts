import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import Logout from "../Logout/Logout";
import Main from "../Main/Main";
import Add from "../Contacts/Add";
import Edit from "../Contacts/Edit";
import Nav from "../Nav/Nav";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <PrivateRoute path="/logout">
              <Logout />
            </PrivateRoute>
            <PrivateRoute path="/contactList">
              <Contacts />
            </PrivateRoute>
            <PrivateRoute path="/add">
              <Add />
            </PrivateRoute>
            <PrivateRoute path="/edit/:paramsId">
              <Edit />
            </PrivateRoute>
            <Route path="/" exact>
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
