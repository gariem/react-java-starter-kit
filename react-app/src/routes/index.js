import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import './main.css';
import TasksPage from "./TasksPage";
import TransferPage from "./TransferPage";

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/tasks" component={TasksPage}/>
            <Route path="/transfer" component={TransferPage}/>
        </Switch>
    </Router>
);

export default Routes;
