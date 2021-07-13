import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserRoutes from "../components/user/routes"

function AppRouter() {
    return (

        <Router>
            <Switch>
                <Route path="/user">
                    <UserRoutes></UserRoutes>
                </Route>
            </Switch>
        </Router>


    );
}

export default AppRouter;