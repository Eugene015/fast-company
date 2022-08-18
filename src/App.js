import React from "react";
import { Route, Switch } from "react-router-dom";
import Users from "./components/users";
import Main from "./components/main";
import Login from "./components/login";
import NavBar from "./components/navBar";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
            </Switch>
        </>
    );
}

export default App;
