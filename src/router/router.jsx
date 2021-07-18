import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserRoutes from "../components/user/routes"
import Home from "../components/home/home";

function AppRouter() {
    return (

        <Router>
            <Switch>
                <Route path="/user">
                    <UserRoutes></UserRoutes>
                </Route>
                <Route path="/">
                        <Home></Home>
                </Route>
            </Switch>
        </Router>


    );
}

export default AppRouter;