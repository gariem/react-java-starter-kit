import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import './main.css';
import TasksPage from "./TasksPage";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div className="main_container">
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/tasks" component={TasksPage}/>
                </div>
            </Router>
        )
    }
}

export default Routes;