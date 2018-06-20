import React from 'react';
import {connect} from "react-redux";
import {fetchTaskList} from '../../actions/taskActions'
import {VIEW_TASK_LIST} from "../../actions/actionTypes";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

class Tasks extends React.Component {

    componentDidMount() {
        this.props.fetchTaskList();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.actionType === VIEW_TASK_LIST) {
            this.setState({nextProps});
        }
    }

    render() {
        return (
            <div>
                <TaskForm/>
                <TaskList taskList={this.props.taskList}/>
            </div>
        )
    }
}

const mapState = state => {
    return {
        taskList: state.task.todoList || [],
        actionType: state.task.actionType
    }
};

const mapDispatch = {
    fetchTaskList
};

export default connect(mapState, mapDispatch)(Tasks);