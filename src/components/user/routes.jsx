import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login";
import CreateUser from "./createUser";
import Background from "./background";

function UserRoutes() {

    return (

        <Router>
            <Switch>
                <Route path="/user/login">
                    <Background></Background>
                    <Login></Login>
                </Route>
                <Route path="/user/register">
                    <Background></Background>
                    <CreateUser></CreateUser>
                </Route>
            </Switch>
        </Router>

    );
}

export default UserRoutes;