import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import './main.css';
import TasksPage from "./TasksPage";
import TransferPage from "./TransferPage";

const Routes = () => (
    <Router>
        <div className="main_container">
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/tasks" component={TasksPage}/>
            <Route path="/transfer" component={TransferPage}/>
        </div>
    </Router>
);

export default Routes;